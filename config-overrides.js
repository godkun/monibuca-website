const { override, fixBabelImports, addLessLoader, addBabelPlugin } = require('customize-cra');

module.exports = override(
  fixBabelImports('import', {
    libraryName: 'antd',
    libraryDirectory: 'es',
    style: true,
  }),
  addBabelPlugin("@babel/plugin-proposal-optional-chaining"),
  addLessLoader({
    javascriptEnabled: true,
  }),
);