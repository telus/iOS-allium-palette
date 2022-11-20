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
    d: "M11.904 14.28c-.017.024-.027.052-.05.073l-1.5 1.5a.5.5 0 1 1-.707-.707l.647-.646H9.5A2.503 2.503 0 0 0 7 17c0 1.378 1.122 2.5 2.5 2.5a.5.5 0 1 1 0 1C7.57 20.5 6 18.93 6 17s1.57-3.5 3.5-3.5h.793l-.646-.647a.5.5 0 0 1 .707-.707l1.5 1.5c.004.005.005.011.009.015.04.044.075.093.098.147a.501.501 0 0 1 0 .384c-.014.033-.038.06-.058.087zm1.596-.78c1.93 0 3.5 1.57 3.5 3.5s-1.57 3.5-3.5 3.5h-.793l.647.646a.503.503 0 0 1 0 .708.502.502 0 0 1-.708 0l-1.5-1.5c-.022-.022-.032-.049-.049-.075-.02-.028-.044-.053-.058-.087a.498.498 0 0 1 .097-.531c.005-.004.006-.01.01-.015l1.5-1.5a.503.503 0 0 1 .708 0 .503.503 0 0 1 0 .708l-.647.646h.793c1.378 0 2.5-1.122 2.5-2.5s-1.122-2.5-2.5-2.5a.5.5 0 0 1 0-1zm5.346-7.477C21.758 6.232 24 8.609 24 11.5c0 3.033-2.466 5.5-5.5 5.5a.5.5 0 0 1 0-1c2.482 0 4.5-2.019 4.5-4.5S20.982 7 18.5 7c-.277-.027-.538-.171-.573-.422C17.474 3.398 14.711 1 11.5 1A6.508 6.508 0 0 0 5 7.5c0 .28.024.578.076.938a.5.5 0 0 1-.12.402c-.098.109-.256.156-.383.169a.95.95 0 0 1-.106-.01C2.57 8.999 1 10.569 1 12.499S2.57 16 4.5 16a.5.5 0 0 1 0 1A4.505 4.505 0 0 1 0 12.5a4.507 4.507 0 0 1 4.022-4.475A6.391 6.391 0 0 1 4 7.5C4 3.364 7.365 0 11.5 0c3.566 0 6.652 2.561 7.346 6.023z"
  })]
});