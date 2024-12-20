import Header from "../components/Header";
import { Post } from "../utils/interface";
import PostComponent from "../components/PostComponent";

export const revalidate = 60;

export default async function Home() {
  return (
    <div className="min-h-screen">
      <h1>ADMIN PANEL</h1>
    </div>
  );
}
