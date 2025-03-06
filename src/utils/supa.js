import { createClient } from "@supabase/supabase-js";
const supabaseUrl = import.meta.env.VITE_SUPA_URL;
const supabaseKey = import.meta.env.VITE_SUPA_KEY;
const client = createClient(supabaseUrl, supabaseKey);

// Update
export const update = async () => {
  let { data: page, error } = await client.from("page").select("*");
  return page;
};

// export const post = async (params = []) => {
//   if (params.length == 0) return;
// const { data, error } = await client.from("page").insert(params).select();

// Create
export const post = async (source) => {
  const { data, error } = await client.from("page").insert([source]);
};
