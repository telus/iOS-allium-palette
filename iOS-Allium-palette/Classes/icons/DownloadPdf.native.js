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
    d: "M17 11c3.308 0 6 2.691 6 6 0 3.308-2.692 6-6 6s-6-2.692-6-6c0-3.309 2.692-6 6-6zm0 1c-2.757 0-5 2.242-5 5 0 2.757 2.243 5 5 5s5-2.243 5-5c0-2.758-2.243-5-5-5zM8.534.004 17.146 0c.435 0 .795.329.847.753L18 .86v8.67a.49.49 0 0 1-.487.491.488.488 0 0 1-.478-.403l-.008-.088V.982L8.869.986V5.07a.86.86 0 0 1-.746.854l-.106.007H3.939l.033 13.088h6.42a.49.49 0 0 1 .486.49.49.49 0 0 1-.4.484l-.087.008H3.853a.857.857 0 0 1-.846-.753L3 19.14l.001-13.55c0-.188.064-.374.177-.523l.073-.085L7.931.256a.848.848 0 0 1 .491-.244l.112-.008zM17.001 14c.25 0 .457.157.5.365l.008.08v4.036l1.624-1.421a.561.561 0 0 1 .718 0 .405.405 0 0 1 .06.567l-.06.062-2.49 2.18a.531.531 0 0 1-.294.127L17 20l-.067-.004a.59.59 0 0 1-.128-.03c-.044-.016-.08-.043-.117-.07l-.048-.026-2.49-2.181a.406.406 0 0 1 0-.63.564.564 0 0 1 .638-.056l.08.057 1.625 1.422v-4.037c0-.247.226-.445.508-.445zM8 2 5 5h3V2z",
    fillRule: "evenodd"
  })]
});