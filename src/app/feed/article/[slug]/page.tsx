import { Navbar } from "@/components/NavBar";
import { CategoryBadge } from "@/components/CategoryBadge";
import { LikeButton } from "@/components/LikeButton";
import { CommentSection } from "@/components/CommentSection";
import { UserAvatar } from "@/components/UserAvatar";
import { FeedPageProps } from "@/types";
import Image from "next/image";

import { formatDate } from "@/lib/utils";
import { getUser } from "@/lib/auth";
import { ArticleActions } from "../../ArticleActiosn.tsx";
import { ReadingTracker } from "@/components/ReadTracker";
import {
  getArticleBySlug,
  getArticles,
  getComments,
  getUserBookmark,
  getUserLike,
} from "@/lib/queries";

export async function generateStaticParams() {
  const articles = await getArticles();
  return articles.map((article) => ({ slug: article.slug }));
}

export default async function ArticlePage({ params }: FeedPageProps) {
  const { slug } = await params;

  const [user, article] = await Promise.all([
    getUser(),
    getArticleBySlug(slug as string),
  ]);

  const [userLiked, userBookmarked, comments] = await Promise.all([
    user ? getUserLike(article.id) : Promise.resolve(false),
    user ? getUserBookmark(article.id) : Promise.resolve(false),
    getComments(article.id),
  ]);

  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#FF6B6B]/30 pb-20">
      <Navbar showSearch={false} showActions activeLink="feed" user={user} />
      <ReadingTracker articleId={article.id} userId={user?.id} />
      <main className="max-w-3xl mx-auto px-4 pt-10">
        {!article ? (
          <div className="text-center pt-20">
            <h1 className="text-4xl font-bold mb-4">Article not found</h1>
            <p className="text-white/50 mb-8">
              This article may have been removed or the link is incorrect.
            </p>
            <a
              href="/feed"
              className="px-6 py-3 bg-[#FF6B6B] text-white rounded-lg hover:bg-[#FF6B6B]/90"
            >
              Back to feed
            </a>
          </div>
        ) : (
          <>
            <div className="mb-6">
              <CategoryBadge category={article.category} />
            </div>

            <h1 className="text-4xl md:text-5xl font-bold tracking-tight leading-[1.1] mb-6">
              {article.title}
            </h1>

            <div className="flex items-center justify-between py-6 border-y border-white/10 mb-8">
              <div className="flex items-center gap-3">
                <UserAvatar name={article.author_name} size="md" />
                <div className="flex flex-col">
                  <span className="font-medium text-sm">
                    {article.author_name}
                  </span>
                  <span className="text-xs text-white/50">
                    Published {formatDate(article.created_at)} ·{" "}
                    {article.read_time} read
                  </span>
                </div>
              </div>
              <ArticleActions
                articleId={article.id}
                user={user}
                initialBookmarked={userBookmarked}
              />
            </div>

            <div className="aspect-[2/1] w-full rounded-xl overflow-hidden mb-10 border border-white/10 relative">
              <Image
                src={article?.image}
                alt={article?.title}
                fill
                className="w-full h-full object-cover"
              />
            </div>

            <article className="text-xl prose prose-invert prose-p:text-white/80 prose-p:leading-relaxed prose-headings:font-bold prose-headings:tracking-tight max-w-none">
              {article.body}
            </article>

            <div className="flex items-center justify-center gap-4 py-12 my-12 border-y border-white/10">
              <LikeButton
                initialCount={article.like_count}
                initialLiked={userLiked}
                articleId={article.id}
                user={user}
              />
            </div>

            <CommentSection
              user={user}
              intialComments={comments}
              articleid={article?.id}
            />
          </>
        )}
      </main>
    </div>
  );
}
