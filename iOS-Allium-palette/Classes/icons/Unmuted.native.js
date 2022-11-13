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
    d: "M13.709 4.292c-.217-.09-.457-.032-.643.153L8.614 8.897a.273.273 0 0 1-.076.036H5.18a.72.72 0 0 0-.72.719v4.318a.72.72 0 0 0 .72.719l3.349-.001a.266.266 0 0 1 .079.03l4.458 4.459a.618.618 0 0 0 .436.194c.069 0 .14-.014.207-.041.217-.09.346-.301.346-.563V4.854c0-.262-.129-.472-.346-.562zm3.146 4.87a4.292 4.292 0 0 1 1.264 3.054 4.29 4.29 0 0 1-1.264 3.052.48.48 0 1 1-.68-.678 3.333 3.333 0 0 0 .985-2.374c0-.898-.35-1.741-.985-2.375a.481.481 0 0 1 .68-.68z"
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    d: "M18.898 7.12a7.154 7.154 0 0 1 2.107 5.087 7.15 7.15 0 0 1-2.107 5.088.48.48 0 1 1-.68-.677 6.198 6.198 0 0 0 1.828-4.41 6.196 6.196 0 0 0-1.828-4.41.48.48 0 0 1 .68-.679z"
  })]
});