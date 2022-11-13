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
    d: "M12 24C5.383 24 0 18.617 0 12S5.383 0 12 0s12 5.383 12 12-5.383 12-12 12zm0-22.957C5.958 1.043 1.043 5.958 1.043 12c0 6.042 4.915 10.957 10.957 10.957 6.042 0 10.957-4.915 10.957-10.957 0-6.042-4.915-10.957-10.957-10.957zm.522 11.479v5.217h4.337c.51-1.54.824-3.325.873-5.217h-5.21zm-1.044 0h-5.21c.049 1.892.364 3.677.873 5.217h4.337v-5.217zm1.044 10.387c1.575-.286 2.99-1.85 3.947-4.126h-3.947v4.126zm-1.044 0v-4.126H7.531c.957 2.276 2.372 3.84 3.947 4.126zm1.044-11.43h5.21c-.049-1.893-.364-3.678-.873-5.218h-4.337v5.217zm-1.044 0V6.26H7.141c-.51 1.54-.824 3.325-.873 5.217h5.21zM12.522 1.09v4.126h3.947c-.957-2.276-2.372-3.84-3.947-4.126zm-1.044 0c-1.575.286-2.99 1.85-3.947 4.126h3.947V1.091zm6.505 16.648h3.638a.522.522 0 0 1 0 1.044h-3.993C16.42 21.953 14.37 24 12 24s-4.42-2.047-5.628-5.217H2.378a.522.522 0 0 1 0-1.044h3.639c-.469-1.554-.75-3.322-.794-5.217H.522a.522.522 0 0 1 0-1.044h4.701c.044-1.895.325-3.663.794-5.217H2.378a.522.522 0 0 1 0-1.044h3.994C7.58 2.047 9.63 0 12 0s4.42 2.047 5.628 5.217h3.993a.522.522 0 0 1 0 1.044h-3.638c.469 1.554.75 3.322.794 5.217h4.701a.522.522 0 0 1 0 1.044h-4.701c-.044 1.895-.325 3.663-.794 5.217z"
  })]
});