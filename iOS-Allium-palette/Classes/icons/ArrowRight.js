"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  viewBox: "0 0 24 24",
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
    clipRule: "evenodd",
    d: "M11.994 5.484c-.267-.27-.484-.74-.083-1.21.401-.468 1.002-.246 1.196 0l7.729 7.346a.654.654 0 0 1 0 .867l-7.73 7.189c-.218.237-.71.537-1.195.104-.484-.434-.136-1.031.083-1.27L17.07 13H4a1 1 0 1 1 0-2h13.064l-5.07-5.516z"
  })]
});