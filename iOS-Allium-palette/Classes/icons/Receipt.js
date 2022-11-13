"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  viewBox: "0 0 24 22",
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
    d: "M16.203 13.672a.5.5 0 0 1 0 1h-6.186a.5.5 0 0 1 0-1h6.186zm0-3.172a.5.5 0 0 1 0 1h-6.186a.5.5 0 0 1 0-1h6.186zm0 6.344a.5.5 0 0 1 0 1h-6.186a.5.5 0 0 1 0-1h6.186zm-5.686-9.517h9.31V4.362h-9.31v2.965zm9.81-3.965c.277 0 .5.223.5.5v3.965a.5.5 0 0 1-.5.5h-10.31a.5.5 0 0 1-.5-.5V3.862a.5.5 0 0 1 .5-.5h10.31zm0 7.138a.5.5 0 0 1 0 1H17.87a.5.5 0 0 1 0-1h2.458zm0 3.172a.5.5 0 0 1 0 1H17.87a.5.5 0 0 1 0-1h2.458zm0 3.172a.5.5 0 0 1 0 1H17.87a.5.5 0 0 1 0-1h2.458zM23 18.297V2.67c0-.83-.651-1.482-1.482-1.482H8.828c-.832 0-1.483.651-1.483 1.482v15.466a3.66 3.66 0 0 1-1.13 2.674h14.271A2.517 2.517 0 0 0 23 18.297zM3.672 20.81c1.673 0 2.673-1.36 2.673-2.674V11.5H1v6.717c0 1.454 1.174 2.595 2.672 2.595zM21.518.189A2.456 2.456 0 0 1 24 2.671v15.626a3.518 3.518 0 0 1-3.514 3.514H3.672C1.613 21.81 0 20.233 0 18.216V11a.5.5 0 0 1 .5-.5h5.845V2.671A2.456 2.456 0 0 1 8.828.19h12.69z"
  })]
});