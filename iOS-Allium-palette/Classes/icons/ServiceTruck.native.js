"use strict";

var _reactNativeSvg = require("react-native-svg");

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNativeSvg.default, { ...props,
  viewBox: "0 0 24 18",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    d: "M2.064 14.935A2.504 2.504 0 0 1 4.5 13c1.208 0 2.218.86 2.45 2h10.1c.232-1.14 1.242-2 2.45-2 1.185 0 2.18.828 2.436 1.935A1.503 1.503 0 0 0 23 13.5v-2.719a.499.499 0 0 0-.377-.485 5.116 5.116 0 0 1-2.382-1.348L15.732 4.44a1.507 1.507 0 0 0-1.06-.44.5.5 0 0 1-.405-.207l-1.872-2.586A.505.505 0 0 0 11.989 1H1.5a.5.5 0 0 0-.5.5v12c0 .676.45 1.248 1.064 1.435zm-.022 1.023A2.504 2.504 0 0 1 0 13.5v-12C0 .673.673 0 1.5 0h10.489c.479 0 .934.232 1.215.62l1.733 2.394c.567.06 1.093.31 1.502.719l4.509 4.508a4.115 4.115 0 0 0 1.917 1.085A1.497 1.497 0 0 1 24 10.781V13.5a2.504 2.504 0 0 1-2.042 2.458A2.504 2.504 0 0 1 19.5 18a2.504 2.504 0 0 1-2.45-2H6.95a2.504 2.504 0 0 1-2.45 2 2.504 2.504 0 0 1-2.458-2.042zM4.5 14c-.827 0-1.5.673-1.5 1.5S3.673 17 4.5 17 6 16.327 6 15.5 5.327 14 4.5 14zm15 0c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5zm-4-2h-1a.5.5 0 0 1 0-1h1a.5.5 0 0 1 0 1zm3-2h-6a.5.5 0 0 1-.5-.5v-4a.5.5 0 0 1 1 0V9h5.5a.5.5 0 0 1 0 1zm-9-3h-6a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1zm2-3h-8a.5.5 0 0 1 0-1h8a.5.5 0 0 1 0 1zm-2 6h-6a.5.5 0 0 1 0-1h6a.5.5 0 0 1 0 1z"
  })]
});