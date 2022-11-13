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
  viewBox: "0 0 24 17",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    d: "M15.809 12.364a.492.492 0 0 1-.317-.114c-1.961-1.611-5.021-1.611-6.982 0a.498.498 0 0 1-.703-.068.498.498 0 0 1 .068-.703A6.5 6.5 0 0 1 12 10c1.502 0 2.968.525 4.126 1.479a.498.498 0 0 1-.317.885zm3.623-3.458a.499.499 0 0 1-.338-.132A10.47 10.47 0 0 0 12 6a10.47 10.47 0 0 0-7.094 2.774.5.5 0 0 1-.676-.736A11.465 11.465 0 0 1 12 5c2.877 0 5.637 1.079 7.77 3.038a.499.499 0 0 1-.338.868zM23 5.417a.5.5 0 0 1-.345-.138 15.428 15.428 0 0 0-21.311-.015.498.498 0 1 1-.687-.725A16.415 16.415 0 0 1 12 0c4.229 0 8.258 1.617 11.345 4.555a.5.5 0 0 1-.345.862zM12 17c-.827 0-1.5-.673-1.5-1.5S11.173 14 12 14s1.5.673 1.5 1.5S12.827 17 12 17zm0-2c-.275 0-.5.225-.5.5s.225.5.5.5.5-.225.5-.5-.225-.5-.5-.5z"
  })]
});