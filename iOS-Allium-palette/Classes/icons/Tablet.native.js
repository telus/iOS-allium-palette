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
    d: "M9 20.5a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM15.5 2h-13a.5.5 0 0 0-.5.5v17a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-17a.5.5 0 0 0-.5-.5zM15 19H3V3h12v16zm.5-19h-13A2.503 2.503 0 0 0 0 2.5v19C0 22.878 1.122 24 2.5 24h13c1.378 0 2.5-1.122 2.5-2.5v-19C18 1.122 16.878 0 15.5 0zM17 21.5c0 .827-.673 1.5-1.5 1.5h-13c-.827 0-1.5-.673-1.5-1.5v-19C1 1.673 1.673 1 2.5 1h13c.827 0 1.5.673 1.5 1.5v19z"
  })]
});