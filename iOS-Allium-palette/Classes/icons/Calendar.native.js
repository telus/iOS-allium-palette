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
    d: "M10.017 19.242H8.431a.5.5 0 0 1 0-1h1.586a1.088 1.088 0 0 0 0-2.173h-.792a.499.499 0 1 1 0-1h.792a1.088 1.088 0 0 0 0-2.173H8.431a.5.5 0 1 1 0-1h1.586c1.15 0 2.086.936 2.086 2.087 0 .634-.284 1.203-.732 1.586.448.383.732.952.732 1.586 0 1.15-.935 2.087-2.086 2.087zm5.552 0a.5.5 0 0 1-.5-.5v-6.346a.5.5 0 1 1 1 0v6.346a.5.5 0 0 1-.5.5zM1 7.93h22V4.465c0-.598-.486-1.086-1.086-1.086h-2.672v1.88a.5.5 0 0 1-1 0v-1.88H6.552v1.88a.5.5 0 0 1-1 0v-1.88H2.085C1.486 3.379 1 3.867 1 4.465v3.466zm0 1v12.983c0 .6.487 1.087 1.086 1.087h19.829c.6 0 1.086-.487 1.086-1.086V8.93H1zM21.915 24H2.085A2.089 2.089 0 0 1 0 21.914V4.465C0 3.315.936 2.38 2.085 2.38h3.467V.5a.5.5 0 1 1 1 0v1.88h11.69V.5a.5.5 0 1 1 1 0v1.88h2.672c1.15 0 2.086.936 2.086 2.086v17.449c0 1.15-.936 2.086-2.086 2.086z"
  })]
});