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
  viewBox: "0 0 18 24",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    d: "M9.635 16.331v.002c-.322.32-.947.32-1.27-.002A.896.896 0 0 1 9 14.8a.9.9 0 0 1 .635 1.532m-.636-2.554a1.94 1.94 0 0 1 1.37.55c.366.364.567.851.567 1.37 0 .518-.201 1.005-.568 1.37a1.906 1.906 0 0 1-.848.494v2.38a.52.52 0 0 1-1.04 0v-2.38a1.91 1.91 0 0 1-.85-.495 1.916 1.916 0 0 1-.566-1.37c0-.518.2-1.005.567-1.37.349-.349.848-.55 1.368-.55zm7.795 8.119v-9.501c0-.586-.478-1.063-1.064-1.063H2.271c-.587 0-1.065.477-1.065 1.063v9.501c0 .587.478 1.064 1.065 1.064H15.73c.586 0 1.064-.477 1.064-1.064zM15.73 10.292c1.16 0 2.103.943 2.103 2.103v9.501c0 1.16-.943 2.104-2.103 2.104H2.271a2.106 2.106 0 0 1-2.104-2.104v-9.501c0-1.16.943-2.103 2.104-2.103h.272V6.457A6.464 6.464 0 0 1 9 0a6.464 6.464 0 0 1 6.458 6.457c0 .292-.227.52-.519.52a.515.515 0 0 1-.521-.52A5.424 5.424 0 0 0 9 1.039a5.423 5.423 0 0 0-5.418 5.418v3.835H15.73z"
  })]
});