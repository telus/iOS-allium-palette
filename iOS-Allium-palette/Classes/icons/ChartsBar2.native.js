"use strict";

var _reactNativeSvg = require("react-native-svg");

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNativeSvg.default, { ...props,
  viewBox: "0 0 24 24",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    d: "M4.5 24h-3a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5zM2 23h2v-5H2v5zm8.5 1h-3a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5zM8 23h2V13H8v10zm8.5 1h-3a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5zM14 23h2v-8h-2v8zm8.5 1h-3a.5.5 0 0 1-.5-.5v-15a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5zM20 23h2V9h-2v14zM7.8 7.599 4.748 10.03A2.002 2.002 0 0 1 3 13a2.004 2.004 0 0 1-2-2.001 2.002 2.002 0 0 1 3.057-1.697l3.117-2.486A2.002 2.002 0 0 1 9 4a2.002 2.002 0 0 1 2 2.05l2.442.697a1.997 1.997 0 0 1 2.574-.47l3.261-3.261A2.002 2.002 0 0 1 21 0c1.103 0 2 .897 2 2a2.002 2.002 0 0 1-3.016 1.723l-3.261 3.261A2.002 2.002 0 0 1 15 10a2.002 2.002 0 0 1-1.973-2.332l-2.302-.656a2 2 0 0 1-2.926.587zm-4.11 2.679A1.001 1.001 0 1 0 3 12a1.001 1.001 0 0 0 .69-1.722zm4.548-3.63A1.001 1.001 0 1 0 9 5a1.001 1.001 0 0 0-.8 1.598.507.507 0 0 1 .038.048zm12.075-3.922A1.001 1.001 0 1 0 21 1a1.001 1.001 0 0 0-.726 1.687.506.506 0 0 1 .04.04zM23.5 24H.5a.5.5 0 0 1 0-1h23a.5.5 0 0 1 0 1zM15 7a1.001 1.001 0 0 0 0 2 1.001 1.001 0 0 0 0-2z"
  })]
});