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
export type FeedPageProps = {
  searchParams: {
    category?: string;
  };
};
