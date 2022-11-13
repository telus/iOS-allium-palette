"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  viewBox: "0 0 24 19",
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
    d: "M2.5 19A2.502 2.502 0 0 1 0 16.5v-11c0-1.208.86-2.218 2-2.45V2.5C2 1.121 3.121 0 4.5 0h17C22.879 0 24 1.121 24 2.5v14c0 1.379-1.121 2.5-2.5 2.5h-19zm0-1h19c.827 0 1.5-.673 1.5-1.5v-14c0-.827-.673-1.5-1.5-1.5h-17C3.673 1 3 1.673 3 2.5v14a.5.5 0 0 1-1 0V4.086c-.582.206-1 .762-1 1.414v11c0 .827.673 1.5 1.5 1.5zm10-2h-8a.5.5 0 0 1-.5-.5v-6a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-.5.5zM5 15h7v-5H5v5zm16.5-5h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0 3h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0 3h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1zm0-9h-17a.5.5 0 0 1 0-1h17a.5.5 0 0 1 0 1zm0-3h-17a.5.5 0 0 1 0-1h17a.5.5 0 0 1 0 1z"
  })]
});