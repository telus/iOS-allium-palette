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
    d: "M12.509 1.51a.48.48 0 0 1 0 .96h-1.033a.48.48 0 1 1 0-.96h1.033zm6.177 1.51v-.554A1.49 1.49 0 0 0 17.181.96H6.82a1.49 1.49 0 0 0-1.507 1.506v.553h13.372zM5.314 20.258h13.372V3.979H5.314v16.28zm13.372 1.275v-.315H5.314v.315A1.49 1.49 0 0 0 6.82 23.04h10.281c.874 0 1.585-.676 1.585-1.506zM17.181 0a2.44 2.44 0 0 1 2.465 2.466v19.068c0 1.36-1.142 2.466-2.545 2.466H6.821a2.44 2.44 0 0 1-2.467-2.466V2.466A2.44 2.44 0 0 1 6.82 0h10.36z"
  })]
});