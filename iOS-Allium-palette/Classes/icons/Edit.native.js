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
    d: "M19.717 2c.612 0 1.198.235 1.61.646a2.275 2.275 0 0 1 .135 3.086l-.138.148L7.11 20.093a2.215 2.215 0 0 1-.227.205l-.03.015-4.114 1.648a.544.544 0 0 1-.581-.119.536.536 0 0 1-.146-.495l.027-.087 1.644-4.118a.519.519 0 0 1 .07-.124l.05-.056L18.107 2.646A2.281 2.281 0 0 1 19.718 2zm-15.1 15.715-1.11 2.776 2.772-1.11-1.663-1.666zM16.114 6.167 5.358 16.931l1.68 1.682 1.335-1.37c1.2-1.216 3.012-3.027 5.672-5.67l3.753-3.721-1.683-1.685zm4.454-2.753a1.222 1.222 0 0 0-1.595-.096l-.103.091-1.993 1.995 1.686 1.689 2.002-1.982c.23-.224.355-.524.355-.844a1.19 1.19 0 0 0-.352-.853z",
    fillRule: "evenodd"
  })]
});