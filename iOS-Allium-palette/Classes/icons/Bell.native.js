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
  viewBox: "0 0 20 24",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    d: "M7.55 21H.5a.502.502 0 0 1-.429-.757l1.718-2.862A8.507 8.507 0 0 0 3 13.007V10.5c0-3.164 2.112-5.846 5-6.709V2c0-1.103.897-2 2-2s2 .897 2 2v1.791c2.888.863 5 3.545 5 6.709v2.507c0 1.541.419 3.053 1.211 4.374l1.718 2.862A.5.5 0 0 1 19.5 21h-7.048A2.5 2.5 0 0 1 10 24a2.502 2.502 0 0 1-2.45-3zm1.037 0a1.502 1.502 0 0 0 1.414 2 1.502 1.502 0 0 0 1.414-2H8.587zM9 3.571a7.026 7.026 0 0 1 2 0V2a1 1 0 0 0-2 0v1.571zM1.383 20h17.234l-1.264-2.105A9.507 9.507 0 0 1 16 13.007V10.5c0-3.309-2.691-6-6-6s-6 2.691-6 6v2.507a9.498 9.498 0 0 1-1.354 4.888L1.383 20z"
  })]
});