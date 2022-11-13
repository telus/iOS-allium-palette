"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  viewBox: "0 0 24 20",
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
    d: "M20.5 20h-17C1.57 20 0 18.43 0 16.5v-10C0 4.57 1.57 3 3.5 3h17C22.43 3 24 4.57 24 6.5v10c0 1.93-1.57 3.5-3.5 3.5zM3.5 4A2.502 2.502 0 0 0 1 6.5v10C1 17.879 2.121 19 3.5 19h17c1.379 0 2.5-1.121 2.5-2.5v-10C23 5.121 21.879 4 20.5 4h-17zm12 0h-7a.5.5 0 0 1-.5-.5v-2C8 .673 8.673 0 9.5 0h5c.827 0 1.5.673 1.5 1.5v2a.5.5 0 0 1-.5.5zM9 3h6V1.5c0-.275-.225-.5-.5-.5h-5c-.275 0-.5.225-.5.5V3zM6.5 20h-2a.5.5 0 0 1-.5-.5v-16a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v16a.5.5 0 0 1-.5.5zM5 19h1V4H5v15zm14.5 1h-2a.5.5 0 0 1-.5-.5v-16a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v16a.5.5 0 0 1-.5.5zM18 19h1V4h-1v15z"
  })]
});