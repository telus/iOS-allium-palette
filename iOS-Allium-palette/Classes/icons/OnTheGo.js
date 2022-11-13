"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  viewBox: "0 0 14 24",
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
    d: "M13.993 4.625v13.793a.503.503 0 0 1 0 .164V20.5c0 1.93-1.569 3.5-3.498 3.5H3.498A3.503 3.503 0 0 1 0 20.5v-17C0 1.57 1.57 0 3.498 0h6.997c1.93 0 3.498 1.57 3.498 3.5v.96a.503.503 0 0 1 0 .165zm-1 .418H1V18h11.994V5.043zm0-1V3.5c0-1.378-1.12-2.5-2.498-2.5H3.498A2.503 2.503 0 0 0 1 3.5v.543h11.994zm0 14.957H1v1.5C1 21.878 2.12 23 3.498 23h6.997a2.503 2.503 0 0 0 2.499-2.5V19zM8.432 2.005a.5.5 0 0 1 0 1H5.433a.5.5 0 0 1 0-1H8.43zM5.991 21a1 1 0 1 1 2 0 1 1 0 0 1-2 0zm-1.008-6.5v-6a.5.5 0 0 1 .854-.354l3.998 3a.5.5 0 0 1 0 .707l-3.998 3a.498.498 0 0 1-.854-.353zm1-4.793v3.586L8.775 11.5 5.983 9.707zm4.644-7.202c0-.276.223-.505.5-.505.275 0 .5.219.5.495v.01a.5.5 0 0 1-1 0z"
  })]
});