import { Navbar } from "@/components/NavBar";
import { CategoryBadge } from "@/components/CategoryBadge";
import { LikeButton } from "@/components/LikeButton";
import { CommentSection } from "@/components/CommentSection";
import { UserAvatar } from "@/components/UserAvatar";
import { Article, FeedPageProps } from "@/types";
import { getArticleBySlug, getUserBookmark, getUserLike } from "@/lib/actions";
import { formatDate } from "@/lib/utils";
import { getUser } from "@/lib/auth";
import { ArticleActions } from "../../ArticleActiosn.tsx";

export default async function ArticlePage({ params }: FeedPageProps) {
  const { slug } = await params;
  const user = await getUser();
  const article = (await getArticleBySlug(slug as string)) as Article;
  const userLiked = user ? await getUserLike(article.id) : false;
  const userBookmarked = user ? await getUserBookmark(article.id) : false;
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white font-sans selection:bg-[#FF6B6B]/30 pb-20">
      <Navbar
        showSearch={false}
        showActions
        activeLink="feed"
        user={user?.email}
      />
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

            <div className="aspect-[2/1] w-full rounded-xl overflow-hidden mb-10 border border-white/10">
              <img
                src="/__mockup/images/article-web.png"
                alt="React 19"
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

            <CommentSection user={user} articleId={article?.id} />
          </>
        )}
      </main>
    </div>
  );
}
