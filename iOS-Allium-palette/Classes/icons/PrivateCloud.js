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
    d: "M15.5 15H15v-.5c0-1.93-1.57-3.5-3.5-3.5S8 12.57 8 14.5v.5h-.5a.5.5 0 0 0-.5.5v6a.5.5 0 0 0 .5.5h8a.5.5 0 0 0 .5-.5v-6a.5.5 0 0 0-.5-.5zM9 14.5c0-1.378 1.121-2.5 2.5-2.5s2.5 1.122 2.5 2.5v.5H9v-.5zm6 6.5H8v-5h7v5zm3.5-4a.5.5 0 0 1 0-1c2.481 0 4.5-2.019 4.5-4.5S20.981 7 18.5 7c-.277-.027-.538-.171-.573-.422C17.474 3.398 14.711 1 11.5 1A6.508 6.508 0 0 0 5 7.5c0 .28.024.578.076.938a.5.5 0 0 1-.12.402c-.098.109-.256.156-.384.169a.932.932 0 0 1-.105-.01C2.57 9 1 10.57 1 12.5S2.57 16 4.5 16a.5.5 0 0 1 0 1A4.505 4.505 0 0 1 0 12.5a4.507 4.507 0 0 1 4.022-4.475A6.391 6.391 0 0 1 4 7.5C4 3.364 7.364 0 11.5 0c3.565 0 6.651 2.561 7.346 6.023C21.758 6.232 24 8.609 24 11.5c0 3.033-2.467 5.5-5.5 5.5z"
  })]
});