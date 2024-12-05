import { client } from "@/sanity/lib/client";
import Header from "../components/Header";
import { Post } from "../utils/interface";
import PostComponent from "../components/PostComponent";
import HeroSection from "./(sections)/HeroSection";
import AboutSection from "./(sections)/AboutSection";
import ServiceSection from "./(sections)/ServiceSection";
import FooterSection from "./(sections)/FooterSection";
import ContactSection from "./(sections)/ContactSection";

async function getPosts() {
  const query = `
  *[_type == "post"] {
    title,
    slug,
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

export default async function Home() {
  const posts: Post[] = await getPosts();
  console.log(posts, "posts");

  return (
    <div className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ServiceSection />
      <ContactSection />
      <FooterSection />
    </div>
  );
}
