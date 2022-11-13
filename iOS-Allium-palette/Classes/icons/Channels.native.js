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
  viewBox: "0 0 24 22",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    d: "M17.5 16H.5a.5.5 0 0 1-.5-.5V.5A.5.5 0 0 1 .5 0h17a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5zM1 15h16V1H1v14zm19.5 4h-17a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0V18h16V4h-1.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5v15a.5.5 0 0 1-.5.5zm3 3h-17a.5.5 0 0 1-.5-.5v-2a.5.5 0 0 1 1 0V21h16V8h-1.5a.5.5 0 0 1 0-1h2a.5.5 0 0 1 .5.5v14a.5.5 0 0 1-.5.5z"
  })]
});