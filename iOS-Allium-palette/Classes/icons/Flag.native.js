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
    d: "M1 24a.5.5 0 0 1-.5-.5V.5a.5.5 0 0 1 1 0v23a.5.5 0 0 1-.5.5zm9.5-21v3.5a.5.5 0 0 1-1 0v-5A.5.5 0 0 0 9 1H1a.5.5 0 0 1 0-1h8c.827 0 1.5.673 1.5 1.5V2H17a.5.5 0 0 1 .5.5v11a.5.5 0 0 1-.5.5h-6c-.827 0-1.5-.673-1.5-1.5A.5.5 0 0 0 9 12H1a.5.5 0 0 1 0-1h8c.827 0 1.5.673 1.5 1.5a.5.5 0 0 0 .5.5h5.5V3h-6z"
  })]
});