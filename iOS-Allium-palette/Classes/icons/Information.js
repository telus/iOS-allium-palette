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
    d: "M13.505 17.418a.52.52 0 0 1 0 1.04h-3.01a.52.52 0 1 1 0-1.04h.986v-7.172l-.618.617a.518.518 0 1 1-.734-.735l1.504-1.504a.517.517 0 0 1 .567-.112c.194.08.32.268.32.479v8.427h.985zM12 6.818a.835.835 0 1 1-.002-1.67.835.835 0 0 1 .002 1.67zm0 16.143c2.928 0 5.68-1.141 7.751-3.211a10.892 10.892 0 0 0 3.21-7.75 10.89 10.89 0 0 0-3.211-7.75A10.892 10.892 0 0 0 12 1.039c-2.928 0-5.68 1.14-7.75 3.21A10.889 10.889 0 0 0 1.039 12c0 2.928 1.141 5.68 3.211 7.752A10.894 10.894 0 0 0 12 22.96zm8.484-19.446A11.914 11.914 0 0 1 24 12c0 3.206-1.248 6.219-3.514 8.486A11.924 11.924 0 0 1 12 24a11.92 11.92 0 0 1-8.485-3.514A11.923 11.923 0 0 1 0 12a11.92 11.92 0 0 1 3.515-8.485A11.92 11.92 0 0 1 12 0c3.205 0 6.219 1.248 8.484 3.515z"
  })]
});