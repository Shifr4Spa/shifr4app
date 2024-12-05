import Header from "@/app/components/Header";
import { Post } from "@/app/utils/interface";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import { PortableText } from "@portabletext/react";
import { VT323 } from "next/font/google";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import React from "react";
import { Frank_Ruhl_Libre, Roboto } from "next/font/google";
import FooterSection from "../../(sections)/FooterSection";

const font_frank = Frank_Ruhl_Libre({ subsets: ["latin"] });
const font_roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

const dateFont = VT323({ weight: "400", subsets: ["latin"] });

interface Params {
  params: {
    slug: string;
  };
}

async function getPost(slug: string) {
  const query = `
  *[_type == "post" && slug.current == "${slug}"][0] {
    title,
    slug,
    publishedAt,
    excerpt,
    _id,
    body,
    tags[]-> {
      _id,
      slug,
      name
    }
  }
  `;

  const post = await client.fetch(query);
  return post;
}

export const revalidate = 60;

const page = async ({ params }: Params) => {
  console.log(params, "parmas");
  const post: Post = await getPost(params?.slug);
  console.log(post, "post");

  if (!post) {
    notFound();
  }

  return (
    <div>
      {/* <Header title={post?.title} /> */}
      <div
        className="pt-16"
        style={{ background: "#efefef", marginTop: "12%" }}
      >
        <h1
          className={`${font_frank.className} text-5xl font-normal text-center grid`}
          style={{
            marginTop: "13px !important",
            width: "780px",
            margin: "auto",
          }}
        >
          {post?.title}

          <span
            className={`${font_roboto?.className} text-[#971e24] text-sm text-center m-auto mt-10`}
          >
            {new Date(post?.publishedAt).toDateString()}
          </span>
        </h1>

        {/* <div className="mt-5">
          {post?.tags?.map((tag) => (
            <Link key={tag?._id} href={`/tag/${tag.slug.current}`}>
              <span className="mr-2 p-1 rounded-sm text-sm lowercase dark:bg-gray-950 border dark:border-gray-900">
                #{tag.name}
              </span>
            </Link>
          ))}
        </div> */}

        <div className={`${richTextStyles} pb-[100px]`}>
          <PortableText
            value={post?.body}
            components={myPortableTextComponents}
          />
        </div>

        <FooterSection />
      </div>
    </div>
  );
};

export default page;

const myPortableTextComponents = {
  types: {
    image: ({ value }: any) => (
      <Image
        src={urlForImage(value).url()}
        alt="Post"
        width={700}
        height={700}
      />
    ),
  },
};

const richTextStyles = `
mt-14
text-justify
max-w-2xl
m-auto
prose-headings:my-5
prose-heading:text-2xl
prose-p:mb-5
prose-p:leading-7
prose-li:list-disc
prose-li:leading-7
prose-li:ml-4
`;
