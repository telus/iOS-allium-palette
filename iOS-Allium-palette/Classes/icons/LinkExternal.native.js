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
    d: "M4.302 5h5.883a.488.488 0 0 1 .087.969l-.087.007H4.302a.325.325 0 0 0-.319.26l-.007.066v13.396c0 .158.112.289.26.319l.066.007h13.396a.325.325 0 0 0 .319-.26l.007-.066V13.62a.488.488 0 0 1 .968-.088l.008.088v6.078c0 .673-.513 1.228-1.169 1.295l-.133.007H4.302a1.304 1.304 0 0 1-1.295-1.169L3 19.698V6.302c0-.673.513-1.228 1.169-1.295L4.302 5h5.883-5.883zm8.458-2h7.733a.509.509 0 0 1 .468.314l.003.019a.574.574 0 0 1 .031.112l.005.06v7.736a.505.505 0 0 1-1 .091l-.009-.09V4.72L9.861 14.852a.503.503 0 0 1-.772-.643l.06-.07 10.127-10.13H12.76a.504.504 0 0 1-.091-1l.09-.009h7.734-7.733z",
    fillRule: "evenodd"
  })]
});