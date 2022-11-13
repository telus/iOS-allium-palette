"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  viewBox: "0 0 18 24",
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
    d: "M9 24a.5.5 0 0 1-.327-.122C8.339 23.59.5 16.718.5 8.5.5 3.813 4.313 0 9 0c4.687 0 8.5 3.813 8.5 8.5 0 8.218-7.839 15.09-8.173 15.378A.5.5 0 0 1 9 24zM9 1C4.864 1 1.5 4.364 1.5 8.5c0 6.842 6.016 12.926 7.5 14.322 1.483-1.397 7.5-7.488 7.5-14.322C16.5 4.364 13.136 1 9 1zm3 12h-2a.5.5 0 0 1-.5-.5V10h-1v2.5a.5.5 0 0 1-.5.5H6a.5.5 0 0 1-.5-.5V9H5a.5.5 0 0 1-.354-.854l4-4a.5.5 0 0 1 .707 0l4 4A.499.499 0 0 1 13 9h-.5v3.5a.5.5 0 0 1-.5.5zm-1.5-1h1V8.5a.5.5 0 0 1 .325-.468L9 5.207 6.175 8.032A.5.5 0 0 1 6.5 8.5V12h1V9.5A.5.5 0 0 1 8 9h2a.5.5 0 0 1 .5.5V12z"
  })]
});