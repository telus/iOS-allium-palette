"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  viewBox: "0 0 13 24",
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
    d: "M6.5 24a.502.502 0 0 1-.354-.146l-2-2A.504.504 0 0 1 4 21.5v-1.793l-.854-.854a.5.5 0 0 1 0-.707L4 17.293v-.586l-.854-.854a.5.5 0 0 1 0-.707L4 14.293V13h-.5a.5.5 0 0 1-.5-.5v-.528A6.525 6.525 0 0 1 0 6.5C0 2.916 2.916 0 6.5 0S13 2.916 13 6.5a6.525 6.525 0 0 1-3 5.472v.528a.5.5 0 0 1-.5.5H9v8.5c0 .133-.053.26-.146.354l-2 2A.502.502 0 0 1 6.5 24zM5 21.293l1.5 1.5 1.5-1.5V12.5a.5.5 0 0 1 .5-.5H9v-.309c0-.178.095-.343.249-.433A5.519 5.519 0 0 0 12 6.5C12 3.467 9.532 1 6.5 1A5.506 5.506 0 0 0 1 6.5a5.519 5.519 0 0 0 2.751 4.758c.154.09.249.255.249.433V12h.5a.5.5 0 0 1 .5.5v2c0 .133-.053.26-.146.354l-.647.646.646.646A.5.5 0 0 1 5 16.5v1c0 .133-.053.26-.146.354l-.647.646.646.646A.5.5 0 0 1 5 19.5v1.793zM6.5 7A2.503 2.503 0 0 1 4 4.5C4 3.122 5.121 2 6.5 2S9 3.122 9 4.5 7.879 7 6.5 7zm0-4C5.673 3 5 3.673 5 4.5S5.673 6 6.5 6 8 5.327 8 4.5 7.327 3 6.5 3zm0 18a.5.5 0 0 1-.5-.5v-7a.5.5 0 0 1 1 0v7a.5.5 0 0 1-.5.5z"
  })]
});