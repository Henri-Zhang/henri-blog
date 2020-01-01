const fs = require('fs');

const dirs = ['简单', '中等', '困难'];
const sidebar = [];

const genCategory = (dir, files) => {
  const result = {
    title: dir,
    collapsable: true,
  };

  result.children = files.map(file => `/${dir}/${file.replace('.md', '')}`);

  return result;
};

dirs.forEach(dir => {
  const files = fs.readdirSync(`./docs/${dir}`);
  sidebar.push(genCategory(dir, files));
});

const config = require('./docs/.vuepress/originConfig.js');

config.themeConfig.sidebar.push(...sidebar);

fs.writeFileSync(
  './docs/.vuepress/config.js',
  `module.exports = ${JSON.stringify(config, null, 2)};`,
);
