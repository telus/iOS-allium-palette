"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  viewBox: "0 0 16 16",
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
    d: "M5.807 13.072a.592.592 0 0 1-.091.106l-.026.024-.1.112a.545.545 0 0 1-.433.185.581.581 0 0 1-.453-.204L1.159 9.2a.677.677 0 0 1 .014-.888.55.55 0 0 1 .812 0l3.155 3.382 8.872-9.512a.548.548 0 0 1 .816.002c.226.242.23.636.009.881l-9.03 10.008z"
  })]
});