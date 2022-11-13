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
    d: "M17 0c1.378 0 2.5 1.122 2.5 2.5v19c0 1.378-1.122 2.5-2.5 2.5H7a2.503 2.503 0 0 1-2.5-2.5v-19C4.5 1.122 5.622 0 7 0h10zm1.5 19h-13v2.5c0 .827.673 1.5 1.5 1.5h10c.827 0 1.5-.673 1.5-1.5V19zM12 20a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm6.5-15h-13v13h13V5zm-3.17 3.551a.516.516 0 1 1 .73.73l-5.088 5.088a.517.517 0 0 1-.73 0l-1.99-1.99a.516.516 0 1 1 .73-.731l1.625 1.625 4.722-4.722zM17 1H7c-.827 0-1.5.673-1.5 1.5V4h13V2.5c0-.827-.673-1.5-1.5-1.5zm-.98 1a.5.5 0 0 1 0 1 .504.504 0 0 1-.505-.5c0-.276.219-.5.495-.5h.01zM13 2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1 0-1h2z"
  })]
});