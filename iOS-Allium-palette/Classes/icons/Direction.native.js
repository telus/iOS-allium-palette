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
  viewBox: "0 0 22 24",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    d: "M16.014 2.895c0-.167 0-.289-.116-.404L14.447 1.04h6.069v6.069l-1.45-1.451a.519.519 0 0 0-.365-.155h-.002a.517.517 0 0 0-.364.155L12 11.992l-.034.037v.051c0 .02-.021.082-.034.119a.655.655 0 0 0-.046.197v10.565H8.175l-.077-12.254L15.82 3.3c.085-.088.194-.195.194-.405zm-8.352 6.8L1.655 3.687l2.438-2.438 6.06 6.06L7.66 9.695zM21.116 0h-7.918c-.31 0-.42.133-.507.38-.11.153-.006.437.101.544l1.97 1.969-3.864 3.703-6.48-6.48-.032-.023c-.192-.095-.492-.105-.697.102L.522 3.362a.504.504 0 0 0 0 .729l6.614 6.615v12.775c0 .306.214.519.52.519h4.75c.207 0 .484-.183.585-.385l.014-10.93 5.815-5.814 1.97 1.971c.123.122.338.204.538.102a.558.558 0 0 0 .306-.507V.52a.497.497 0 0 0-.518-.52z"
  })]
});