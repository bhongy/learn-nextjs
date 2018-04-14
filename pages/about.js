import Markdown from 'react-markdown'
import MainLayout from "../components/MainLayout";

const markdownContent = `
# About

About page content with a [link](https://thanik.me/)

here's a quote
> assignments are a metalevel change from functions, and therefore should not be dealt with at the same level —Alan Kay
`;

const About = () => (
  <MainLayout>
    <Markdown source={markdownContent} />
    <style jsx global>{`
      /* from github */

      blockquote {
        padding: 0 1em;
        margin: 0 0 1em;
        color: #6a737d;
        border-left: 0.25em solid #dfe2e5;
      }
    `}</style>
  </MainLayout>
);

export default About;
