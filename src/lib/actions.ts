"use server";
import { Category } from "@/types";
import { createClient } from "./supabase/server";

export const getArticles = async (category?: Category) => {
  try {
    const supabase = await createClient();
    let query = supabase.from("articles").select("*");
    if (category) {
      query = query.eq("category", category);
    }
    const { data, error } = await query;
    if (error) {
      console.log({ error });
      return [];
    }
    console.log({ data });
    return data;
  } catch (error) {
    console.log({ error });
    return [];
  }
};

export const getTrendingArticles = async () => {
  try {
    const supabase = await createClient();
    let query = supabase.from("trending_articles").select("*");
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

export const addComment = async (articleId: string, text: string) => {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return { error: "Not signed in" };

    const full_name =
      user.user_metadata?.full_name ??
      user.user_metadata?.user_name ??
      user.email?.split("@")[0];

    const { error } = await supabase.from("comments").insert({
      article_id: articleId,
      user_id: user.id,
      user_email: user.email,
      full_name,
      text,
    });
    if (error) return { error: error.message };
    console.log({ error });
    return { success: true };
  } catch {
    return { error: "Something went wrong" };
  }
};

export const toggleLike = async (articleId: string) => {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return { error: "Not signed in" };

    const { data: existing } = await supabase
      .from("likes")
      .select("id")
      .eq("article_id", articleId)
      .eq("user_id", user.id)
      .single();

    if (existing) {
      await supabase.from("likes").delete().eq("id", existing.id);
      await supabase.rpc("toggle_like", {
        article_id: articleId,
        increment: false,
      });
      return { liked: false };
    } else {
      await supabase
        .from("likes")
        .insert({ article_id: articleId, user_id: user.id });
      await supabase.rpc("toggle_like", {
        article_id: articleId,
        increment: true,
      });
      return { liked: true };
    }
  } catch {
    return { error: "Something went wrong" };
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
