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
  viewBox: "0 0 20 24",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    d: "m19.353 14.853-9 9a.499.499 0 0 1-.163.108c-.035.015-.07.016-.108.022-.028.005-.053.017-.083.017-.038 0-.07-.014-.107-.022-.027-.006-.055-.005-.08-.016a.514.514 0 0 1-.168-.111L.646 14.853a.5.5 0 0 1 .707-.707L9.5 22.293V.5a.5.5 0 0 1 1 0v21.793l8.147-8.147a.502.502 0 0 1 .707 0 .5.5 0 0 1 0 .707z"
  })]
});