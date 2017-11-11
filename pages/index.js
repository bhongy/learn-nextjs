import Link from "next/link";
import { MainLayout } from "../components/MainLayout";

const PostLink = ({ title }) => (
  <p>
    <Link href={{ pathname: "/post", query: { title } }}>
      <a>{title}</a>
    </Link>
  </p>
);

const Index = () => (
  <MainLayout>
    <h1>My Blog</h1>
    <nav>
      <PostLink title="Hello Next.js" />
      <PostLink title="Learn Next.js is awesome" />
      <PostLink title="Deploy apps with Zeit" />
    </nav>
  </MainLayout>
);

export default Index;
