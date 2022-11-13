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
    d: "M22.5 3c.827 0 1.5.673 1.5 1.5v14c0 .827-.673 1.5-1.5 1.5h-21C.673 20 0 19.327 0 18.5v-14C0 3.673.673 3 1.5 3H8V1.5C8 .673 8.673 0 9.5 0h5c.827 0 1.5.673 1.5 1.5V3h6.5zm0 16a.5.5 0 0 0 .5-.5v-8.353l-7.34 1.916a14.566 14.566 0 0 1-7.32 0L1 10.147V18.5a.5.5 0 0 0 .5.5h21zM1.5 4a.5.5 0 0 0-.5.5v4.614l7.592 1.98c2.229.582 4.586.582 6.815 0L23 9.113V4.5a.5.5 0 0 0-.5-.5h-21zM9 1.5V3h6V1.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0-.5.5zM12 7c1.104 0 2 .897 2 2s-.896 2-2 2c-1.103 0-2-.897-2-2s.897-2 2-2zm0 3c.551 0 1-.449 1-1 0-.551-.449-1-1-1-.551 0-1 .449-1 1 0 .551.449 1 1 1z"
  })]
});