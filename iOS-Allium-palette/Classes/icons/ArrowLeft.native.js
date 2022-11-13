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
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M12.006 18.516c.267.27.484.74.083 1.21-.401.468-1.002.246-1.196 0L3.165 12.38a.653.653 0 0 1 0-.867l7.728-7.189c.219-.237.712-.537 1.196-.104.484.434.136 1.031-.083 1.27L6.93 11H20a1 1 0 1 1 0 2H6.936l5.07 5.516z"
  })]
});