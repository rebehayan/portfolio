// import { createClient } from "@supabase/supabase-js";
// const supabaseUrl = import.meta.env.VITE_SUPA_URL;
// const supabaseKey = import.meta.env.VITE_SUPA_KEY;
// const client = createClient(supabaseUrl, supabaseKey);

// export const update = async () => {
//   let { data: page, error } = await client.from("page").select("*");
//   console.log(page, error);
// };

// // export const post = async (params = []) => {
// //   if (params.length == 0) return;
// // const { data, error } = await client.from("page").insert(params).select();
// export const post = async () => {
//   const { data, error } = await client.from("page").insert([
//     {
//       title: prompt("title?"),
//       body: prompt("body?"),
//     },
//   ]);

//   update();
//   // console.log(data, error);
// };
