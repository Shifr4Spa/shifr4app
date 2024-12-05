export interface Post {
  title: string;
  slug: { current: string };
  publishedAt: string;
  excerpt: string;
  body: any;
  tags: Array<Tag>;
  _id: string;
  poster: any;
}

export interface Tag {
  name: string;
  slug: { current: string };
  _id: string;
  postCount?: number;
}
