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
    d: "M7.99 5.75h8.02l-2.45-3.833h-3.12L7.99 5.75zm.078 1L12 21.346 15.932 6.75H8.068zm13.387-1-4.773-3.833H14.46l2.41 3.77c.013.02.023.041.032.063h4.553zm.313 1h-5.053L13.01 20.496 21.768 6.75zm-19.223-1h4.553a.376.376 0 0 1 .033-.063l2.409-3.77H7.318L2.545 5.75zm-.313 1 8.755 13.743L7.285 6.75H2.232zM13.67 1h3.157a.38.38 0 0 1 .235.082l5.793 4.631a.39.39 0 0 1 .083.515l-10.62 16.596a.378.378 0 0 1-.636 0L1.062 6.228a.39.39 0 0 1 .083-.515l5.793-4.631A.379.379 0 0 1 7.173 1h6.497z"
  })]
});