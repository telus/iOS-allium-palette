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
    d: "M.537 8.05H23.5c.3 0 .499-.2.499-.499 0-.199-.1-.398-.3-.498L12.817.075c-.2-.1-.399-.1-.499 0L.337 7.053c-.3.2-.4.399-.3.598.1.2.3.399.5.399zm11.98-6.879 9.286 5.882H2.333l10.185-5.882zm10.984 18.841H.537c-.3 0-.5.2-.5.499v2.99c0 .3.2.499.5.499H23.5c.3 0 .499-.2.499-.498V20.51c0-.3-.2-.499-.5-.499zm-.5 2.991H1.037V21.01h21.966v1.994zM7.527 10.043c.3 0 .499-.199.499-.498s-.2-.498-.5-.498H2.535c-.3 0-.5.2-.5.498 0 .3.2.499.5.499h.499v7.975h-.5c-.299 0-.499.2-.499.498 0 .3.2.499.5.499h4.992c.3 0 .499-.2.499-.499s-.2-.498-.5-.498h-.498v-7.975h.499zm-3.495 0h1.997v7.976H4.031v-7.975zm10.484 0c.3 0 .499-.199.499-.498s-.2-.498-.5-.498H9.524c-.3 0-.5.2-.5.498 0 .3.2.499.5.499h.499v7.975h-.5c-.299 0-.499.2-.499.498 0 .3.2.499.5.499h4.992c.3 0 .499-.2.499-.499s-.2-.498-.5-.498h-.498v-7.975h.499zm-3.495 0h1.997v7.976H11.02v-7.975zm10.484 0c.3 0 .5-.199.5-.498s-.2-.498-.5-.498h-4.992c-.3 0-.5.2-.5.498 0 .3.2.499.5.499h.499v7.975h-.5c-.299 0-.499.2-.499.498 0 .3.2.499.5.499h4.992c.3 0 .5-.2.5-.499s-.2-.498-.5-.498h-.5v-7.975h.5zm-3.495 0h1.997v7.976H18.01v-7.975z"
  })]
});