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
    d: "M13.91 14.645a.533.533 0 0 1-.733.014l-1.092-1.048v9.027c0 .306-.213.52-.52.52a.497.497 0 0 1-.518-.52v-9.027L9.955 14.66a.533.533 0 0 1-.733-.014.519.519 0 0 1 .015-.734l1.97-1.892a.296.296 0 0 1 .066-.046l.027-.017a.32.32 0 0 1 .153-.062l.06.115-.027-.122a.436.436 0 0 1 .16.001l.015.13.019-.124a.306.306 0 0 1 .153.062l.027.018a.26.26 0 0 1 .067.046l1.969 1.892a.512.512 0 0 1 .014.733zm4.93-7.886c2.893.209 5.145 2.563 5.145 5.399-.08 3.025-2.575 5.484-5.563 5.484H13.93a.497.497 0 0 1-.518-.52c0-.305.212-.518.518-.518h4.492a4.45 4.45 0 0 0 4.445-4.446 4.45 4.45 0 0 0-4.445-4.446c-.282 0-.598-.188-.598-.44-.46-3.066-3.186-5.392-6.337-5.392-3.58 0-6.495 2.879-6.495 6.416 0 .313 0 .54.077.92.003.119.003.314-.112.429-.117.116-.311.116-.404.116h-.08a3.425 3.425 0 0 0-3.42 3.42 3.426 3.426 0 0 0 3.42 3.423h4.728c.306 0 .52.213.52.518 0 .306-.213.52-.52.52H4.473c-2.416 0-4.458-2.042-4.458-4.46 0-2.3 1.683-4.152 4.019-4.445v-.52A7.08 7.08 0 0 1 6.08 3.086C7.498 1.639 9.418.842 11.488.842c3.51 0 6.588 2.483 7.352 5.917z"
  })]
});