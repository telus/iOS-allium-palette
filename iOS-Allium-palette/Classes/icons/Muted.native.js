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
    d: "M16.85 9.17a4.29 4.29 0 0 1 1.265 3.054c0 1.153-.45 2.238-1.265 3.052a.48.48 0 1 1-.68-.678 3.332 3.332 0 0 0 .985-2.374c0-.898-.35-1.741-.984-2.375a.48.48 0 0 1 .679-.678zm2.043-2.042A7.15 7.15 0 0 1 21 12.216c0 1.923-.75 3.729-2.107 5.089a.482.482 0 0 1-.68 0 .481.481 0 0 1 0-.68 6.195 6.195 0 0 0 1.827-4.41 6.193 6.193 0 0 0-1.826-4.408.481.481 0 0 1 .679-.68zm.145 12.188a.51.51 0 1 1-.722.723l-4.266-4.267v3.008c0 .263-.129.474-.346.562a.521.521 0 0 1-.207.042.622.622 0 0 1-.436-.194l-4.458-4.459a.298.298 0 0 0-.079-.029l-3.349.001a.721.721 0 0 1-.72-.72V9.665a.72.72 0 0 1 .72-.719h2.05L3.148 4.872a.512.512 0 0 1 .723-.723l4.75 4.75 4.44-4.44c.185-.186.425-.244.642-.154.217.09.346.3.346.563v9.46l4.988 4.988z"
  })]
});