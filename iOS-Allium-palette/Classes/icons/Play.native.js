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
  viewBox: "0 0 24 22",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    d: "m15.407 10.922-5.653 3.792V7.203l5.653 3.719zM9.558 5.844l7.103 4.732c.101.098.216.21.216.424 0 .213-.115.326-.197.408l-7.142 4.764c-.096.101-.218.101-.308.101-.055 0-.194 0-.256-.094-.161-.048-.27-.214-.27-.431V6.252c0-.258.155-.446.368-.446.048 0 .097-.01.141-.017.11-.02.248-.043.345.055zm13.392.408c0-2.29-1.934-4.224-4.224-4.224H5.273c-2.29 0-4.224 1.934-4.224 4.224v9.496c0 2.289 1.934 4.224 4.224 4.224h13.453c2.29 0 4.224-1.935 4.224-4.224V6.252zM18.726.979A5.279 5.279 0 0 1 24 6.252v9.496a5.28 5.28 0 0 1-5.274 5.273H5.273A5.279 5.279 0 0 1 0 15.748V6.252A5.278 5.278 0 0 1 5.273.979h13.453z"
  })]
});