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
    d: "M23.2 11.2h-5.468a7.65 7.65 0 0 0 .269-2c0-3.205-2.777-6.52-2.895-6.659a.401.401 0 0 0-.704.226l-.237 2.84c-.614-1.579-1.722-3.825-3.49-5.498a.4.4 0 0 0-.662.396c.42 1.535-.088 4.007-.564 5.748-.134-.984-.384-1.929-.848-2.2A.402.402 0 0 0 8 4.4c0 .776-.374 1.516-.808 2.372C6.633 7.873 6 9.12 6 10.8c0 .14.017.266.026.4H.8a.4.4 0 0 0-.4.4v12c0 .22.18.4.4.4h22.4a.4.4 0 0 0 .4-.4v-12a.4.4 0 0 0-.4-.4zm-3.6.8v3.2h-4.54c.91-.677 1.848-1.765 2.413-3.2H19.6zM8.4 19.2h7.2V16H8.4v3.2zM7.905 7.132c.241-.475.475-.936.643-1.406.135.7.234 1.684.252 2.68a.4.4 0 0 0 .776.131c.07-.19 1.479-4.083 1.386-6.95 2.168 2.616 3.04 6.07 3.05 6.108.046.19.208.316.42.304a.4.4 0 0 0 .366-.366l.314-3.754C15.91 5.022 17.2 7.18 17.2 9.2c0 3.807-3.036 6-4 6h-2.725c-.408-.113-3.675-1.117-3.675-4.4 0-1.487.561-2.596 1.105-3.668zM4.4 12h1.743c.371 1.59 1.438 2.6 2.406 3.2H4.4V12zm-3.2 3.2h2.4V12H1.2v3.2zm0 4h6.4V16H1.2v3.2zm0 4h2.4V20H1.2v3.2zm3.2 0h7.2V20H4.4v3.2zm8 0h7.2V20h-7.2v3.2zm8 0h2.4V20h-2.4v3.2zm-4-4h6.4V16h-6.4v3.2zm4-4h2.4V12h-2.4v3.2z"
  })]
});