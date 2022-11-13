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
  viewBox: "0 0 16 24",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    d: "M11.5 23h-8c-.879 0-2-1.122-2-3v-1h13v1c0 1.878-1.121 3-3 3zm-8-22h8c1.879 0 3 1.122 3 2v1h-13V3c0-.878 1.121-2 2-2zm-2 17h13V5h-13v13zm11-18h-8c-2.43 0-4 1.57-4 4v17c0 1.43 1.57 3 4 3h8c1.43 0 3-1.57 3-3V4c0-2.43-1.57-4-3-4zm-5 11V9h1v2h-1zM7 3a.5.5 0 0 1 0-1h2a.5.5 0 0 1 0 1H7zm.5 11h1v-2h-1v2zm-1-3v4s.472.024 1 0l2-1V8s-.472-.024-1 0l-2 1v2zm5 3c0 .098-3.675 2-3.675 2S4.5 14.099 4.5 14V8L8 7l3.5 1v6zm-3-8 4 1v7c0 1.048-3.477 2.542-4.179 3-.369-.013-.435.001-1 0 .435.001.368-.013 0 0-.703-.458-3.821-1.952-3.821-3V7l4-1c.459-.005.541-.005 1 0zM8 20a1 1 0 1 1 .002 1.998A1 1 0 0 1 8 20z"
  })]
});