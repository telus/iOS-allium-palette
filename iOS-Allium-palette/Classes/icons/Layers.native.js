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
    d: "M12 13.5a.496.496 0 0 1-.231-.057l-11.5-6a.5.5 0 0 1 0-.886l11.5-6a.499.499 0 0 1 .463 0l11.5 6a.5.5 0 0 1-.001.886l-11.5 6A.496.496 0 0 1 12 13.5zM1.581 7 12 12.437 22.419 7 12 1.563 1.581 7zM12 17.5a.49.49 0 0 1-.231-.058l-11.5-6.098a.508.508 0 0 1-.269-.45c0-.19.104-.363.269-.45l1.672-.886a.498.498 0 0 1 .675.215.512.512 0 0 1-.212.686l-.823.435L12 16.42l10.419-5.526-.822-.436a.512.512 0 0 1-.212-.686.5.5 0 0 1 .675-.215l1.672.886a.512.512 0 0 1-.001.901l-11.5 6.098A.49.49 0 0 1 12 17.5zm0 4a.49.49 0 0 1-.231-.058l-11.5-6.098a.508.508 0 0 1-.269-.45c0-.19.104-.363.269-.45l1.672-.886a.498.498 0 0 1 .675.215.512.512 0 0 1-.212.686l-.823.435L12 20.42l10.419-5.526-.822-.436a.512.512 0 0 1-.212-.686.5.5 0 0 1 .675-.215l1.672.886a.512.512 0 0 1-.001.901l-11.5 6.098A.49.49 0 0 1 12 21.5z"
  })]
});