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
    d: "M9 2.75V1.416a11.029 11.029 0 0 0-5.596 3.728l1.967.328L9 2.75zm1-.04 3.11 1.777 4.39-.439V2.5l.001-.023A10.93 10.93 0 0 0 12 1c-.683 0-1.351.063-2 .182V2.71zM5.149 6.448l-2.396-.399A10.94 10.94 0 0 0 1.001 12c0 .502.034.996.099 1.481l3.1-.443 2.239-3.582L5.15 6.448zM2.031 5.327a.499.499 0 0 1 .142-.206C4.346 2.027 7.941 0 12.001 0c6.617 0 12 5.383 12 12s-5.383 12-12 12-12-5.383-12-12c0-2.468.749-4.764 2.031-6.673zm5.267 4.64L5.08 13.515l2.199 3.958 4.85-.441 1.314-3.941-2.669-3.559-3.476.434zm6.026-4.496-1.738 3.477 2.646 3.528 4.41-.441 1.304-3.477-2.205-3.528-4.416.442zm6.185 7.097L19.952 17h1.845a10.937 10.937 0 0 0 1.204-5 11 11 0 0 0-.298-2.55l-1.883-.377-1.31 3.494zM19.645 18l-3.69 2.307-.348 2.086A11.057 11.057 0 0 0 21.216 18h-1.571zm-4.686 2.2-2.62-2.183-5.017.456-1.359 2.719A10.937 10.937 0 0 0 12 23.001c.875 0 1.726-.103 2.542-.296l.417-2.504zm7.424-11.833A11.06 11.06 0 0 0 18.5 3.131v1.225l2.31 3.696 1.573.315zM5.143 20.596l1.292-2.584-2.205-3.969-2.952.422a11.012 11.012 0 0 0 3.865 6.13zm.971-14.432 1.197 2.793 3.361-.42 1.669-3.338-2.804-1.602-3.423 2.567zm6.968 11.17 2.46 2.05 3.43-2.144-.419-4.193-4.18.418-1.291 3.869z"
  })]
});