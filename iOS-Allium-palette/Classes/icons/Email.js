"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  viewBox: "0 0 24 18",
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
    d: "M2.103 1.206h19.793c.587 0 1.065.478 1.065 1.064v1.284L12.778 9.46a1.561 1.561 0 0 1-1.555.001L1.039 3.554V2.27c0-.586.478-1.064 1.064-1.064m11.195 9.154 9.663-5.604v10.973c0 .587-.478 1.065-1.065 1.065H2.103a1.066 1.066 0 0 1-1.064-1.065V4.756l9.664 5.605a2.645 2.645 0 0 0 2.595-.001M21.896.167H2.103C.943.167 0 1.11 0 2.27v13.459c0 1.161.943 2.104 2.103 2.104h19.793A2.105 2.105 0 0 0 24 15.729V2.27c0-1.16-.943-2.103-2.104-2.103"
  })]
});