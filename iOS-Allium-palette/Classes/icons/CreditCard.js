"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  viewBox: "0 0 24 16",
  height: size,
  width: size,
  fill: color,
  role: title ? 'img' : undefined,
  "aria-hidden": !title,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
    fillRule: "evenodd",
    d: "M23 3v-.5c0-.827-.673-1.5-1.5-1.5h-19C1.673 1 1 1.673 1 2.5V3h22zm0 4H1v6.5c0 .827.673 1.5 1.5 1.5h19c.827 0 1.5-.673 1.5-1.5V7zm-1.5 9h-19A2.503 2.503 0 0 1 0 13.5v-11C0 1.122 1.122 0 2.5 0h19C22.878 0 24 1.122 24 2.5v11c0 1.378-1.122 2.5-2.5 2.5zM1 6h22V4H1v2zm8.5 5h-6a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1zm0 2h-6a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1zm10 0h-1c-.827 0-1.5-.673-1.5-1.5v-1c0-.827.673-1.5 1.5-1.5h1c.827 0 1.5.673 1.5 1.5v1c0 .827-.673 1.5-1.5 1.5zm-1-3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1z"
  })]
});