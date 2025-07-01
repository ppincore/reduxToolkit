// import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import type { IPost } from "../../models/IPost";

export const postAPI = createApi({
  reducerPath: "postAPI",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3001/",
  }),
  endpoints: (build) => ({
    getAllPosts: build.query<IPost[], number>({
      query: (limit: number = 5) => ({
        url: "posts",
        params: {
          _limit: limit,
        },
      }),
    }),
    createPost: build.mutation<IPost, IPost>({
      query: (post) => ({
        url: "posts",
        method: "POST",
        body:post
      }),
    }),
  }),
});
