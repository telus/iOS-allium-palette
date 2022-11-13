"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  viewBox: "0 0 24 18",
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
    d: "M17 7.5v-3C17 2.019 14.981 0 12.5 0h-8A4.505 4.505 0 0 0 0 4.5v3C0 9.981 2.019 12 4.5 12H5v2.5a.5.5 0 0 0 .853.354L8.707 12H12.5c2.481 0 4.5-2.019 4.5-4.5zM8.5 11a.5.5 0 0 0-.354.147L6 13.293V11.5a.5.5 0 0 0-.5-.5h-1C2.57 11 1 9.43 1 7.5v-3C1 2.57 2.57 1 4.5 1h8C14.43 1 16 2.57 16 4.5v3c0 1.93-1.57 3.5-3.5 3.5h-4zm11-8h-.951a.5.5 0 0 0 0 1h.951C21.43 4 23 5.57 23 7.5v3c0 1.93-1.57 3.5-3.5 3.5h-1a.5.5 0 0 0-.5.5v1.793l-2.146-2.147A.504.504 0 0 0 15.5 14h-4a3.45 3.45 0 0 1-2.006-.645.5.5 0 1 0-.578.815c.765.543 1.658.83 2.584.83h3.793l2.853 2.854a.504.504 0 0 0 .545.108A.5.5 0 0 0 19 17.5V15h.5c2.481 0 4.5-2.019 4.5-4.5v-3C24 5.019 21.981 3 19.5 3zm-8.75 1h-4.5C5.008 4 4 4.224 4 4.5s1.008.5 2.25.5h4.5C11.992 5 13 4.776 13 4.5S11.992 4 10.75 4zm0 2h-4.5C5.008 6 4 6.224 4 6.5s1.008.5 2.25.5h4.5C11.992 7 13 6.776 13 6.5S11.992 6 10.75 6zM7 8H5c-.552 0-1 .224-1 .5s.448.5 1 .5h2c.552 0 1-.224 1-.5S7.552 8 7 8z"
  })]
});