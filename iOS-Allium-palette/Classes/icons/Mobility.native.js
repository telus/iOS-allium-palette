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
  viewBox: "0 0 14 24",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    d: "M13 18V5H1v13h12zm0 1H1v1.5C1 21.878 2.122 23 3.5 23h7c1.378 0 2.5-1.122 2.5-2.5V19zm0-15v-.5C13 2.122 11.878 1 10.5 1h-7A2.503 2.503 0 0 0 1 3.5V4h12zm-2.5 20h-7C1.57 24 0 22.43 0 20.5v-17C0 1.57 1.57 0 3.5 0h7C12.43 0 14 1.57 14 3.5v17c0 1.93-1.57 3.5-3.5 3.5zm-2.793-3.707a1 1 0 1 1-1.414 1.414 1 1 0 0 1 1.414-1.414zM8.5 3h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1zm2.002 0A.503.503 0 0 1 10 2.5c0-.276.218-.5.493-.5h.01a.499.499 0 0 1 0 1z"
  })]
});