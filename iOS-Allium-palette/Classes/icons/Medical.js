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
    d: "M21.914 3.965c1.15 0 2.086.936 2.086 2.087v15.069c0 1.15-.936 2.086-2.086 2.086H2.086A2.089 2.089 0 0 1 0 21.121V6.052c0-1.151.936-2.087 2.086-2.087h5.052V2.879c0-1.15.936-2.086 2.086-2.086h5.551c1.151 0 2.087.936 2.087 2.086v1.086h5.052zM23 21.121V6.052c0-.599-.487-1.087-1.086-1.087H2.086C1.487 4.965 1 5.453 1 6.052v15.069c0 .599.487 1.086 1.086 1.086h19.828c.599 0 1.086-.487 1.086-1.086zM8.138 2.879v1.086h7.724V2.879c0-.599-.487-1.086-1.087-1.086H9.224c-.599 0-1.086.487-1.086 1.086zm7.714 14.56a5.411 5.411 0 0 0 1.596-3.854 5.412 5.412 0 0 0-1.596-3.852A5.413 5.413 0 0 0 12 8.137a5.412 5.412 0 0 0-3.851 1.596 5.412 5.412 0 0 0-1.596 3.852 5.41 5.41 0 0 0 1.596 3.853A5.412 5.412 0 0 0 12 19.034a5.413 5.413 0 0 0 3.853-1.596zM12 7.136c1.723 0 3.342.671 4.56 1.89a6.405 6.405 0 0 1 1.89 4.558 6.406 6.406 0 0 1-1.89 4.56 6.406 6.406 0 0 1-4.56 1.89 6.405 6.405 0 0 1-4.559-1.89 6.406 6.406 0 0 1-1.889-4.56c0-1.722.671-3.34 1.89-4.559A6.405 6.405 0 0 1 12 7.136zm2.776 5.949a.5.5 0 0 1 0 1H12.5v2.276a.5.5 0 1 1-1 0v-2.276H9.224a.5.5 0 1 1 0-1H11.5V10.81a.499.499 0 1 1 1 0v2.275h2.275z"
  })]
});