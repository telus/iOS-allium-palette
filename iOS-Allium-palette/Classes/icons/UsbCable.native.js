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
    d: "M5.5 2h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zM5 4H4V3h1v1zm14.5-4A4.505 4.505 0 0 0 15 4.5V19c0 2.206-1.794 4-4 4s-4-1.794-4-4v-.025c3.351-.257 6-3.059 6-6.475v-3c0-.651-.419-1.201-1-1.408V.5a.5.5 0 0 0-.5-.5h-10a.5.5 0 0 0-.5.5v7.592c-.581.207-1 .757-1 1.408v3c0 3.415 2.649 6.218 6 6.475V19c0 2.757 2.243 5 5 5s5-2.243 5-5V4.5C16 2.57 17.57 1 19.5 1S23 2.57 23 4.5v4a.5.5 0 0 0 1 0v-4C24 2.019 21.981 0 19.5 0zM2 1h9v7H2V1zM1 12.5v-3a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v3c0 3.033-2.467 5.5-5.5 5.5A5.506 5.506 0 0 1 1 12.5zM9.5 2h-2a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-2a.5.5 0 0 0-.5-.5zM9 4H8V3h1v1z"
  })]
});