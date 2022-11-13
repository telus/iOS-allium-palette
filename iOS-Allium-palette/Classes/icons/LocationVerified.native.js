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
  viewBox: "0 0 18 24",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    d: "M9 24a.501.501 0 0 1-.327-.122C8.339 23.59.5 16.718.5 8.5.5 3.813 4.313 0 9 0c4.687 0 8.5 3.813 8.5 8.5 0 8.218-7.839 15.09-8.173 15.378A.501.501 0 0 1 9 24zM9 1C4.864 1 1.5 4.364 1.5 8.5c0 6.842 6.016 12.926 7.5 14.322 1.483-1.397 7.5-7.488 7.5-14.322C16.5 4.364 13.136 1 9 1zm0 13a5.506 5.506 0 0 1-5.5-5.5C3.5 5.467 5.968 3 9 3s5.5 2.467 5.5 5.5S12.032 14 9 14zM9 4a4.505 4.505 0 0 0-4.5 4.5C4.5 10.981 6.519 13 9 13s4.5-2.019 4.5-4.5S11.481 4 9 4zm-1 7a.502.502 0 0 1-.354-.146l-2-2a.5.5 0 0 1 .707-.707L8 9.793l3.646-3.646a.5.5 0 0 1 .707.707l-4 4A.498.498 0 0 1 8 11z"
  })]
});