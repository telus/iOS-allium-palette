"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  viewBox: "0 0 24 24",
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
    clipRule: "evenodd",
    d: "M7.896 5.01c.09-.012.282-.035.435.085l10.343 6.268.025.023c.117.107.301.273.301.585 0 .312-.184.479-.3.585l-.008.006-.018.017-10.341 6.267C8.149 19 7.954 19 7.839 19h-.017c-.048 0-.143 0-.227-.025a.366.366 0 0 1-.17-.105.567.567 0 0 1-.292-.21.72.72 0 0 1-.132-.424V5.706a.72.72 0 0 1 .132-.425.57.57 0 0 1 .469-.234c.06 0 .108-.008.172-.019a2.72 2.72 0 0 1 .123-.018zm.766 11.738V7.085l7.999 4.784-8 4.88z"
  })]
});