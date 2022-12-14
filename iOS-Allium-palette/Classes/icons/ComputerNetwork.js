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
    d: "M1.014 10a8.45 8.45 0 0 0 1.294 4.038L2.499 14h2.15a15.107 15.107 0 0 1-.643-4H1.013zm0-1h2.993c.042-1.45.263-2.804.628-4H2.5l-.186-.036A8.443 8.443 0 0 0 1.015 9zm2.01-5h1.964c.388-.957.876-1.78 1.44-2.426A8.54 8.54 0 0 0 3.024 4zm9.548-2.426c.564.646 1.053 1.469 1.44 2.426h1.964a8.54 8.54 0 0 0-3.404-2.426zm4.114 3.39L16.5 5h-2.135c.365 1.196.586 2.55.628 4h2.993a8.446 8.446 0 0 0-1.299-4.036zM18.987 9H21.5c1.379 0 2.5 1.122 2.5 2.5v8c0 1.378-1.121 2.5-2.5 2.5H15v1h3.5a.5.5 0 0 1 0 1h-8a.5.5 0 0 1 0-1H14v-1H7.5A2.503 2.503 0 0 1 5 19.5v-1.641A9.445 9.445 0 0 1 0 9.5C0 4.262 4.262 0 9.5 0c5.07 0 9.226 3.993 9.487 9zM5 16.702V15H3.018A8.51 8.51 0 0 0 5 16.702zm1 .832V18h17v-6.5c0-.827-.673-1.5-1.5-1.5h-14c-.827 0-1.5.673-1.5 1.5v6.034zm-.935-6.603c.08-.343.231-.658.436-.931h-.493c.01.314.029.624.057.931zM5.008 9H6.5c.112 0 .216.037.3.1.222-.065.457-.1.7-.1H9V5H5.706c-.4 1.18-.651 2.548-.698 4zM6.1 4h2.899V1.055C7.856 1.306 6.827 2.406 6.1 4zm3.899-2.945V4h2.899c-.728-1.595-1.757-2.694-2.899-2.945zM13.293 5H9.999v4h3.992c-.047-1.452-.298-2.82-.698-4zm9.706 14h-17v.5c0 .827.673 1.5 1.5 1.5h14c.827 0 1.5-.673 1.5-1.5V19z"
  })]
});