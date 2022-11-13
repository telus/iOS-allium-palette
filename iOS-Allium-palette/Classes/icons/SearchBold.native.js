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
    d: "m10.022 1 .253.003c4.994.13 8.935 4.278 8.806 9.267a8.985 8.985 0 0 1-1.728 5.087l-.189.249 5.604 5.897c.3.316.306.802.034 1.133l-.074.08-.03.028a.945.945 0 0 1-1.173.098l-.092-.072-6.081-5.418a9.01 9.01 0 0 1-5.543 1.719c-4.993-.13-8.935-4.278-8.806-9.267C1.13 4.898 5.144 1.008 10.023 1zm.02 1.81a7.214 7.214 0 1 0 0 14.43 7.214 7.214 0 0 0 0-14.43z"
  })]
});