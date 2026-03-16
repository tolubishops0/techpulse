import { Category } from "@/types";
import { supabase } from "./supabase/client";

export const getArticles = async (category: Category) => {
  try {
    const data = await supabase
      .from("articles")
      .select(category ? `${category}` : "*");
    console.log({ data });
    return data?.data;
  } catch (error: unknown) {
    console.log({ error });
    // throw Error(error.);
  }
};
