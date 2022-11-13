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
    d: "M1.438 22.958h6.875v-6.875H1.438v6.875zM8.563 7.917h6.875V1.042H8.563v6.875zm7.124 15.041h6.874v-6.875h-6.873v6.875zm7.397-7.917h-3.439v-.667c0-1.425-1.073-2.499-2.498-2.499h-4.625V8.958h3.438c.306 0 .52-.214.52-.52V.521A.497.497 0 0 0 15.96 0H8.041a.498.498 0 0 0-.52.521v7.917c0 .306.213.52.52.52h3.438v2.917H6.853c-1.425 0-2.5 1.074-2.5 2.499v.667H.917a.498.498 0 0 0-.52.521v7.917c0 .307.214.521.52.521h7.917a.498.498 0 0 0 .52-.521v-7.917a.498.498 0 0 0-.52-.521H5.396v-.667a1.46 1.46 0 0 1 1.458-1.457h10.293a1.46 1.46 0 0 1 1.457 1.457v.667h-3.436a.499.499 0 0 0-.522.521v7.917c0 .307.214.521.521.521h7.917c.306 0 .52-.214.52-.521v-7.917a.497.497 0 0 0-.52-.521z"
  })]
});