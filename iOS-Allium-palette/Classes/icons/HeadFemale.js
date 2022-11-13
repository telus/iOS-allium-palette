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
    d: "M19.782 19.782a11.1 11.1 0 0 1-.948.837l-2.941-1.28a.871.871 0 0 1-.296-.27 13.761 13.761 0 0 0 3.757-1.142.5.5 0 0 0 .093-.847c-.018-.014-1.71-1.41-1.71-6.112 0-5.004-1.566-6.054-2.88-6.054h-.248C13.968 4.232 12.974 3.87 12 3.96c-1.533 0-5.738 1.661-5.738 7.007 0 4.702-1.692 6.098-1.703 6.107a.498.498 0 0 0 .087.852c1.203.566 2.469.942 3.766 1.145a.745.745 0 0 1-.262.246l-2.984 1.301c-.327-.26-.645-.535-.949-.837-4.29-4.291-4.29-11.273 0-15.564A10.975 10.975 0 0 1 12 1c2.818 0 5.636 1.073 7.782 3.218 4.29 4.29 4.29 11.273 0 15.564M6.118 21.294l2.475-1.08a1.84 1.84 0 0 0 .961-1.47c.001-.01.006-.017.007-.025.001-.006-.002-.012-.002-.018.001-.01.005-.026.005-.036 0-.025-.011-.046-.014-.07-.005-.034-.008-.067-.02-.098a.465.465 0 0 0-.043-.083c-.017-.029-.032-.056-.054-.08-.021-.024-.046-.04-.071-.06-.026-.02-.05-.04-.08-.055-.03-.014-.061-.02-.093-.029-.024-.007-.044-.019-.07-.022a12.794 12.794 0 0 1-3.427-.872c.625-.846 1.57-2.722 1.57-6.328 0-4.963 3.959-6.006 4.783-6.008.77-.073 1.526.23 1.94.761a.5.5 0 0 0 .395.193h.476c1.636 0 1.88 3.167 1.88 5.054 0 3.607.946 5.482 1.57 6.328-1.1.449-2.25.742-3.425.872-.026.003-.045.015-.07.022-.032.008-.064.015-.094.03-.029.014-.052.034-.078.052-.026.02-.05.038-.073.063-.02.023-.036.05-.053.077-.016.028-.033.054-.044.085-.01.031-.014.064-.019.097-.004.025-.015.045-.015.071 0 .01.004.025.005.035 0 .007-.003.013-.002.02.001.008.006.015.008.024.023.392.24 1.07 1.004 1.49l2.43 1.06a11.034 11.034 0 0 1-11.762 0M20.49 3.51c-4.681-4.68-12.297-4.68-16.979 0-4.68 4.681-4.68 12.298 0 16.98A11.968 11.968 0 0 0 12 24c3.075 0 6.148-1.17 8.49-3.51 4.68-4.682 4.68-12.299 0-16.98"
  })]
});