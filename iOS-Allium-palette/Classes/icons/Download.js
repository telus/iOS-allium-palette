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
    d: "M23.505 15.87c.273 0 .495.22.495.493v5.555A2.084 2.084 0 0 1 21.918 24H2.082A2.084 2.084 0 0 1 0 21.918v-5.555a.494.494 0 1 1 .99 0v5.555c0 .602.49 1.093 1.092 1.093h19.836c.603 0 1.093-.49 1.093-1.093v-5.555c0-.273.221-.494.494-.494zm-11.84.858-5.159-4.761a.495.495 0 0 1 .672-.727l4.327 3.994V.494a.495.495 0 1 1 .99 0v14.74l4.327-3.994a.495.495 0 0 1 .67.727l-5.156 4.76c-.023.022-.05.032-.076.048-.025.015-.048.036-.075.047a.496.496 0 0 1-.37 0c-.027-.011-.05-.032-.075-.047-.026-.016-.053-.026-.076-.047z"
  })]
});