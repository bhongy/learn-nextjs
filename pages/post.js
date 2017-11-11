import { MainLayout } from "../components/MainLayout";

const Content = ({ title }) => [
  <h1 key="heading">{title}</h1>,
  <p key="content">This is the blog post content.</p>
];

const Post = props => (
  <MainLayout>
    <Content title={props.url.query.title} />
  </MainLayout>
);

export default Post;
