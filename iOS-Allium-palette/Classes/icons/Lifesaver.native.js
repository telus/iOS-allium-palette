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
    d: "M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-23C5.935 1 1 5.935 1 12s4.935 11 11 11 11-4.935 11-11S18.065 1 12 1zm0 6c-2.757 0-5 2.243-5 5s2.243 5 5 5 5-2.243 5-5-2.243-5-5-5zm5.796 3.446a5.99 5.99 0 0 1 0 3.109l4.264 4.263a.5.5 0 0 1-.707.707l-3.94-3.938a6.038 6.038 0 0 1-2.828 2.828l3.939 3.939a.5.5 0 0 1-.707.707l-4.265-4.265a5.99 5.99 0 0 1-3.106 0l-4.264 4.265a.498.498 0 0 1-.707 0 .5.5 0 0 1 0-.707l3.94-3.94a6.038 6.038 0 0 1-2.829-2.828l-3.94 3.939a.498.498 0 0 1-.707 0 .5.5 0 0 1 0-.707l4.265-4.264a5.99 5.99 0 0 1 0-3.107L1.939 6.183a.5.5 0 0 1 .707-.707l3.94 3.939a6.038 6.038 0 0 1 2.828-2.829l-3.938-3.94a.5.5 0 0 1 .707-.707l4.264 4.265a5.99 5.99 0 0 1 3.107 0l4.263-4.264a.5.5 0 0 1 .707.707l-3.938 3.939a6.038 6.038 0 0 1 2.828 2.828l3.939-3.938a.5.5 0 0 1 .707.707l-4.264 4.263z"
  })]
});