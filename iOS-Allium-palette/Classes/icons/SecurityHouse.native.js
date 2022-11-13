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
    d: "M23.5 17H23v-.5c0-1.93-1.57-3.5-3.5-3.5S16 14.57 16 16.5v.5h-.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5zm-6.5-.5c0-1.378 1.121-2.5 2.5-2.5s2.5 1.122 2.5 2.5v.5h-5v-.5zm6 6.5h-7v-5h7v5zm-9.5-4a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-1 0V13H9v6h4.5zm0 4a.5.5 0 0 1 0 1h-10a.5.5 0 0 1-.5-.5V12H.5a.5.5 0 0 1-.354-.854L10.794.5c.638-.641 1.774-.639 2.412 0L16 3.293V.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5v7.793l2.854 2.854A.499.499 0 0 1 23.5 12h-3a.5.5 0 0 1 0-1h1.793l-2.146-2.146A.5.5 0 0 1 20 8.5V1h-3v3.5a.5.5 0 0 1-.854.354l-3.647-3.647a.728.728 0 0 0-.998 0L1.707 11H3.5a.5.5 0 0 1 .5.5V23h9.5zm6-4a1 1 0 0 0-1 1c0 .366.206.673.5.847v.653a.5.5 0 0 0 1 0v-.653a.985.985 0 0 0 .5-.847 1 1 0 0 0-1-1z"
  })]
});