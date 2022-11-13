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
    d: "M8.275 20.691c-.451-.527-.207-1.057.093-1.36l6.743-7.336-6.743-7.32c-.246-.267-.638-.94-.093-1.427.545-.488 1.1-.15 1.345.117l8.695 8.087a.735.735 0 0 1 0 .975L9.62 20.691c-.217.278-.894.527-1.345 0z"
  })]
});