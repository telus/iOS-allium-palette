"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  viewBox: "0 0 16 24",
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
    d: "M11 18a.5.5 0 0 1 0-1v-.134a1 1 0 0 1 0-1.732V15a.5.5 0 0 1 1 0 .5.5 0 0 1 0 1v.134a1 1 0 0 1 0 1.732V18a.5.5 0 0 1-1 0zm4 6a.495.495 0 0 1-.277-.084l-1.223-.815-1.223.815a.504.504 0 0 1-.555 0l-1.222-.815-1.223.815a.504.504 0 0 1-.555 0L7.5 23.101l-1.223.815a.504.504 0 0 1-.555 0L4.5 23.101l-1.223.815a.498.498 0 0 1-.513.024.498.498 0 0 1-.264-.44V10H1a.5.5 0 0 1-.5-.5v-7C.5 1.121 1.622 0 3 0h10.154C14.447 0 15.5 1.121 15.5 2.5v21a.498.498 0 0 1-.5.5zm-4.5-2c.097 0 .193.028.277.084l1.223.815 1.223-.815a.504.504 0 0 1 .555 0l.722.481V2.5c0-.827-.604-1.5-1.346-1.5H3.002c.32.426.498.947.498 1.5v20.065l.723-.481a.504.504 0 0 1 .555 0L6 22.899l1.223-.815a.504.504 0 0 1 .555 0l1.223.815 1.223-.815A.492.492 0 0 1 10.5 22zm-9-13h1V2.5c0-.434-.183-.836-.499-1.118A1.5 1.5 0 0 0 1.5 2.5V9zM13 6H5a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1zm0 3H5a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1zm0 3H5a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1zm0 8h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1z"
  })]
});