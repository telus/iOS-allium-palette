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
    d: "M22.5 2h-21C.673 2 0 2.673 0 3.5v14c0 .827.673 1.5 1.5 1.5H10v1.077l-5.582.93a.5.5 0 0 0 .164.986L10.54 21h2.919l5.958.993a.497.497 0 0 0 .575-.411.5.5 0 0 0-.411-.575L14 20.077V19h8.5c.827 0 1.5-.673 1.5-1.5v-14c0-.827-.673-1.5-1.5-1.5zM13 20h-2v-1h2v1zm10-2.5a.5.5 0 0 1-.5.5h-21a.5.5 0 0 1-.5-.5v-14a.5.5 0 0 1 .5-.5h21a.5.5 0 0 1 .5.5v14zm-13-3a.498.498 0 0 0 .277-.084l6-4a.501.501 0 0 0 .001-.832l-6-4A.5.5 0 0 0 9.5 6v8a.5.5 0 0 0 .5.5zm.5-7.566L15.099 10 10.5 13.066V6.934z"
  })]
});