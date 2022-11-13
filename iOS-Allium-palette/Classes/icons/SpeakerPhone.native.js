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
  viewBox: "0 0 24 22",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    d: "M7.673 14.74c.131 0 .247.01.376.01l.432 3.02a.592.592 0 0 0 .104.262l1.84 2.6H7.393a.391.391 0 0 1-.385-.333l-.794-5.558h1.459zm-3.54-8.652h2.946v7.465H4.133a2.949 2.949 0 0 1-2.945-2.946V9.034a2.948 2.948 0 0 1 2.945-2.946zm4.546 7.487c-.038-.008-.075-.021-.116-.021h-.296v-7.48c9.758-.135 13.295-3.484 14.22-4.646.197.098.324.3.324.525v15.732a.584.584 0 0 1-.324.524c-.912-1.145-4.364-4.413-13.808-4.636zM22.226.18a.602.602 0 0 0-.511.29C21.687.514 18.871 4.9 7.673 4.9h-3.54A4.138 4.138 0 0 0 0 9.034v1.575a4.138 4.138 0 0 0 4.133 4.133h.881l.818 5.726a1.586 1.586 0 0 0 1.561 1.354h3.249c.226 0 .444-.07.631-.203a1.09 1.09 0 0 0 .252-1.514L9.636 17.46l-.382-2.68c9.837.393 12.435 4.348 12.46 4.387.105.18.302.294.512.294.978 0 1.774-.796 1.774-1.774V1.954C24 .976 23.204.18 22.226.18z"
  })]
});