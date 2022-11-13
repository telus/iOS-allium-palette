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
    d: "M19.507 6.026a1.086 1.086 0 0 0-.767-1.851 1.085 1.085 0 1 0 .767 1.851zm-2.243-2.243a2.088 2.088 0 1 1 2.952 2.953 2.088 2.088 0 0 1-2.952-2.953zm5.733 6.717V2.503a1.51 1.51 0 0 0-1.501-1.5h-8.007c-.39 0-.768.16-1.039.438-.042.042-.07.068-.097.102L1.433 12.457a1.442 1.442 0 0 0-.429 1.042c0 .402.156.774.438 1.05l8.002 8.005c.277.283.656.443 1.045.443h.008c.358-.008.779-.158 1.054-.439l11.003-11.003c.287-.28.443-.653.443-1.055zM21.498 0A2.515 2.515 0 0 1 24 2.5v8c0 .675-.264 1.303-.741 1.769L12.265 23.264A2.472 2.472 0 0 1 10.51 24h-.027c-.652 0-1.292-.27-1.753-.74L.737 15.264A2.447 2.447 0 0 1 0 13.499c0-.677.264-1.305.743-1.77l.148-.137L11.605.876c.015-.023.067-.077.134-.143A2.455 2.455 0 0 1 13.486 0h8.012z"
  })]
});