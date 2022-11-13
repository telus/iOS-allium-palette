"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  style: {
    enableBackground: 'new 0 0 24 24'
  },
  xmlSpace: "preserve",
  height: size,
  width: size,
  fill: color,
  role: title ? 'img' : undefined,
  "aria-hidden": !title,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)("style", {
    children: '.prefix__st0{display:none}.prefix__st2,.prefix__st3{display:inline}.prefix__st2{fill-rule:evenodd;clip-rule:evenodd;fill:#414547}.prefix__st3{fill:none;stroke:#2c2e30}.prefix__st4{fill:#fff}.prefix__st4,.prefix__st5{display:inline}.prefix__st6{stroke:#414547}.prefix__st6,.prefix__st7,.prefix__st9{fill:none;stroke-linecap:round}.prefix__st7{display:inline;stroke:#414547}.prefix__st9{stroke:#2c2e30}'
  }), /*#__PURE__*/(0, _jsxRuntime.jsxs)("g", {
    id: "prefix__Modal_stroke",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      className: "prefix__st9",
      d: "M7.7 6.9H4.8c-.7 0-1.2.6-1.2 1.2v11.1c0 .7.6 1.2 1.2 1.2h11.1c.7 0 1.3-.6 1.3-1.2v-2.9M10.8 6.9h5.1c.7 0 1.3.6 1.3 1.2v5.2"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
      className: "prefix__st9",
      d: "M20.5 12.3c0 .7-.6 1.2-1.2 1.2h-7.6c-.7 0-1.2-.6-1.2-1.2V4.8c0-.7.6-1.2 1.2-1.2h7.6c.7 0 1.2.6 1.2 1.2v7.5z"
    })]
  })]
});