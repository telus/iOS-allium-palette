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
    d: "m19.25 20.195-2.868-1.245c-.917-.374-1.347-1.814-1.445-2.379.648-.592 1.321-1.523 1.321-2.416 0-.252.061-.352.087-.383a.521.521 0 0 0 .322-.299c.02-.048.488-1.186.488-1.957a.56.56 0 0 0-.016-.129 1.22 1.22 0 0 0-.433-.663V8.437c0-1.484-.477-2.059-.911-2.383-.124-.804-1.017-2.096-3.647-2.096-2.824 0-4.558 2.609-4.558 4.479v2.287a1.224 1.224 0 0 0-.433.663.524.524 0 0 0-.016.129c0 .747.438 1.835.487 1.956.067.164.18.266.308.292.001.001.103.069.103.391 0 .892.672 1.823 1.32 2.416-.098.565-.528 2.005-1.439 2.377l-3.17 1.249A10.953 10.953 0 0 1 1.042 12C1.042 5.957 5.958 1.041 12 1.041S22.958 5.957 22.958 12c0 3.126-1.351 6.108-3.708 8.195zm-10.942-.28c1.589-.65 2.119-2.991 2.119-3.561a.52.52 0 0 0-.194-.406c-.558-.451-1.152-1.233-1.152-1.793 0-.742-.332-1.097-.555-1.251-.152-.413-.316-.957-.339-1.308l.002-.005a.521.521 0 0 0 .443-.515V8.437C8.632 7.036 10.002 5 12.149 5c1.867 0 2.517.749 2.611 1.169a.492.492 0 0 0-.018.182c.03.282.24.414.356.487.183.113.567.351.567 1.6v2.639a.5.5 0 0 0 .44.512.047.047 0 0 0 .005.01c-.023.349-.186.893-.339 1.306-.192.134-.554.487-.554 1.25 0 .56-.594 1.342-1.154 1.795a.522.522 0 0 0-.192.404c0 .571.527 2.911 2.108 3.556l2.345 1.018A10.836 10.836 0 0 1 12 22.958c-2.267 0-4.441-.696-6.303-2.014l2.611-1.029zM12 0C5.383 0 0 5.383 0 12s5.383 12 12 12 12-5.383 12-12S18.617 0 12 0z"
  })]
});