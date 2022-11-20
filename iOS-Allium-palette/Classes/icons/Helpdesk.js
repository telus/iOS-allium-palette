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
    d: "M18.5 0C20.981 0 23 2.019 23 4.5v8a.5.5 0 0 1-1 0v-8C22 2.57 20.43 1 18.5 1h-14C2.57 1 1 2.57 1 4.5v17.619l4.116-4.939A.5.5 0 0 1 5.5 17h6a.5.5 0 0 1 0 1H5.734l-4.85 5.82a.497.497 0 0 1-.554.15.5.5 0 0 1-.33-.47v-19C0 2.019 2.019 0 4.5 0h14zm0 13c3.033 0 5.5 2.467 5.5 5.5S21.533 24 18.5 24a5.506 5.506 0 0 1-5.5-5.5c0-3.033 2.467-5.5 5.5-5.5zm0 1a4.505 4.505 0 0 0-4.5 4.5c0 2.481 2.019 4.5 4.5 4.5s4.5-2.019 4.5-4.5-2.019-4.5-4.5-4.5zm-.35 7.15a.501.501 0 0 1 .85.35c0 .13-.05.26-.15.35a.47.47 0 0 1-.35.15.47.47 0 0 1-.35-.15.474.474 0 0 1-.15-.35c0-.14.05-.26.15-.35zm.349-6.15c1.379 0 2.501.897 2.501 2 0 .955-.672 1.596-1.999 1.908L19 19.5a.5.5 0 1 1-1 0l.001-1a.5.5 0 0 1 .399-.489l.109-.021C19.526 17.802 20 17.487 20 17c0-.542-.688-1-1.501-1-.783 0-1.457.424-1.5.946a.49.49 0 0 1-.54.456.5.5 0 0 1-.456-.54C16.091 15.801 17.165 15 18.499 15zM6.5 8C7.327 8 8 8.673 8 9.5S7.327 11 6.5 11 5 10.327 5 9.5 5.673 8 6.5 8zm5 0c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zm5 0c.827 0 1.5.673 1.5 1.5s-.673 1.5-1.5 1.5-1.5-.673-1.5-1.5.673-1.5 1.5-1.5zm-10 1a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm5 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1zm5 0a.5.5 0 1 0 0 1 .5.5 0 0 0 0-1z"
  })]
});