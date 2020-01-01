const fs = require('fs');

const dirs = ['简单', '中等', '困难'];
const sidebar = [];

const genCategory = (dir, files) => {
  const result = {
    title: dir,
    collapsable: true,
  };

  // file按题号排序，若有题号非数字放最后按字母顺序排
  const sorter = (a, b) => {
    const orderA = a.substr(0, a.indexOf('.'));
    const orderB = b.substr(0, b.indexOf('.'));

    return orderA - orderB || (orderA > orderB) - 0.5;
  };

  result.children = files.sort(sorter).map(file => `/${dir}/${file.replace('.md', '')}`);

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
