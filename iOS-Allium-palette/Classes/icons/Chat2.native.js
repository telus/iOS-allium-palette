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
    d: "M20.328 24a.504.504 0 0 1-.354-.146l-3.819-3.82H7.638c-.983 0-1.872-.507-2.32-1.324a.5.5 0 1 1 .876-.48c.268.489.835.805 1.444.805h8.724c.133 0 .26.053.353.147l3.113 3.113v-2.76a.5.5 0 0 1 .5-.5h1.19c.818 0 1.483-.665 1.483-1.482V8.431c0-.599-.487-1.086-1.087-1.086h-3.173a.5.5 0 0 1 0-.999h3.173c1.15 0 2.086.935 2.086 2.085v9.122a2.485 2.485 0 0 1-2.483 2.481h-.69v3.467a.5.5 0 0 1-.499.499zM2.086 1C1.486 1 1 1.487 1 2.086v9.518c0 .6.487 1.087 1.086 1.087h1.586c.276 0 .499.223.499.499v2.853l3.63-3.226a.499.499 0 0 1 .333-.126h7.039c.817 0 1.482-.666 1.482-1.483V2.086c0-.599-.487-1.086-1.086-1.086H2.086zm1.586 16.654a.5.5 0 0 1-.5-.499v-3.466H2.086A2.088 2.088 0 0 1 0 11.604V2.086A2.09 2.09 0 0 1 2.086 0h13.483c1.15 0 2.085.937 2.085 2.086v9.122a2.483 2.483 0 0 1-2.481 2.481h-6.85l-4.32 3.84a.497.497 0 0 1-.331.125z"
  })]
});