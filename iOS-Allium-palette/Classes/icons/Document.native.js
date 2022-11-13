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
    d: "M17.5 24H.5a.5.5 0 0 1-.5-.5v-17c0-.133.053-.26.146-.354l6-6A.504.504 0 0 1 6.5 0h11a.5.5 0 0 1 .5.5v23a.5.5 0 0 1-.5.5zM1 7v16h16V1H7v5.5a.5.5 0 0 1-.5.5H1zm.707-1H6V1.707L1.707 6zM14.5 6h-5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1zm0 3h-11a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm0 3h-11a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm0 3h-11a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm0 3h-11a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1zm0 3h-11a.5.5 0 0 1 0-1h11a.5.5 0 0 1 0 1z"
  })]
});