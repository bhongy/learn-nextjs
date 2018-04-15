# learns-nextjs

Play with [Next.js](https://github.com/zeit/next.js) by going through tutorials on https://learnnextjs.com

## Development

```bash
yarn dev
```

## Production

```bash
yarn build && PORT=<choose port> yarn start
```

## Static Site

```bash
yarn make-static # render project to static assets to `out` folder
# preview locally at port 3000 by `yarn make-static && yarn serve-static`
```

`next.config.js` needs to be updated if new pages are added.
