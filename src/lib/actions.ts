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

    const { error } = await supabase.from("comments").insert({
      article_id: articleId,
      user_id: user.id,
      user_email: user.email,
      text,
    });

    if (error) return { error: error.message };
    return { success: true };
  } catch {
    return { error: "Something went wrong" };
  }
};

export const toggleLike = async (articleId: string, increment: boolean) => {
  try {
    const supabase = await createClient();
    const { error } = await supabase.rpc("toggle_like", {
      article_id: articleId,
      increment,
    });
    if (error) return { error: error.message };
    return { success: true };
  } catch {
    return { error: "Something went wrong" };
  }
};
