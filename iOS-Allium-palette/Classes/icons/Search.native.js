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
    d: "M10.5 2c4.687 0 8.5 3.813 8.5 8.5 0 2.175-.82 4.161-2.17 5.666l6.036 6.029a.477.477 0 0 1 0 .67.468.468 0 0 1-.666 0l-6.037-6.031A8.466 8.466 0 0 1 10.5 19C5.813 19 2 15.187 2 10.5 2 5.813 5.813 2 10.5 2zm0 1C6.364 3 3 6.364 3 10.5S6.364 18 10.5 18c4.137 0 7.5-3.364 7.5-7.5S14.637 3 10.5 3z",
    fillRule: "evenodd"
  })]
});