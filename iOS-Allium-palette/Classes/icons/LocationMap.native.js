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
    d: "M12 11c-1.93 0-3.5-1.57-3.5-3.5S10.07 4 12 4s3.5 1.57 3.5 3.5S13.93 11 12 11zm0-6a2.502 2.502 0 0 0-2.5 2.5c0 1.379 1.12 2.5 2.5 2.5 1.379 0 2.5-1.121 2.5-2.5S13.379 5 12 5zm11 19H1a.5.5 0 0 1-.416-.778l4-6A.503.503 0 0 1 5 17h4.85a.5.5 0 0 1 0 1H5.268l-3.333 5h20.13l-3.332-5H14.15a.5.5 0 0 1 0-1H19c.167 0 .323.084.416.223l4 6A.499.499 0 0 1 23 24zm-11-3a.497.497 0 0 1-.396-.196C11.313 20.426 4.5 11.49 4.5 7.5 4.5 3.364 7.864 0 12 0s7.5 3.364 7.5 7.5c0 3.99-6.813 12.926-7.104 13.304A.497.497 0 0 1 12 21zm0-20a6.508 6.508 0 0 0-6.5 6.5c0 3.136 5.032 10.178 6.5 12.165 1.468-1.987 6.5-9.029 6.5-12.165C18.5 3.916 15.584 1 12 1z"
  })]
});