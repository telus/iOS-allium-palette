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
    d: "M19.5 10c1.38 0 2.5 1.122 2.5 2.5v7c0 1.378-1.12 2.5-2.5 2.5H13v1h3.5a.5.5 0 0 1 0 1h-8a.5.5 0 0 1 0-1H12v-1H5.5A2.503 2.503 0 0 1 3 19.5v-7C3 11.122 4.121 10 5.5 10h5a.5.5 0 0 1 0 1h-5c-.827 0-1.5.673-1.5 1.5V18h17v-5.5c0-.827-.673-1.5-1.5-1.5h-5a.5.5 0 0 1 0-1h5zm0 11c.827 0 1.5-.673 1.5-1.5V19H4v.5c0 .827.673 1.5 1.5 1.5h14zm-7-5a.5.5 0 0 1-.5-.5V6.707l-1.146 1.146a.5.5 0 0 1-.707-.707l2-2h.002a.492.492 0 0 1 .223-.12c.023-.007.044-.01.067-.014a.49.49 0 0 1 .25.026h.003c.006.003.008.008.014.011a.504.504 0 0 1 .147.098l2.001 2a.502.502 0 0 1 0 .707.502.502 0 0 1-.708 0L13 6.708V15.5a.5.5 0 0 1-.5.5zm6.346-9.831C21.758 6.383 24 8.818 24 11.779c0 .465-.068.938-.216 1.488a.499.499 0 0 1-.615.358.513.513 0 0 1-.349-.629c.123-.46.18-.846.18-1.217 0-2.541-2.018-4.609-4.5-4.609-.258-.004-.538-.176-.573-.432-.453-3.257-3.216-5.714-6.427-5.714-3.584 0-6.5 2.987-6.5 6.658 0 .289.024.594.076.96a.522.522 0 0 1-.12.412.563.563 0 0 1-.383.173.946.946 0 0 1-.107-.011C2.57 9.218 1 10.827 1 12.803c0 .864.303 1.676.876 2.347a.52.52 0 0 1-.047.723.491.491 0 0 1-.705-.048A4.662 4.662 0 0 1 0 12.803c0-2.376 1.765-4.338 4.022-4.583A6.723 6.723 0 0 1 4 7.682C4 3.446 7.365 0 11.5 0c3.565 0 6.652 2.623 7.346 6.169z"
  })]
});