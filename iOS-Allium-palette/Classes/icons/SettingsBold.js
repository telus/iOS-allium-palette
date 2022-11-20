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
    d: "M9.929 1h4.145c.678 0 1.26.458 1.401 1.086l.022.127.32 2.17c.265.126.527.269.783.426l.253.161 2.108-.824c.646-.232 1.354-.007 1.718.515l.069.108 2.06 3.479a1.393 1.393 0 0 1-.245 1.713l-.104.09-1.79 1.36a6.798 6.798 0 0 1 .014.989l-.013.188 1.784 1.36c.516.4.684 1.079.428 1.663l-.062.124-2.084 3.514c-.311.559-1.002.827-1.64.652l-.126-.041-2.12-.83c-.258.17-.514.321-.774.457l-.26.13-.321 2.188c-.081.635-.624 1.13-1.287 1.189l-.135.006H9.928c-.679 0-1.26-.458-1.4-1.084l-.023-.127-.32-2.171a8.527 8.527 0 0 1-.784-.426l-.253-.162-2.11.825c-.658.232-1.351.013-1.716-.516l-.068-.11-2.061-3.476c-.326-.583-.218-1.278.245-1.712l.105-.09 1.79-1.364a6.502 6.502 0 0 1-.014-.97l.014-.205-1.784-1.36a1.383 1.383 0 0 1-.413-1.698l.062-.115 2.067-3.486c.313-.56 1.003-.832 1.64-.653l.127.042 2.12.83c.258-.17.514-.322.774-.458l.26-.13.322-2.19c.08-.634.622-1.129 1.287-1.188L9.929 1h4.145H9.93zm.4 1.803-.39 2.334a.91.91 0 0 1-.558.695 6.98 6.98 0 0 0-1.551.878.94.94 0 0 1-.784.152l-.114-.037-2.203-.863-1.733 2.85 1.883 1.495c.247.19.38.505.34.817a7.023 7.023 0 0 0-.067.876c0 .253.022.533.066.88a.884.884 0 0 1-.257.741l-.09.078-1.904 1.451 1.696 2.86 2.277-.837a.98.98 0 0 1 .898.125 6.763 6.763 0 0 0 1.54.87c.265.106.465.33.54.6l.023.102.337 2.29 3.394.037.39-2.332a.898.898 0 0 1 .564-.697 7.088 7.088 0 0 0 1.546-.877.942.942 0 0 1 .783-.151l.115.036 2.203.863 1.758-2.892-1.901-1.449a.889.889 0 0 1-.347-.822l.037-.321c.017-.172.029-.359.029-.555 0-.327-.033-.628-.066-.878a.891.891 0 0 1 .257-.742l.089-.078 1.906-1.451-1.696-2.86-2.278.838a.932.932 0 0 1-.897-.125 6.754 6.754 0 0 0-1.54-.87.916.916 0 0 1-.542-.602l-.022-.102-.335-2.288-3.396-.039zM12 9.116a2.887 2.887 0 0 1 2.884 2.883A2.887 2.887 0 0 1 12 14.883 2.886 2.886 0 0 1 9.117 12 2.886 2.886 0 0 1 12 9.116zm4.583 2.883A4.588 4.588 0 0 0 12 7.417a4.588 4.588 0 0 0-4.583 4.582A4.588 4.588 0 0 0 12 16.582 4.588 4.588 0 0 0 16.583 12z",
    fillRule: "evenodd"
  })]
});