import fetch from "isomorphic-unfetch";
import MainLayout from "../components/MainLayout";
import { striptags } from '../utils';

const Show = ({ show }) => (
  <MainLayout>
    <h1>{show.name}</h1>
    <p>{show.summary}</p>
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
    .then(raw => {
      console.log(`Fetched show: ${raw.name}`);
      const summary = striptags(raw.summary);
      const show = { ...raw, summary };
      return { show };
    });
};

export default Show;
