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
    d: "M9.556 1A8.556 8.556 0 0 0 1 9.556v4.888A8.556 8.556 0 0 0 9.556 23h4.888A8.556 8.556 0 0 0 23 14.444V9.556A8.556 8.556 0 0 0 14.444 1H9.556zM9.6 0h4.8A9.6 9.6 0 0 1 24 9.6v4.8a9.6 9.6 0 0 1-9.6 9.6H9.6A9.6 9.6 0 0 1 0 14.4V9.6A9.6 9.6 0 0 1 9.6 0zM12 14a1 1 0 1 0 0 2 1 1 0 0 0 0-2zM7.404 9.904a.5.5 0 0 0 .707.707 5.505 5.505 0 0 1 7.778 0 .502.502 0 0 0 .707 0 .5.5 0 0 0 0-.707 6.508 6.508 0 0 0-9.192 0zm1.414 1.414a.5.5 0 0 0 .707.707 3.505 3.505 0 0 1 4.95 0 .502.502 0 0 0 .707 0 .5.5 0 0 0 0-.707 4.506 4.506 0 0 0-6.364 0zm1.414 1.415a.5.5 0 0 0 .707.707c.566-.566 1.555-.566 2.121 0a.502.502 0 0 0 .707 0 .5.5 0 0 0 0-.707c-.943-.944-2.592-.944-3.535 0z"
  })]
});