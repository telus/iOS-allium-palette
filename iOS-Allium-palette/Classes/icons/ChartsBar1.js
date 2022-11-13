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
    d: "M1.437 22.961h3.71V12.124h-3.71v10.837zm4.23-11.876c.306 0 .52.213.52.519V23.48c0 .306-.215.52-.52.52H.917a.497.497 0 0 1-.52-.52V11.604c0-.306.213-.519.52-.519h4.75zm4.478 11.876h3.71V1.039h-3.71v21.922zM14.377 0c.305 0 .518.213.518.52v22.96c0 .306-.213.52-.518.52H9.623a.497.497 0 0 1-.519-.52V.52c0-.307.214-.52.52-.52h4.752zm4.476 22.961h3.712V5.79h-3.712v17.171zM23.085 4.75c.306 0 .518.214.518.521V23.48c0 .306-.212.52-.518.52h-4.75a.498.498 0 0 1-.52-.52V5.271c0-.307.213-.521.52-.521h4.75z"
  })]
});