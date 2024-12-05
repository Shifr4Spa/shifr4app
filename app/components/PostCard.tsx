import Link from "next/link";
import React from "react";
import { Lilita_One, VT323 } from "next/font/google";
import { Post } from "../utils/interface";
import imageUrlBuilder from "@sanity/image-url";
import Image from "next/image";
import { client } from "@/sanity/lib/client";

import { Frank_Ruhl_Libre, Roboto } from "next/font/google";

const font_frank = Frank_Ruhl_Libre({ subsets: ["latin"] });
const font_roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

interface Props {
  post: Post;
}

const builder = imageUrlBuilder(client);

const PostComponent = ({ post }: Props) => {
  const urlFor = (source: any) => builder.image(source);
  return (
    <li className="w-full mx-auto group sm:max-w-sm">
      <Link href={`/posts/${post?.slug?.current}`}>
        {post.poster && (
          <Image
            src={urlFor(post.poster).url()}
            alt={post.title}
            width={100}
            height={100}
            className="w-full rounded-lg object-cover max-w-[100%]"
            style={{
              height: "258px",
            }}
          />
        )}
        <div className="mt-3 space-y-2">
          <span className="block text-[#971e24] text-sm">
            {new Date(post?.publishedAt).toDateString()}
          </span>
          <h3
            className={`${font_roboto.className} text-lg text-gray-800 duration-150 group-hover:underline font-semibold`}
          >
            {post.title}
          </h3>
          <p
            className={`${font_roboto.className} text-gray-600 text-sm duration-150 group-hover:text-gray-800`}
          >
            {post.excerpt}
          </p>
        </div>
      </Link>
    </li>
  );
};

export default PostComponent;

const cardStyle = `
mb-8
p-4
border
border-gray-900
rounded-md
shadow-sm
shadow-purple-950
hover:shadow-md
hover:bg-purple-500
hover:text-white
hover:dark:bg-gray-950
`;
