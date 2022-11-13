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
    d: "M4 18.783H1c-.776 0-1 .233-1 1.043V24c0-.234.224 0 1 0h3c-.224 0 0-.234 0 0v-4.174c0-.81-.224-1.043 0-1.043zm-1 4.174H1v-3.13h2v3.13zM24 0h-3c-.776 0-1 .234-1 1.043V24c0-.234.224 0 1 0h3c-.224 0 0-.234 0 0V1.043C24 .233 23.776 0 24 0zm-1 22.957h-2V1.043h2v21.914zM9 14.609H6c-.776 0-1 .233-1 0v8.348C5 23.767 5.224 24 6 24h3c-.224 0 0-.234 0-1.043v-8.348c0 .233-.224 0 0 0zm-1 8.348H6v-7.305h2v7.305zM19 4.174h-3c-.776 0-1 .234-1 1.043V24c0-.234.224 0 1 0h3c-.224 0 0-.234 0 0V5.217c0-.81-.224-1.043 0-1.043zm-1 18.783h-2V5.217h2v17.74zM14 9.39h-3c-.776 0-1 .234-1 1.044V24c0-.234.224 0 1 0h3c-.224 0 0-.234 0 0V10.435c0-.81-.224-1.044 0-1.044zm-1 13.566h-2V10.435h2v12.522z"
  })]
});