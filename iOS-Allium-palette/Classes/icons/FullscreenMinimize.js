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
    d: "m17.767 5.068 1.469 1.481a.235.235 0 0 1 0 .331l-2.45 2.47a.236.236 0 0 0 0 .332l1.418 1.428a.235.235 0 0 1-.162.4l-5.025.067a.234.234 0 0 1-.235-.238l.065-5.067a.233.233 0 0 1 .398-.162l1.416 1.428a.23.23 0 0 0 .329 0l2.449-2.47a.231.231 0 0 1 .328 0zM6.537 19.51l-1.469-1.481a.235.235 0 0 1 0-.331l2.45-2.47a.236.236 0 0 0 0-.332L6.1 13.467a.235.235 0 0 1 .162-.4L11.287 13a.234.234 0 0 1 .236.238l-.066 5.066a.232.232 0 0 1-.397.163l-1.417-1.429a.231.231 0 0 0-.328 0l-2.449 2.471a.232.232 0 0 1-.329 0z"
  })]
});