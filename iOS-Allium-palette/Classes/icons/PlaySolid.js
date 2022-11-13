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
    clipRule: "evenodd",
    d: "M4.758 22a.743.743 0 0 1-.375-.1.773.773 0 0 1-.383-.67V2.77c0-.277.147-.533.383-.67a.747.747 0 0 1 .764.01l18.485 9.23a.773.773 0 0 1 0 1.32L5.147 21.89a.753.753 0 0 1-.39.11z"
  })]
});