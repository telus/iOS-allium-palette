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
  viewBox: "0 0 24 20",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    d: "M1 3.98v14.768l6.138-2.728V1.252L1 3.98zm15.862 0v14.768L23 16.02V1.252L16.862 3.98zM8.138 15.994l7.724 2.81v-14.8L8.138 1.198v14.797zm8.224 4.024a.47.47 0 0 1-.181-.035l-8.525-3.1-6.953 3.092a.507.507 0 0 1-.475-.038.497.497 0 0 1-.228-.42V3.656a.5.5 0 0 1 .297-.457L7.425.03a.495.495 0 0 1 .394-.013l8.525 3.099 6.953-3.09A.499.499 0 0 1 24 .483v15.862a.5.5 0 0 1-.297.457l-7.128 3.168a.49.49 0 0 1-.213.048z"
  })]
});