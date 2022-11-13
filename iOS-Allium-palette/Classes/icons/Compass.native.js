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
    d: "M12 22.934c6.029 0 10.934-4.904 10.934-10.934 0-6.028-4.905-10.933-10.934-10.933C5.972 1.067 1.066 5.972 1.066 12c0 6.03 4.906 10.934 10.934 10.934zM12 0c6.616 0 12 5.384 12 12 0 6.617-5.384 12-12 12-6.617 0-12-5.383-12-12C0 5.384 5.383 0 12 0zm0 20.477c4.674 0 8.477-3.803 8.477-8.477 0-4.673-3.803-8.476-8.477-8.476S3.524 7.327 3.524 12c0 4.674 3.802 8.477 8.476 8.477zm0-18.02c5.263 0 9.543 4.28 9.543 9.543 0 5.263-4.28 9.543-9.543 9.543-5.262 0-9.542-4.28-9.542-9.543 0-5.262 4.28-9.542 9.542-9.542zm0 9.829a.286.286 0 1 0 0-.572.286.286 0 0 0 0 .572zm0 1.067a1.354 1.354 0 0 1 0-2.705c.746 0 1.353.607 1.353 1.352 0 .746-.607 1.353-1.353 1.353zM15.898 8.1l-5.458 2.34-2.34 5.458 5.46-2.34L15.898 8.1zm.807-1.504a.532.532 0 0 1 .699.699l-2.948 6.88a.547.547 0 0 1-.28.28l-6.882 2.95a.535.535 0 0 1-.699-.701l2.95-6.88a.53.53 0 0 1 .278-.28l6.882-2.948z"
  })]
});