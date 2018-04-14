import Link from "next/link";
import MainLayout from "../components/MainLayout";

const PostLink = ({ id, title }) => (
  <p>
    <Link as={`/p/${id}`} href={{ pathname: "/post", query: { title } }}>
      <a>{title}</a>
    </Link>
  </p>
);

const Index = () => (
  <MainLayout>
    <h1>My Blog</h1>
    <nav>
      <PostLink id="hello-nextjs" title="Hello Next.js" />
      <PostLink id="learn-nextjs" title="Learn Next.js is awesome" />
      <PostLink id="deploy-nextjs" title="Deploy apps with Zeit" />
    </nav>
  </MainLayout>
);

export default Index;
