const Koa = require('koa');
const Router = require('koa-router');
const send = require('koa-send');
const path = require('path');
const fs = require('fs');
const VueSsrRender = require('vue-server-renderer');

const serverBundle = require('./../dist/vue-ssr-server-bundle.json');
const clientManifest = require('./../dist/vue-ssr-client-manifest.json');

const renderer = VueSsrRender.createBundleRenderer(serverBundle, {
  runInNewContext: true,
  template: fs.readFileSync(`${process.cwd()}/src/index.ejs`, 'utf-8'),
  clientManifest,
});

const app = new Koa();
const router = new Router();

router.get('/static/*', async context => {
  await send(context, context.path, { root: path.resolve(__dirname, '../dist') });
});

router.get('/favicon.ico', async context => {
  await send(context, context.path, { root: path.resolve(__dirname, '../dist') });
});

router.get('*', async (context, next) => {
  context.set('Content-Type', 'text/html');
  console.log(context.url);

  const html = await renderer.renderToString({ url: context.url });

  context.body = html;

  next();
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Server has started at ${port}.`);
});
