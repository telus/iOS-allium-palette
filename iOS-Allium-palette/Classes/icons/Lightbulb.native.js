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
  viewBox: "0 0 16 24",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    d: "M9.768 18H6.232c-1.144 0-2.123-.813-2.381-1.977a4.621 4.621 0 0 0-.758-1.732c-.19-.266-.389-.533-.59-.803C1.33 11.91 0 10.123 0 8c0-4.411 3.589-8 8-8s8 3.589 8 8c0 2.123-1.33 3.91-2.503 5.488-.201.27-.4.537-.59.803a4.628 4.628 0 0 0-.758 1.732C11.891 17.188 10.912 18 9.768 18zM8 1C4.14 1 1 4.141 1 8c0 1.792 1.172 3.367 2.306 4.891.205.275.407.548.601.818a5.69 5.69 0 0 1 .921 2.098C4.983 16.51 5.561 17 6.232 17h3.536c.671 0 1.249-.49 1.404-1.193a5.688 5.688 0 0 1 .921-2.098c.194-.271.396-.543.601-.818C13.828 11.367 15 9.792 15 8c0-3.859-3.14-7-7-7zm2.5 19h-5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1zm0 2h-5a.5.5 0 0 1 0-1h5a.5.5 0 0 1 0 1zm-1 2h-3a.5.5 0 0 1 0-1h3a.5.5 0 0 1 0 1z"
  })]
});