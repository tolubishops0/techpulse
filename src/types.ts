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
