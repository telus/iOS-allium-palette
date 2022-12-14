"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  width: size,
  height: size,
  fill: color,
  xmlns: "http://www.w3.org/2000/svg",
  role: title ? 'img' : undefined,
  "aria-hidden": !title,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M20.484 3.515A11.915 11.915 0 0 0 12 0a11.92 11.92 0 0 0-8.485 3.515A11.92 11.92 0 0 0 0 12c0 3.205 1.248 6.219 3.515 8.486A11.92 11.92 0 0 0 12 24c3.206 0 6.219-1.248 8.486-3.514A11.924 11.924 0 0 0 24 12c0-3.206-1.248-6.22-3.516-8.485ZM4.25 4.25A10.889 10.889 0 0 1 12 1.039c2.927 0 5.679 1.14 7.75 3.21A10.89 10.89 0 0 1 22.961 12c0 2.929-1.141 5.68-3.21 7.75A10.893 10.893 0 0 1 12 22.962c-2.927 0-5.68-1.141-7.75-3.21A10.896 10.896 0 0 1 1.039 12c0-2.928 1.141-5.68 3.211-7.75ZM12 5.465a.5.5 0 0 1 .5.5v.291c.712.083 1.39.313 1.933.673.695.46 1.212 1.165 1.212 2.056a.5.5 0 0 1-1 0c0-.463-.261-.89-.764-1.222-.371-.246-.852-.422-1.381-.498v3.907a4.142 4.142 0 0 1 1.974.879c.676.554 1.171 1.344 1.171 2.214 0 .892-.517 1.596-1.212 2.056-.544.36-1.22.59-1.933.673v.285a.5.5 0 0 1-1 0v-.268c-.77-.062-1.482-.302-2.037-.7-.66-.474-1.104-1.18-1.104-2.046a.5.5 0 0 1 1 0c0 .49.242.914.687 1.233.369.265.872.45 1.454.51v-3.902c-1.683-.165-3.132-1.335-3.132-2.932s1.45-2.767 3.132-2.932v-.277a.5.5 0 0 1 .5-.5ZM9.368 9.174c0-.891.848-1.77 2.132-1.927V11.1c-1.284-.156-2.132-1.036-2.132-1.927Zm3.132 6.812v-3.799c.5.104.968.333 1.34.638.522.427.805.957.805 1.44 0 .463-.261.89-.764 1.223-.371.245-.852.421-1.381.498Z",
    fill: "#414547"
  })]
});