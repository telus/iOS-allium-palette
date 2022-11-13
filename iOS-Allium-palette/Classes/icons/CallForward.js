"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  viewBox: "0 0 22 22",
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
    d: "M15.862 10.502c-.11.11-.332.11-.442.11-.331 0-.553-.221-.553-.552 0-1.88-1.437-3.316-3.316-3.316-.331 0-.552-.221-.552-.553 0-.331.221-.552.552-.552a4.433 4.433 0 0 1 4.421 4.42c0 .222-.11.332-.11.443zm2.21 0c-.11.11-.331.11-.441.11-.332 0-.553-.221-.553-.552 0-3.095-2.432-5.526-5.527-5.526-.331 0-.552-.221-.552-.553 0-.332.221-.553.552-.553 3.648 0 6.632 2.985 6.632 6.632 0 .22-.111.33-.111.442zm2.211 0c-.11.11-.332.11-.442.11-.332 0-.553-.221-.553-.552a7.689 7.689 0 0 0-7.737-7.737c-.331 0-.552-.221-.552-.552 0-.332.221-.553.552-.553 4.864 0 8.842 3.979 8.842 8.842 0 .22-.11.33-.11.442zM7.786 5.91a1.317 1.317 0 0 0-.232-1.565l-2.538-2.53a1.339 1.339 0 0 0-.933-.383c-.355 0-.687.136-.935.384L1.823 3.142a1.281 1.281 0 0 0-.385 1.018 17.94 17.94 0 0 0 16.409 16.4c.373.024.752-.119 1.016-.384l1.326-1.326a1.31 1.31 0 0 0 .385-.933c0-.348-.137-.68-.386-.936l-2.22-2.221a1.324 1.324 0 0 0-1.563-.225l-2.939 1.585a.42.42 0 0 1-.344.035 9.468 9.468 0 0 1-6.966-6.972.473.473 0 0 1 .046-.336L7.786 5.91zm10.837 8.203 2.221 2.222c.424.415.656.977.656 1.582 0 .601-.235 1.167-.662 1.595l-1.318 1.319c-.42.426-.999.67-1.59.67-.055 0-.11 0-.165-.008A18.871 18.871 0 0 1 .505 4.236a2.236 2.236 0 0 1 .663-1.763l1.319-1.32c.848-.847 2.336-.847 3.184 0l2.537 2.538c.708.708.866 1.779.392 2.665l-1.492 2.78a8.58 8.58 0 0 0 6.077 6.077l2.773-1.492a2.274 2.274 0 0 1 2.665.392z"
  })]
});