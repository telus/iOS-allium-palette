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
    d: "M6.052 4.846a1.111 1.111 0 0 0 0 1.569 1.111 1.111 0 0 0 1.568 0 1.111 1.111 0 0 0 0-1.569 1.106 1.106 0 0 0-1.568 0zm.784 2.852c-.53 0-1.06-.201-1.463-.605a2.07 2.07 0 1 1 2.926 0 2.063 2.063 0 0 1-1.463.605zm15.095 10.959a1.11 1.11 0 0 0 1.109-1.109v-1.297l-5.455-7.406a1.523 1.523 0 0 0-1.149-.617 1.545 1.545 0 0 0-1.214.504l-4.036 4.507a.48.48 0 0 1-.697.019l-2.034-2.034a1.527 1.527 0 0 0-2.066-.083L.96 15.756v1.792c0 .61.497 1.109 1.11 1.109h19.86zM2.07 1.343A1.11 1.11 0 0 0 .96 2.452v12.043l4.81-4.087a2.484 2.484 0 0 1 3.362.135l1.678 1.677 3.698-4.13a2.464 2.464 0 0 1 1.977-.82c.747.038 1.43.404 1.872 1.006l4.683 6.357V2.452a1.11 1.11 0 0 0-1.109-1.109H2.07zm19.86-.96c1.14 0 2.069.929 2.069 2.069v15.096c0 1.14-.928 2.069-2.069 2.069H2.07A2.072 2.072 0 0 1 0 17.548V2.452C0 1.312.928.383 2.07.383h19.86z"
  })]
});