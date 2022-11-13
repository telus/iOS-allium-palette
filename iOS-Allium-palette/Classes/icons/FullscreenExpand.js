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
    d: "m13.504 11.871-1.325-1.336a.212.212 0 0 1 0-.298l2.209-2.228a.213.213 0 0 0 0-.3l-1.279-1.288a.212.212 0 0 1 .147-.36L17.788 6a.21.21 0 0 1 .212.215l-.059 4.57a.21.21 0 0 1-.359.146l-1.277-1.288a.208.208 0 0 0-.297 0L13.8 11.871a.209.209 0 0 1-.296 0zm-3.007.258 1.325 1.336a.212.212 0 0 1 0 .298l-2.209 2.228a.213.213 0 0 0 0 .3l1.277 1.288a.211.211 0 0 1-.146.36L6.213 18A.211.211 0 0 1 6 17.785l.06-4.57a.21.21 0 0 1 .358-.146l1.278 1.289a.208.208 0 0 0 .296 0l2.208-2.229a.21.21 0 0 1 .297 0z"
  })]
});