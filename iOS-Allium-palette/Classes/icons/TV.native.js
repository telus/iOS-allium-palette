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
  viewBox: "0 0 24 20",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    d: "M22.5 0h-21C.673 0 0 .673 0 1.5v14c0 .827.673 1.5 1.5 1.5H10v1.077l-5.582.93a.5.5 0 0 0 .164.986L10.54 19h2.919l5.958.993a.497.497 0 0 0 .575-.411.5.5 0 0 0-.411-.575L14 18.077V17h8.5c.827 0 1.5-.673 1.5-1.5v-14c0-.827-.673-1.5-1.5-1.5zM13 18h-2v-1h2v1zm10-2.5a.5.5 0 0 1-.5.5h-21a.5.5 0 0 1-.5-.5v-14a.5.5 0 0 1 .5-.5h21a.5.5 0 0 1 .5.5v14z"
  })]
});