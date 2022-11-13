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
    d: "m19.906 10.956-7.78-.206s-7.206.246-7.686.246c-.48 0-1.44.195-1.44.986 0 .791 1.334.791 1.334.791l.233.01a334.359 334.359 0 0 0 2.734.104c1.636.056 3.584.113 4.82.113 1.448 0 3.396-.056 4.98-.112a316.706 316.706 0 0 0 2.59-.103l.216-.01c.226-.01.492-.022.7-.118a.649.649 0 0 0 .29-.255.803.803 0 0 0 .103-.42c0-.545-.513-1.01-1.094-1.026z"
  })]
});