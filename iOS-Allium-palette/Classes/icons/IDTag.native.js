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
  viewBox: "0 0 24 18",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    d: "M6.986 5.572a1.484 1.484 0 1 0 2.097 0 1.48 1.48 0 0 0-2.097 0zm1.049 3.53a2.476 2.476 0 0 1-1.756-.726 2.485 2.485 0 0 1 0-3.51 2.486 2.486 0 0 1 3.51 0c.47.469.729 1.091.729 1.755 0 .663-.26 1.287-.728 1.755a2.473 2.473 0 0 1-1.755.726zm1.982.588c1.15 0 2.086.936 2.086 2.086v1.587a.5.5 0 1 1-1 0v-1.587c0-.6-.487-1.086-1.086-1.086H6.052c-.599 0-1.087.487-1.087 1.086v1.587a.5.5 0 1 1-1 0v-1.587c0-1.15.936-2.086 2.087-2.086h3.965zm9.517-5.552a.5.5 0 0 1 0 1h-4.759a.5.5 0 0 1 0-1h4.76zm0 3.966a.5.5 0 0 1 0 1h-4.759a.5.5 0 0 1 0-1h4.76zm0 3.966a.5.5 0 0 1 0 1h-4.759a.5.5 0 0 1 0-1h4.76zM23 15.74V2.26c0-.6-.487-1.086-1.086-1.086H2.086A1.086 1.086 0 0 0 1 2.26v13.482c0 .598.487 1.085 1.086 1.085h19.828c.599 0 1.086-.487 1.086-1.086zM21.914.172A2.09 2.09 0 0 1 24 2.26v13.482a2.09 2.09 0 0 1-2.086 2.087H2.086A2.089 2.089 0 0 1 0 15.74V2.26A2.09 2.09 0 0 1 2.086.172h19.828z"
  })]
});