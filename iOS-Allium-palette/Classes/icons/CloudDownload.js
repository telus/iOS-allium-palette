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
    d: "M9.223 20.393a.533.533 0 0 1 .733-.014l1.092 1.048V12.4c0-.306.213-.52.52-.52.304 0 .518.214.518.52v9.027l1.091-1.048a.533.533 0 0 1 .733.014.52.52 0 0 1-.014.734l-1.97 1.892c-.023.022-.049.036-.066.046l-.027.016c-.018.013-.042.031-.073.043a.321.321 0 0 1-.08.02l-.06-.115.027.122a.436.436 0 0 1-.16 0l-.015-.13-.019.123a.35.35 0 0 1-.08-.02.343.343 0 0 1-.073-.043l-.027-.017a.287.287 0 0 1-.067-.046l-1.969-1.892a.512.512 0 0 1-.014-.733zM18.84 6.76c2.893.209 5.145 2.563 5.145 5.399-.08 3.025-2.575 5.484-5.563 5.484H13.93a.497.497 0 0 1-.518-.52c0-.305.212-.518.518-.518h4.492a4.45 4.45 0 0 0 4.445-4.446 4.45 4.45 0 0 0-4.445-4.446c-.282 0-.598-.188-.598-.44-.46-3.066-3.186-5.392-6.337-5.392-3.58 0-6.494 2.879-6.494 6.416 0 .313 0 .54.076.92.003.119.003.314-.112.429-.117.116-.31.116-.404.116h-.079a3.426 3.426 0 0 0-3.421 3.42 3.426 3.426 0 0 0 3.421 3.423h4.729c.305 0 .519.213.519.518 0 .306-.214.52-.52.52H4.475c-2.417 0-4.46-2.042-4.46-4.46 0-2.3 1.684-4.152 4.02-4.445v-.52A7.081 7.081 0 0 1 6.08 3.086C7.498 1.639 9.42.842 11.489.842c3.51 0 6.588 2.483 7.352 5.917z"
  })]
});