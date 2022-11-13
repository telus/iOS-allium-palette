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
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 24 24",
  style: {
    enableBackground: 'new 0 0 24 24'
  },
  xmlSpace: "preserve",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    d: "M7.7 6.9H4.8c-.7 0-1.2.6-1.2 1.2v11.1c0 .7.6 1.2 1.2 1.2h11.1c.7 0 1.3-.6 1.3-1.2v-2.9M10.8 6.9h5.1c.7 0 1.3.6 1.3 1.2v5.2",
    style: {
      fill: 'none',
      stroke: '#2c2e30',
      strokeLinecap: 'round'
    }
  }), /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    d: "M20.5 12.3c0 .7-.6 1.2-1.2 1.2h-7.6c-.7 0-1.2-.6-1.2-1.2V4.8c0-.7.6-1.2 1.2-1.2h7.6c.7 0 1.2.6 1.2 1.2v7.5z",
    style: {
      fill: 'none',
      stroke: '#2c2e30',
      strokeLinecap: 'round'
    }
  })]
});