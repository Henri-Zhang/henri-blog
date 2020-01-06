const Koa = require('koa');
const Router = require('koa-router');
const fs = require('fs');
const Vue = require('vue');
const renderer = require('vue-server-renderer').createRenderer({
  template: fs.readFileSync(`${process.cwd()}/src/index.ejs`, 'utf-8'),
});
// const { createApp } = require('./app');

// const vue = createApp();
const vue = new Vue({
  template: '<h1>Hello Henri.</h1>',
});

const app = new Koa();
const router = new Router();

router.get('*', async (context, next) => {
  renderer.renderToString(vue, (err, html) => {
    if (err) {
      return;
    }
    console.log(html);

    context.body = html;
  });
});

app.use(router.routes()).use(router.allowedMethods());

const port = process.env.port || 3000;

app.listen(port, () => {
  console.log(`Server has started at ${port}.`);
});
