"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  viewBox: "0 0 23 24",
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
    d: "M22.56 23.04H.48a.48.48 0 0 1-.48-.48V.48a.48.48 0 0 1 .96 0v21.6h21.6a.48.48 0 0 1 0 .96zm-19.2-2.88a.48.48 0 0 1-.407-.734l2.4-3.84a.476.476 0 0 1 .386-.225.448.448 0 0 1 .405.192l1.012 1.349 5.392-8.988a.481.481 0 0 1 .388-.234.515.515 0 0 1 .409.192l2.446 3.261L22.146.238a.48.48 0 0 1 .83.484l-6.72 11.52a.478.478 0 0 1-.799.046l-2.452-3.269-5.392 8.988a.485.485 0 0 1-.389.233.498.498 0 0 1-.408-.192l-1.02-1.36-2.029 3.246a.48.48 0 0 1-.407.226z"
  })]
});