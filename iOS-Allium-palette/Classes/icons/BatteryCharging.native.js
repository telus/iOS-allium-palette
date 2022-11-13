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
  viewBox: "0 0 13 21",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    d: "M6.5 18a.5.5 0 0 1-.5-.5V13H3.5a.502.502 0 0 1-.46-.697l3-7A.5.5 0 0 1 7 5.5V10h2.5a.502.502 0 0 1 .46.697l-3 7A.502.502 0 0 1 6.5 18zm-2.242-6H6.5a.5.5 0 0 1 .5.5v2.564L8.742 11H6.5a.5.5 0 0 1-.5-.5V7.936L4.258 12zm6.242 9h-8A2.503 2.503 0 0 1 0 18.5v-14C0 3.122 1.121 2 2.5 2H4V.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 .5.5V2h1.5C11.879 2 13 3.122 13 4.5v14c0 1.378-1.121 2.5-2.5 2.5zm-8-18C1.673 3 1 3.673 1 4.5v14c0 .827.673 1.5 1.5 1.5h8c.827 0 1.5-.673 1.5-1.5v-14c0-.827-.673-1.5-1.5-1.5h-2a.5.5 0 0 1-.5-.5V1H5v1.5a.5.5 0 0 1-.5.5h-2z"
  })]
});