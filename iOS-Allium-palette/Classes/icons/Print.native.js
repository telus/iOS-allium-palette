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
    d: "M6.042 1h11.917c.225 0 .412.163.45.377l.008.082v6.875h1.375a3.211 3.211 0 0 1 3.203 3.026l.005.182v5.5c0 .713-.546 1.302-1.243 1.369l-.132.006h-3.208v4.125a.458.458 0 0 1-.376.45L17.96 23H6.042a.458.458 0 0 1-.45-.376l-.008-.082v-4.125H2.375a1.377 1.377 0 0 1-1.369-1.243L1 17.042v-5.5a3.212 3.212 0 0 1 3.027-3.203l.182-.005h1.375V1.459a.46.46 0 0 1 .376-.452L6.042 1zM17.5 14.751h-11v7.333h11v-7.333zm-9.625 4.583h8.25a.46.46 0 0 1 .082.91l-.082.007h-8.25a.459.459 0 0 1-.082-.91l.082-.007zM19.792 9.25H4.209a2.295 2.295 0 0 0-2.287 2.135l-.005.157v5.5c0 .225.162.412.376.45l.082.008h3.209v-3.208c0-.225.162-.412.376-.45l.082-.008h11.917c.225 0 .412.162.45.376l.008.082V17.5h3.208a.46.46 0 0 0 .452-.376l.007-.082v-5.5a2.296 2.296 0 0 0-2.292-2.292zM7.875 16.584h8.25a.46.46 0 0 1 .082.91l-.082.007h-8.25a.459.459 0 0 1-.082-.91l.082-.007h8.25-8.25zM17.5 1.917h-11v6.417h11V1.917z",
    fillRule: "evenodd"
  })]
});