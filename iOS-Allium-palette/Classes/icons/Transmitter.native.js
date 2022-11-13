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
    d: "m14.813 8.645-.82-2.928h7.215l-6.395 2.928zm.964 7.145-5.951-3.761 4.34-1.988 1.61 5.749zm-8.54 7.168 9.069-5.28 1.48 5.28H7.236zM2.746 5.717h7.262l-.843 3.008-6.42-3.008zm8.3 0h1.909l.938 3.349-4.342 1.989 1.495-5.338zM9.079 12.74l6.58 4.158-9.255 5.39 2.675-9.548zm2.92-10.428.675 2.405h-1.347L12 2.312zm11.99 2.797a.496.496 0 0 0-.22-.314.497.497 0 0 0-.28-.078h-9.776L12.482.324c-.121-.432-.842-.432-.963 0l-1.231 4.393H.512a.506.506 0 0 0-.282.079v.001a.492.492 0 0 0-.23.431V8.39a.5.5 0 0 0 1 0V6.004l7.892 3.697-3.753 13.394a.497.497 0 0 0-.07.355.49.49 0 0 0 .089.31.5.5 0 0 0 .399.198h12.888a.498.498 0 0 0 .48-.634L17.099 16.8c-.007-.028-.005-.057-.016-.085-.003-.007-.01-.011-.012-.017L15.086 9.62 23 5.996V8.39a.5.5 0 1 0 1 0V5.228a.534.534 0 0 0-.012-.119z"
  })]
});