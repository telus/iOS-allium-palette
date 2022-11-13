"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  viewBox: "0 0 20 20",
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
    d: "M0 10C0 4.48 4.48 0 10 0s10 4.48 10 10-4.48 10-10 10S0 15.52 0 10zm8.127 4.673a.633.633 0 0 0 .092-.105l7.734-8.572a.693.693 0 0 0-.009-.925.595.595 0 0 0-.882-.001l-7.514 8.055-2.612-2.8a.596.596 0 0 0-.88 0 .706.706 0 0 0-.014.928l3.038 3.51a.623.623 0 0 0 .486.219.587.587 0 0 0 .46-.2l.087-.097.014-.012z"
  })]
});