"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  viewBox: "0 0 20 20",
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
    d: "m10.878 1.61 8.315 15.244a1 1 0 0 1-.878 1.48H1.685a1 1 0 0 1-.878-1.48L9.122 1.61a1 1 0 0 1 1.756 0zM10 16.794c.46 0 .833-.402.833-.898 0-.495-.373-.897-.833-.897-.46 0-.833.402-.833.897 0 .496.373.898.833.898zm-.022-2.885c.347 0 .63-.297.64-.67l.179-6.698c.01-.388-.28-.709-.64-.709h-.35c-.361 0-.65.32-.64.708l.171 6.699c.01.373.294.67.64.67z"
  })]
});