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
    d: "M16.505 11.467a.51.51 0 0 1 .533.533.51.51 0 0 1-.533.533H12a.51.51 0 0 1-.533-.533V3.81A.51.51 0 0 1 12 3.277a.51.51 0 0 1 .533.533v7.657h3.972zM12 22.934c6.029 0 10.934-4.904 10.934-10.934 0-6.028-4.905-10.933-10.934-10.933C5.972 1.067 1.066 5.972 1.066 12c0 6.03 4.906 10.934 10.934 10.934zM12 0c6.616 0 12 5.384 12 12 0 6.617-5.384 12-12 12-6.617 0-12-5.383-12-12C0 5.384 5.383 0 12 0z"
  })]
});