# learns-nextjs

Play with [Next.js](https://github.com/zeit/next.js) by going through tutorials on https://learnnextjs.com

## Development

```bash
yarn dev
```

You don't need to build before running `yarn dev` because `dev` option is passed to next handler in `server.js` based on `process.env.NODE_ENV`. Hence, even both `yarn start` and `yarn dev` both use `server.js`, they use different handlers (dev server versus production server).

## Production

```bash
yarn build && PORT=<choose port> yarn start
```

It seems like there's no such thing as dev build when running `next build`, so `yarn build` will always build for production.

## Static Site

```bash
yarn build-static # render project to static assets to `out` folder
# preview locally at port 3000 by `yarn build-static && yarn serve-static`
```

`next.config.js` needs to be updated if new pages are added.
