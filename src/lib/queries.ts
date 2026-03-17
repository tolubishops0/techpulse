import { createClient } from "@/lib/supabase/server";
import { Category } from "@/types";

export const getArticles = async (category?: Category, search?: string) => {
  try {
    const supabase = await createClient();
    let query = supabase.from("articles").select("*");
    if (category) query = query.eq("category", category);

    if (search) query = query.ilike("title", `%${search}%`);
    const { data, error } = await query;
    if (error) {
      console.log({ error });
      return [];
    }
    return data;
  } catch (error) {
    console.log({ error });
    return [];
  }
};

export const getTrendingArticles = async () => {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("trending_articles")
      .select("*");
    if (error) {
      console.log({ error });
      return [];
    }
    return data;
  } catch (error) {
    console.log({ error });
    return [];
  }
};

export const getArticleBySlug = async (slug: string) => {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("articles")
      .select("*")
      .eq("slug", slug)
      .single();

    if (error) {
      console.log({ error });
      return null;
    }
    return data;
  } catch (error) {
    console.log({ error });
    return null;
  }
};

export const getUserLike = async (articleId: string) => {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return false;

    const { data } = await supabase
      .from("likes")
      .select("id")
      .eq("article_id", articleId)
      .eq("user_id", user.id)
      .single();

    return !!data;
  } catch {
    return false;
  }
};

export const getUserBookmark = async (articleId: string) => {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return false;

    const { data } = await supabase
      .from("bookmarks")
      .select("id")
      .eq("article_id", articleId)
      .eq("user_id", user.id)
      .single();

    return !!data;
  } catch {
    return false;
  }
};

export const getDashboardData = async (userId: string) => {
  try {
    const supabase = await createClient();

    const [bookmarksRes, commentsRes, historyRes] = await Promise.all([
      supabase
        .from("bookmarks")
        .select(
          `
          id,
          article_id,
          articles (
            slug,
            title,
            category,
            image
          )
        `,
        )
        .eq("user_id", userId)
        .order("created_at", { ascending: false })
        .limit(5),

      supabase.from("comments").select("id").eq("user_id", userId),

      supabase
        .from("reading_history")
        .select(
          `
          id,
          progress,
          updated_at,
          articles (
            slug,
            title
          )
        `,
        )
        .eq("user_id", userId)
        .order("updated_at", { ascending: false }),
    ]);

    return {
      bookmarks: bookmarksRes.data ?? [],
      commentCount: commentsRes.data?.length ?? 0,
      history: historyRes.data ?? [],
    };
  } catch (error) {
    console.log({ error });
    return { bookmarks: [], commentCount: 0, history: [] };
  }
};

export const getComments = async (articleId: string) => {
  try {
    const supabase = await createClient();
    const { data, error } = await supabase
      .from("comments")
      .select("*")
      .eq("article_id", articleId)
      .order("created_at", { ascending: false });

    if (error) return [];
    return data;
  } catch {
    return [];
  }
};
