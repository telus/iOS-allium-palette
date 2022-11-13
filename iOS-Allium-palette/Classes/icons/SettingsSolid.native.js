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
    d: "M13.378 19h-2.755a.63.63 0 0 1-.635-.537l-.237-1.61a5.435 5.435 0 0 1-.937-.53l-1.559.61a.657.657 0 0 1-.795-.278L5.086 14.34a.62.62 0 0 1 .156-.804l1.322-1.008a5.281 5.281 0 0 1-.03-.528c0-.16.01-.331.032-.528l-1.322-1.006a.615.615 0 0 1-.156-.807l1.376-2.32a.645.645 0 0 1 .79-.273l1.563.612c.312-.218.62-.392.934-.53L9.99 5.53c.038-.3.311-.531.634-.531h2.756a.63.63 0 0 1 .635.537l.237 1.61c.324.143.637.32.936.53l1.559-.61a.656.656 0 0 1 .795.279l1.374 2.315a.62.62 0 0 1-.156.804l-1.323 1.007c.017.155.031.336.031.528s-.014.373-.031.528l1.322 1.007a.62.62 0 0 1 .16.799l-1.38 2.327a.647.647 0 0 1-.79.273l-1.563-.61c-.312.216-.62.39-.935.529l-.237 1.616c-.039.3-.312.531-.635.531zM12 14.8c1.544 0 2.8-1.256 2.8-2.8 0-1.544-1.256-2.8-2.8-2.8A2.803 2.803 0 0 0 9.2 12c0 1.544 1.256 2.8 2.8 2.8z"
  })]
});