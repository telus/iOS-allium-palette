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
  viewBox: "0 0 18 24",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    d: "M10.5 15h-3v2.5a.5.5 0 0 1-1 0V15h-2v4.5a.5.5 0 0 0 .5.5h3.5v-2.5a.5.5 0 0 1 1 0V20H13a.5.5 0 0 0 .5-.5V15h-2v2.5a.5.5 0 0 1-1 0V15zm1-6v2.5a.5.5 0 0 1-1 0V9h-3v2.5a.5.5 0 0 1-1 0V9H5a.5.5 0 0 0-.5.5V14h4v-2.5a.5.5 0 0 1 1 0V14h4V9.5A.5.5 0 0 0 13 9h-1.5zM15 24H3a2.503 2.503 0 0 1-2.5-2.5v-16c0-.133.053-.26.146-.354l5-5A.504.504 0 0 1 6 0h9c1.378 0 2.5 1.122 2.5 2.5v19c0 1.378-1.122 2.5-2.5 2.5zM1.5 5.707V21.5c0 .827.673 1.5 1.5 1.5h12c.827 0 1.5-.673 1.5-1.5v-19c0-.827-.673-1.5-1.5-1.5H6.207L1.5 5.707zM13 21H5c-.827 0-1.5-.673-1.5-1.5v-10C3.5 8.673 4.173 8 5 8h8c.827 0 1.5.673 1.5 1.5v10c0 .827-.673 1.5-1.5 1.5z"
  })]
});