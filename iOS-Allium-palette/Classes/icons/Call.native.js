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
  viewBox: "0 0 22 22",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    d: "M7.786 5.91 6.202 8.847a.473.473 0 0 0-.046.336 9.468 9.468 0 0 0 6.966 6.972.42.42 0 0 0 .344-.035l2.939-1.585a1.324 1.324 0 0 1 1.562.225l2.221 2.221c.249.256.386.588.386.936 0 .353-.136.685-.385.933l-1.326 1.326a1.333 1.333 0 0 1-1.016.384 17.94 17.94 0 0 1-16.41-16.4c-.032-.371.112-.75.386-1.018l1.325-1.326c.248-.248.58-.384.935-.384.347 0 .679.137.933.384l2.538 2.53c.417.418.51 1.046.232 1.564zm10.837 8.203a2.274 2.274 0 0 0-2.665-.392l-2.773 1.492a8.58 8.58 0 0 1-6.077-6.078L8.6 6.356a2.249 2.249 0 0 0-.392-2.665L5.671 1.153c-.848-.847-2.336-.847-3.184 0l-1.319 1.32a2.236 2.236 0 0 0-.662 1.763 18.871 18.871 0 0 0 17.26 17.257c.054.008.109.008.164.008.591 0 1.17-.244 1.59-.67l1.318-1.319c.427-.428.662-.994.662-1.595 0-.605-.232-1.167-.656-1.582l-2.221-2.222z"
  })]
});