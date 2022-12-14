"use strict";

var _reactNativeSvg = require("react-native-svg");

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)(_reactNativeSvg.default, { ...props,
  viewBox: "0 0 24 24",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    clipRule: "evenodd",
    d: "M18.5 24h-6c-.3 0-.5-.2-.5-.5 0-1.4 1.1-2.5 2.5-2.5h.8l-3.8-3.8c-.3-.3-.5-.7-.5-1.1 0-.4.2-.8.5-1.1.6-.6 1.6-.6 2.2 0l.9.9c.1-.2.2-.3.3-.5.3-.3.8-.5 1.3-.4.1-.3.2-.6.4-.8.4-.4 1.1-.6 1.6-.4.1-.2.2-.4.4-.6.6-.6 1.6-.6 2.2 0l1.5 1.6c1 1 1.6 2.4 1.6 3.9.1 2.9-2.3 5.3-5.4 5.3zm-5.4-1h5.5c2.5 0 4.5-2 4.5-4.5 0-1.2-.5-2.3-1.3-3.1l-1.5-1.6c-.2-.2-.6-.2-.8 0-.2.2-.2.6 0 .8.1.1.1.2.1.4s0 .3-.1.4c-.2.2-.5.2-.7 0l-.5-.5c-.2-.2-.6-.2-.8 0-.1.1-.2.2-.2.4s.1.3.2.4l.5.5c.1.1.1.2.1.4s0 .3-.1.4c-.2.2-.5.2-.7 0l-.8-.8c-.2-.2-.6-.2-.8 0-.1.1-.2.2-.2.4s.1.3.2.4l1.3 1.2c.1.1.1.2.1.4s0 .3-.1.4c-.2.2-.5.2-.7 0L13 15.7c-.2-.2-.6-.2-.8 0-.1.1-.2.2-.2.4s.1.3.2.4l4.7 4.7c.1.1.2.4.1.5-.1.2-.3.3-.5.3h-2c-.7 0-1.2.4-1.4 1zm-2.6 1h-8C1.1 24 0 22.9 0 21.5v-19C0 1.1 1.1 0 2.5 0h12C15.9 0 17 1.1 17 2.5v10c0 .3-.2.5-.5.5s-.5-.2-.5-.5v-10c0-.8-.7-1.5-1.5-1.5h-12C1.7 1 1 1.7 1 2.5v19c0 .8.7 1.5 1.5 1.5h8c.3 0 .5.2.5.5s-.2.5-.5.5zm1-4H.5c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h11c.3 0 .5.2.5.5s-.2.5-.5.5zm-2 2h-2c-.3 0-.5-.2-.5-.5s.2-.5.5-.5h2c.3 0 .5.2.5.5s-.2.5-.5.5zm-3-12H4c-.85 0-1.5-.65-1.5-1.5V6c0-.85.65-1.5 1.5-1.5h2.5C7.35 4.5 8 5.15 8 6v2.5c0 .85-.65 1.5-1.5 1.5zM4 5.5c-.3 0-.5.2-.5.5v2.5c0 .3.2.5.5.5h2.5c.3 0 .5-.2.5-.5V6c0-.3-.2-.5-.5-.5H4zm9 4.5h-2.5C9.65 10 9 9.35 9 8.5V6c0-.85.65-1.5 1.5-1.5H13c.85 0 1.5.65 1.5 1.5v2.5c0 .85-.65 1.5-1.5 1.5zm-2.5-4.5c-.3 0-.5.2-.5.5v2.5c0 .3.2.5.5.5H13c.3 0 .5-.2.5-.5V6c0-.3-.2-.5-.5-.5h-2.5zm-4 11H4c-.85 0-1.5-.65-1.5-1.5v-2.5c0-.85.65-1.5 1.5-1.5h2.5c.85 0 1.5.65 1.5 1.5V15c0 .85-.65 1.5-1.5 1.5zM4 12c-.3 0-.5.2-.5.5V15c0 .3.2.5.5.5h2.5c.3 0 .5-.2.5-.5v-2.5c0-.3-.2-.5-.5-.5H4zm9.5-1c.55 0 1 .45 1 1v2.6c-.45-.65-1.2-1.1-2-1.1-1.4 0-2.5 1.25-2.5 2.75v.25c-.55 0-1-.45-1-1V12c0-.55.45-1 1-1h3.5zM3 2.5c0 .65-1 .65-1 0s1-.65 1 0z"
  })]
});