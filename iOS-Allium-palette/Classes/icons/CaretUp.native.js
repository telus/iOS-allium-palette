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
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.691 16.725c-.527.451-1.057.207-1.36-.093L11.994 9.89l-7.32 6.743c-.267.246-.94.638-1.427.093-.488-.545-.15-1.1.117-1.345l8.087-8.695a.735.735 0 0 1 .975 0l8.264 8.695c.278.217.527.894 0 1.345z"
  })]
});