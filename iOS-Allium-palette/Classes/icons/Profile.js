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
    d: "M12 1c6.066 0 11.001 4.934 11.001 11 0 6.065-4.935 11-11 11C5.935 23 1 18.065 1 12 1 5.933 5.935 1 12 1zm0 12.745c-3.309 0-6.135 2.541-6.515 5.813a9.938 9.938 0 0 0 13.03 0c-.378-3.271-3.206-5.813-6.514-5.813zM12 2.01c-5.507 0-9.99 4.48-9.99 9.99 0 2.577.99 4.923 2.598 6.697.752-3.408 3.83-5.961 7.393-5.961 3.561 0 6.64 2.553 7.391 5.961a9.938 9.938 0 0 0 2.6-6.698c0-5.508-4.482-9.99-9.991-9.99zm0 2.315a3.538 3.538 0 0 1 3.534 3.535A3.538 3.538 0 0 1 12 11.394 3.538 3.538 0 0 1 8.466 7.86 3.538 3.538 0 0 1 12 4.325zm0 1.01A2.527 2.527 0 0 0 9.476 7.86 2.527 2.527 0 0 0 12 10.384a2.527 2.527 0 0 0 2.525-2.524A2.527 2.527 0 0 0 12 5.335z",
    fillRule: "evenodd"
  })]
});