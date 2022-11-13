"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  viewBox: "0 0 20 24",
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
    d: "M18.5 23h-14v-2H16a.5.5 0 0 0 .5-.5V4h2v19zM1.5 7H7a.5.5 0 0 0 .5-.5V1h8v19h-14V7zm5-5.293V6H2.207L6.5 1.707zM19 3h-2.5V.5A.5.5 0 0 0 16 0H7a.508.508 0 0 0-.193.039c-.029.012-.051.034-.077.051-.028.018-.06.032-.084.056l-6 6c-.023.023-.036.054-.054.081-.018.027-.04.05-.053.08A.508.508 0 0 0 .5 6.5v14a.5.5 0 0 0 .5.5h2.5v2.5a.5.5 0 0 0 .5.5h15a.5.5 0 0 0 .5-.5v-20A.5.5 0 0 0 19 3z"
  })]
});