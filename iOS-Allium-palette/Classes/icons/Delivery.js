"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  viewBox: "0 0 24 20",
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
    d: "m23.971 11.332-2.026-5.673A2.506 2.506 0 0 0 19.591 4h-3.59V2.5A2.506 2.506 0 0 0 13.5 0h-11A2.503 2.503 0 0 0 0 2.5v14c0 .827.673 1.5 1.5 1.5h1.55a2.505 2.505 0 0 0 2.45 2 2.505 2.505 0 0 0 2.448-2h9.101a2.505 2.505 0 0 0 2.45 2 2.505 2.505 0 0 0 2.448-2h.552a1.5 1.5 0 0 0 1.5-1.5v-5a.482.482 0 0 0-.029-.168zM1.001 2.5A1.5 1.5 0 0 1 2.5 1h11c.827 0 1.5.673 1.5 1.5V13H1V2.5zM5.5 19c-.827 0-1.5-.673-1.5-1.5S4.673 16 5.5 16a1.501 1.501 0 0 1 0 3zm14 0a1.501 1.501 0 0 1 0-3 1.501 1.501 0 0 1 0 3zm3.5-2.5a.5.5 0 0 1-.5.5h-.55a2.505 2.505 0 0 0-2.45-2 2.505 2.505 0 0 0-2.449 2H7.95a2.505 2.505 0 0 0-2.449-2 2.505 2.505 0 0 0-2.449 2H1.5a.5.5 0 0 1-.5-.5V14h14.5a.5.5 0 0 0 .5-.5V5h3.59c.632 0 1.2.4 1.413.995L23 11.586V16.5zM18 10V6.5a.5.5 0 0 0-1 0v4a.5.5 0 0 0 .5.5H21a.5.5 0 0 0 0-1h-3z"
  })]
});