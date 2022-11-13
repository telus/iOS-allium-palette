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
  viewBox: "0 0 24 24",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M5.79 4.307a1.049 1.049 0 0 0-1.483 1.482L10.517 12l-6.21 6.211a1.049 1.049 0 0 0 0 1.483 1.052 1.052 0 0 0 1.482 0L12 13.483l6.211 6.21.001.002a1.052 1.052 0 0 0 1.482-.001 1.049 1.049 0 0 0 0-1.483l-6.211-6.21 6.21-6.212a1.049 1.049 0 0 0-1.482-1.482l-6.21 6.21-6.212-6.21z"
  })]
});