import MainLayout from "../components/MainLayout";

const Post = props => (
  <MainLayout>
    <h1 key="heading">{props.url.query.title}</h1>
    <p key="content">This is the blog post content.</p>
  </MainLayout>
);

export default Post;
