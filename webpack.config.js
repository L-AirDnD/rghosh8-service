const path = require('path');
const SRC_DIR = path.join(__dirname, './client/src');
const DIST_DIR = path.join(__dirname, './client/dist');

/*
module.exports is an object that the current module returns 
when 
it is "required" in another program or module.
*/

module.exports = {
  entry:`${SRC_DIR}/index.jsx`,
  output: {
    filename: `bubble.js`,
    path: DIST_DIR
  },
  module: {
    rules: [
      {
        test: /\.jsx?/,
        include: SRC_DIR,
        loader: 'babel-loader',
        query: {
          presets: ['@babel/preset-react'],
        },
      },
    ]
  },
};