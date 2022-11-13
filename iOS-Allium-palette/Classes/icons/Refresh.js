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
    d: "M23.48 11.48A.52.52 0 0 1 24 12c0 6.616-5.384 12-12 12-4.524 0-8.306-2.553-10.96-7.392v2.913a.52.52 0 0 1-1.04 0v-3.959a.52.52 0 0 1 .52-.518h3.959a.52.52 0 0 1 0 1.038H1.933C3.673 19.265 6.814 22.96 12 22.96c6.043 0 10.96-4.916 10.96-10.96a.52.52 0 0 1 .52-.52zm0-7.521a.52.52 0 0 1 .52.519v3.959a.52.52 0 0 1-.52.52h-3.959a.52.52 0 0 1 0-1.04h2.547C20.326 4.736 17.186 1.039 12 1.039 5.958 1.039 1.04 5.956 1.04 12A.52.52 0 0 1 0 12C0 5.383 5.383 0 12 0c4.526 0 8.306 2.554 10.96 7.392V4.478a.52.52 0 0 1 .52-.519z"
  })]
});