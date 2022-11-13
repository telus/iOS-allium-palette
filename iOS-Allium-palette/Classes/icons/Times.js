"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  viewBox: "0 0 16 16",
  height: size,
  width: size,
  fill: color,
  role: title ? 'img' : undefined,
  "aria-hidden": !title,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
    fillRule: "evenodd",
    d: "m8 9.17-4.931 4.637a.756.756 0 0 1-1.034-.021l.176.175a.718.718 0 0 1-.003-1.012l4.781-4.782a40.59 40.59 0 0 1-.083-.085l-4.72-5.017a.753.753 0 0 1 .03-1.03l-.176.177a.714.714 0 0 1 1.012-.003L8 7.157l4.948-4.948a.714.714 0 0 1 1.012.003l-.176-.176a.753.753 0 0 1 .03 1.029l-4.72 5.017a40.59 40.59 0 0 1-.083.085l4.781 4.782a.718.718 0 0 1-.003 1.012l.176-.175a.756.756 0 0 1-1.034.021L8 9.17z"
  })]
});