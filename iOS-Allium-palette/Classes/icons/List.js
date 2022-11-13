"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  width: size,
  height: size,
  fill: color,
  xmlns: "http://www.w3.org/2000/svg",
  role: title ? 'img' : undefined,
  "aria-hidden": !title,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
    d: "M4 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 7a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15A.5.5 0 0 1 6 7ZM4 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 12a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15A.5.5 0 0 1 6 12ZM4 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0ZM6 17a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15A.5.5 0 0 1 6 17Z",
    fill: "#414547"
  })]
});