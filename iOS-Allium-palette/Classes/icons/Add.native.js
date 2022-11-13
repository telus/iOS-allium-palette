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
    d: "M12 2a.92.92 0 0 0-.74.348 1.29 1.29 0 0 0-.257.753l-.243 7.93H3.106c-.253 0-.529.041-.747.196C2.123 11.394 2 11.66 2 12s.122.605.354.776c.216.158.49.208.744.219h.003l7.669.236.236 7.668v.003c.01.273.087.544.253.752A.919.919 0 0 0 12 22a.903.903 0 0 0 .736-.35 1.23 1.23 0 0 0 .233-.756V13.24l7.927-.243h.003c.253-.011.528-.062.744-.22.233-.171.357-.435.357-.777 0-.34-.122-.605-.358-.773-.218-.155-.494-.197-.748-.197H12.97V3.106c0-.274-.07-.546-.232-.757A.903.903 0 0 0 12 2z"
  })]
});