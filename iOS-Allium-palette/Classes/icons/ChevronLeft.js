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
    d: "M15.725 20.691c-.45.527-1.128.278-1.345 0l-8.695-8.264a.735.735 0 0 1 0-.975l8.695-8.087c.246-.267.8-.605 1.345-.117.545.488.153 1.16-.093 1.428l-6.743 7.32 6.743 7.334c.3.304.544.834.093 1.361z"
  })]
});