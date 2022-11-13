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
    d: "M22.831 1.279a1.1 1.1 0 0 0-.89-1c-.46-.04-11.17-1.75-17.28 3.81a8.36 8.36 0 0 0-2.66 6.26 10 10 0 0 0 2.49 6.46 29.65 29.65 0 0 0-2.45 6.54.5.5 0 0 0 .38.6h.11a.49.49 0 0 0 .48-.39 29.62 29.62 0 0 1 2.22-6 9.81 9.81 0 0 0 6.69 2.73 8.28 8.28 0 0 0 5.64-2.14c6.05-5.54 5.3-16.41 5.27-16.87zm-5.95 16.14c-3 2.8-8 2.42-11.17-.77.45-.81.954-1.59 1.51-2.33a20.601 20.601 0 0 1 6.37-5.55.5.5 0 1 0-.44-.9 21.342 21.342 0 0 0-6.72 5.84c-.518.69-.992 1.41-1.42 2.16a8.88 8.88 0 0 1-2-5.52 7.39 7.39 0 0 1 2.33-5.52c3.43-3.18 8.64-3.86 12.25-3.86a27.42 27.42 0 0 1 4.19.3c.08.53.8 10.93-4.9 16.15z"
  })]
});