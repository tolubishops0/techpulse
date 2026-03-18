export type Category =
  | "AI"
  | "Web Dev"
  | "Open Source"
  | "Cloud"
  | "Security"
  | "Tools"
  | "Hardware"
  | "Quantum";

export type Article = {
  author_initials: string;
  author_name: string;
  body: string;
  category: Category;
  comment_count: number;
  created_at: string;
  date: string;
  excerpt: string;
  id: string;
  image: string;
  like_count: number;
  read_time: string;
  slug: string;
  title: string;
};

export interface FeedPageProps {
  params: { slug?: string };
}

export type BookmarkItem = {
  id: string;
  article_id: string;
  articles: {
    slug: string;
    title: string;
    category: string;
    image: string;
  };
};

export type BookmarkInsert = {
  article_id: string;
  user_id: string;
  slug: string | null;
  title: string | null;
  excerpt: string | null;
  category: string;
  image: string | null;
  author_name: string | null;
  date: string | null;
  read_time: string | null;
  like_count: number | null;
};
