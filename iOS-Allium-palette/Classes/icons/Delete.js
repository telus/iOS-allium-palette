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
    d: "M13.687 1c.97 0 1.852.46 2.346 1.213l.093.154.134.24h2.115c1.452 0 2.539 1.04 2.62 2.35l.005.158v.804c0 .462-.369.843-.84.895l-.11.006H20v13.463c0 1.983-1.427 3.609-3.376 3.712l-.197.005h-8.74c-1.983 0-3.58-1.562-3.682-3.52L4 20.283V6.82h-.053c-.485 0-.886-.348-.94-.796L3 5.919v-.804c0-1.33 1.135-2.421 2.565-2.503l.173-.005h2.115l.133-.24c.442-.79 1.29-1.3 2.247-1.36L10.425 1h3.262zM19 6.82v13.463l-.005.172c-.075 1.361-1.046 2.454-2.397 2.54l-.171.005h-8.74l-.171-.005a2.694 2.694 0 0 1-2.51-2.54L5 20.283V6.82h14zM13.687 2l.166.007c.549.044 1.034.309 1.32.72l.079.127.422.753h2.701l.157.006c.823.066 1.397.642 1.462 1.365l.006.137v.705H4v-.705l.006-.13c.072-.726.739-1.306 1.574-1.372l.158-.006h2.703l.419-.753.08-.128c.286-.41.77-.675 1.319-.72L10.425 2h3.262zM7.5 8.5a.5.5 0 0 1 .492.41L8 9v12a.5.5 0 0 1-.992.09L7 21V9a.5.5 0 0 1 .5-.5zm3 0a.5.5 0 0 1 .492.41L11 9v12a.5.5 0 0 1-.992.09L10 21V9a.5.5 0 0 1 .5-.5zm3 0a.5.5 0 0 1 .492.41L14 9v12a.5.5 0 0 1-.992.09L13 21V9a.5.5 0 0 1 .5-.5zm3 0a.5.5 0 0 1 .492.41L17 9v12a.5.5 0 0 1-.992.09L16 21V9a.5.5 0 0 1 .5-.5z",
    fillRule: "evenodd"
  })]
});