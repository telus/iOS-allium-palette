"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  viewBox: "0 0 24 22",
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
    d: "M17 0c-1.894 0-3.686.76-5 2.103A6.979 6.979 0 0 0 7 0C3.14 0 0 3.14 0 7c0 1.742.703 3.447 2.032 4.93 2.287 2.55 9.541 9.849 9.614 9.922A.495.495 0 0 0 12 22a.506.506 0 0 0 .355-.146c.073-.073 7.327-7.372 9.614-9.923C23.297 10.448 24 8.744 24 7c0-3.859-3.14-7-7-7zm4.224 11.262C19.245 13.47 13.489 19.289 12 20.79c-1.49-1.501-7.245-7.32-9.224-9.527C1.966 10.357 1 8.885 1 7c0-3.31 2.691-6 6-6 1.788 0 3.47.79 4.615 2.168.19.229.58.229.769 0A5.984 5.984 0 0 1 17 1c3.309 0 6 2.691 6 6 0 1.885-.966 3.357-1.776 4.262z"
  })]
});