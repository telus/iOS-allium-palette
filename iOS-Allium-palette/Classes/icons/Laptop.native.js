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
  viewBox: "0 0 24 18",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    d: "M23.5 13.5H22V2c0-.827-.673-1.5-1.5-1.5h-17C2.673.5 2 1.173 2 2v11.5H.5a.5.5 0 0 0-.5.5v1c0 1.378 1.122 2.5 2.5 2.5h19c1.378 0 2.5-1.122 2.5-2.5v-1a.5.5 0 0 0-.5-.5zM3 2a.5.5 0 0 1 .5-.5h17a.5.5 0 0 1 .5.5v11.5h-5a.495.495 0 0 0-.352.146l-.854.854H9.208l-.854-.854A.504.504 0 0 0 8 13.5H3V2zm20 13c0 .827-.673 1.5-1.5 1.5h-19c-.827 0-1.5-.673-1.5-1.5v-.5h6.793l.853.854A.504.504 0 0 0 9 15.5h6a.5.5 0 0 0 .353-.146l.854-.854H23v.5z"
  })]
});