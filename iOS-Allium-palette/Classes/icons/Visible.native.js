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
  viewBox: "0 0 24 14",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    d: "M12 14C5.839 14 .349 7.596.118 7.323a.502.502 0 0 1 0-.646C.349 6.404 5.839 0 12 0c7.18 0 11.722 6.441 11.911 6.716a.5.5 0 0 1-.029.607C23.651 7.596 18.161 14 12 14zM1.172 7C2.365 8.29 7.061 13 12 13c4.981 0 9.704-4.778 10.854-6.027C21.858 5.703 17.779 1 12 1 7.054 1 2.363 5.709 1.172 7zM12 11c-2.206 0-4-1.794-4-4s1.794-4 4-4 4 1.794 4 4-1.794 4-4 4zm0-7c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"
  })]
});