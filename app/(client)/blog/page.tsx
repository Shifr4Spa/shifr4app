import React from "react";
import Header from "../../components/Header";
import { Post } from "../../utils/interface";
import PostComponent from "../../components/PostComponent";
import PostCard from "../../components/PostCard";

import { client } from "@/sanity/lib/client";
import HeaderPage from "@/app/components/HeaderPage";
import FooterSection from "../(sections)/FooterSection";

async function getPosts() {
  const query = `
    *[_type == "post"] {
      title,
      slug,
      poster,
      publishedAt,
      excerpt,
      tags[]-> {
        _id,
        slug,
        name
      }
    }
    `;
  const data = await client.fetch(query);
  return data;
}

export const revalidate = 60;

export default async function Blog() {
  const posts: Post[] = await getPosts();
  console.log(posts, "posts");

  return (
    <div className="min-h-screen !bg-[#121212]">
      <HeaderPage title="Blog" />
      <div className="py-0 flex flex-col lawyers-center bg-[#efefef] pb-[5rem] text-black">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          {/* <Header title="Articles" tags /> */}
          <ul className="grid gap-x-8 gap-y-10 mt-16 sm:grid-cols-2 lg:grid-cols-3">
            {posts?.length > 0 &&
              //   posts?.map((post) => <PostComponent key={post?._id} post={post} />)}
              posts?.map((post) => <PostCard key={post?._id} post={post} />)}
          </ul>
        </div>
      </div>
      <FooterSection />
    </div>
  );
}
