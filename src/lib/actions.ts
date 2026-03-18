"use server";

import { BookmarkInsert } from "@/types";
import { createClient } from "./supabase/server";

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

export const toggleBookmark = async (
  articleId: string,
  article?: BookmarkInsert,
) => {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return { error: "Not signed in" };

    const { data: existing } = await supabase
      .from("bookmarks")
      .select("id")
      .eq("article_id", articleId)
      .eq("user_id", user.id)
      .single();

    if (existing) {
      await supabase.from("bookmarks").delete().eq("id", existing.id);
      return { bookmarked: false };
    } else {
      await supabase.from("bookmarks").insert({
        article_id: articleId,
        user_id: user.id,
        slug: article?.slug,
        title: article?.title,
        excerpt: article?.excerpt,
        category: article?.category,
        image: article?.image,
        author_name: article?.author_name,
        date: article?.date,
        read_time: article?.read_time,
        like_count: article?.like_count,
      });
      return { bookmarked: true };
    }
  } catch {
    return { error: "Something went wrong" };
  }
};

export const removeBookmark = async (articleId: string) => {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return { error: "Not signed in" };

    const { error } = await supabase
      .from("bookmarks")
      .delete()
      .eq("article_id", articleId)
      .eq("user_id", user.id);

    if (error) return { error: error.message };
    return { success: true };
  } catch {
    return { error: "Something went wrong" };
  }
};

export const trackReading = async (articleId: string, progress: number) => {
  try {
    const supabase = await createClient();
    const {
      data: { user },
    } = await supabase.auth.getUser();
    if (!user) return;

    await supabase.from("reading_history").upsert(
      {
        article_id: articleId,
        user_id: user.id,
        progress,
        updated_at: new Date().toISOString(),
      },
      { onConflict: "article_id,user_id" },
    );
  } catch {}
};

export const collectEmail = async (email: string) => {
  try {
    const supabase = await createClient();
    const { data: existing } = await supabase
      .from("newsletter")
      .select("id")
      .eq("email", email)
      .single();
    if (existing) return { error: "Already subscribed!" };

    const { error } = await supabase.from("newsletter").insert({ email });

    if (error) return { error: error.message };
    return { success: true };
  } catch {
    return { error: "Something went wrong" };
  }
};
