// import { MainLayout } from "../components/MainLayout";
import { withLayout } from "../components/MainLayout";

// const About = () => (
//   <MainLayout>
//     <p>About Page</p>
//   </MainLayout>
// );

const About = () => <p>About Page</p>;

export default withLayout(About);
