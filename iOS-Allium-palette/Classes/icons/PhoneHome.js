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
    d: "M7 15.343V4.262A2.27 2.27 0 0 1 9.273 2H14v-.5c0-.827.673-1.5 1.5-1.5S17 .673 17 1.5v.814c.041.173 0 .441 0 .854v12.176c.255-.19.556-.307.874-.335.498-.045 1.955.123 2.307.475l1.087 2.084c.472.471.732 1.097.732 1.765v2.17A2.5 2.5 0 0 1 19.5 24h-15A2.5 2.5 0 0 1 2 21.503v-2.17c0-.726.308-1.342 1.029-2.063l.793-1.79c.352-.35 1.819-.518 2.303-.473.318.029.62.147.875.336zm0 1.504a4.001 4.001 0 0 1-.401-.498.785.785 0 0 0-.565-.348c-.189-.002-1.354.035-1.504.186l-.794 1.79C3.089 18.622 3 19.01 3 19.332v2.17A1.5 1.5 0 0 0 4.5 23h15a1.5 1.5 0 0 0 1.5-1.498v-2.17c0-.395-.16-.78-.439-1.06l-1.087-2.084c-.177-.177-1.378-.2-1.508-.187a.776.776 0 0 0-.564.346 4.006 4.006 0 0 1-.402.499v1.891A2.27 2.27 0 0 1 14.727 21H9.273A2.27 2.27 0 0 1 7 18.738v-1.891zM14.583 3h-5.25A1.34 1.34 0 0 0 8 4.342v14.316C8 19.398 8.598 20 9.333 20h5.334A1.34 1.34 0 0 0 16 18.658V4.342c0-.889 0-1.227-.16-1.342h-1.257zM14 15h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1zm0-2h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1zm0 4h-4a.5.5 0 0 1 0-1h4a.5.5 0 0 1 0 1zm1-15h1v-.5a.5.5 0 0 0-1 0V2zm-.5 8h-5a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 .5.5v4a.5.5 0 0 1-.5.5zM10 9h4V6h-4v3z"
  })]
});