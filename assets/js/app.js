// We need to import the CSS so that webpack will load it.
// The MiniCssExtractPlugin is used to separate it out into
// its own CSS file.


// webpack automatically bundles all modules in your
// entry points. Those entry points can be configured
// in "webpack.config.js".
//
// Import deps with the dep name or local files with a relative path, for example:
//
//     import {Socket} from "phoenix"
//     import socket from "./socket"
//
import "phoenix_html";

import React from 'react';
import ReactDOM from 'react-dom';

import Digits4 from './digits';
import "milligram";

ReactDOM.render(
  <React.StrictMode>
    <Digits4 />
  </React.StrictMode>,
  document.getElementById('root')
);
