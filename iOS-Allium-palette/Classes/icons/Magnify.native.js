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
  width: size,
  height: size,
  fill: color,
  xmlns: "http://www.w3.org/2000/svg",
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNativeSvg.G, {
    opacity: 0.8,
    fill: "#414547",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
      fillRule: "evenodd",
      clipRule: "evenodd",
      d: "M10.5 2c4.687 0 8.5 3.813 8.5 8.5 0 2.175-.82 4.161-2.17 5.666l6.036 6.029a.477.477 0 0 1 0 .67.468.468 0 0 1-.666 0l-6.037-6.031A8.466 8.466 0 0 1 10.5 19C5.813 19 2 15.187 2 10.5 2 5.813 5.813 2 10.5 2Zm0 1C6.364 3 3 6.364 3 10.5S6.364 18 10.5 18c4.137 0 7.5-3.364 7.5-7.5S14.637 3 10.5 3Z"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
      d: "M13.14 10.016h-2.226V7.789a.441.441 0 0 0-.445-.445.441.441 0 0 0-.446.445v2.227H7.797a.441.441 0 0 0-.445.445c0 .25.196.445.445.445h2.226v2.227c0 .25.196.445.446.445s.445-.196.445-.445v-2.227h2.227a.44.44 0 0 0 .445-.445.441.441 0 0 0-.445-.445Z"
    })]
  })]
});