import fetch from "isomorphic-unfetch";
import Markdown from "react-markdown";
import MainLayout from "../components/MainLayout";
// import { striptags } from "../utils";

const Show = ({ show }) => (
  <MainLayout>
    <h1>{show.name}</h1>
    <Markdown
      source={show.summary}
      escapeHtml={false /* dangerous, don't do in production */}
    />
    <img src={show.image.medium} />
  </MainLayout>
);

/*
context: {
  pathname, query, asPath, err
  req (s), res (s),
  jsonPageRes (c),
}
*/
Show.getInitialProps = context => {
  const { id } = context.query;
  return fetch(`https://api.tvmaze.com/shows/${id}`)
    .then(res => res.json())
    .then(show => {
      console.log(`Fetched show: ${show.name}`);
      // const summary = striptags(raw.summary);
      // const show = { ...raw, summary };
      return { show };
    });
};

export default Show;
