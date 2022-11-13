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
    d: "M11 22C4.935 22 0 17.065 0 11S4.935 0 11 0s11 4.935 11 11-4.935 11-11 11zM11 .957C5.462.957.957 5.462.957 11c0 5.538 4.505 10.043 10.043 10.043 5.538 0 10.043-4.505 10.043-10.043C21.043 5.462 16.538.957 11 .957zM9.565 15.783a.48.48 0 0 1-.338-.14L4.444 10.86a.479.479 0 0 1 .676-.676l4.445 4.444 7.314-7.313a.479.479 0 0 1 .676.676l-7.652 7.652a.477.477 0 0 1-.338.14z"
  })]
});