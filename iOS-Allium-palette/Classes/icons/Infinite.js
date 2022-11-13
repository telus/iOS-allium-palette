"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  viewBox: "0 0 24 12",
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
    d: "M18.5 10.655c-2.869 0-4.373-2.225-5.909-4.654 1.536-2.43 3.04-4.657 5.909-4.657 2.481 0 4.5 2.09 4.5 4.657s-2.019 4.654-4.5 4.654m-13 0c-2.481 0-4.5-2.087-4.5-4.654 0-2.567 2.019-4.657 4.5-4.657 2.869 0 4.373 2.226 5.909 4.657-1.536 2.429-3.04 4.654-5.909 4.654m13-10.31c-3.229 0-4.95 2.298-6.5 4.721C10.45 2.643 8.729.345 5.5.345 2.467.345 0 2.882 0 6c0 3.117 2.467 5.654 5.5 5.654 3.229 0 4.95-2.298 6.5-4.72 1.55 2.422 3.271 4.72 6.5 4.72 3.032 0 5.5-2.537 5.5-5.654C24 2.882 21.532.344 18.5.344"
  })]
});