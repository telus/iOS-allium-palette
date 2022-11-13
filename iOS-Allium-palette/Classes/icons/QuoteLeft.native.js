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
    d: "M11.066 13.653c.6 2.604-.867 5.432-3.314 6.133-2.538.727-7.748-.084-7.752-7.384 0-4.183 1.953-6.73 4.113-8.245a.927.927 0 0 1 1.31.29.911.911 0 0 1-.106 1.082C4.454 6.54 3.905 7.887 3.905 9.673v.233c.016.594.536.981.995.744.219-.114.447-.21.681-.285 2.43-.785 4.885.685 5.485 3.288Zm12.8 0c.6 2.604-.867 5.432-3.314 6.133-2.54.727-7.748-.084-7.752-7.384 0-4.183 1.953-6.73 4.113-8.245a.927.927 0 0 1 1.31.29.911.911 0 0 1-.106 1.082c-.863 1.011-1.412 2.358-1.412 4.144v.233c.016.594.537.981.995.744a4.4 4.4 0 0 1 .681-.285c2.43-.785 4.885.685 5.485 3.288Z",
    fill: "#B2B9BF"
  })]
});