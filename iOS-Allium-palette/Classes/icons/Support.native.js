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
    d: "M12 17.722a1.055 1.055 0 1 1 0 2.108 1.055 1.055 0 0 1 0-2.108zm.001-12.51a3.664 3.664 0 0 1 3.66 3.66v.79a3.64 3.64 0 0 1-1.073 2.59l-1.295 1.295a2.57 2.57 0 0 0-.76 1.833v.79a.534.534 0 0 1-1.066 0v-.79c0-.979.381-1.897 1.072-2.588l1.295-1.295a2.579 2.579 0 0 0 .761-1.835v-.79a2.597 2.597 0 0 0-2.594-2.594 2.597 2.597 0 0 0-2.594 2.594v1.043a.533.533 0 0 1-1.067 0V8.872a3.665 3.665 0 0 1 3.661-3.66zM12 22.934c6.029 0 10.934-4.904 10.934-10.934 0-6.028-4.905-10.933-10.934-10.933C5.972 1.067 1.066 5.972 1.066 12c0 6.03 4.906 10.934 10.934 10.934zM12 0c6.616 0 12 5.384 12 12 0 6.617-5.384 12-12 12-6.617 0-12-5.383-12-12C0 5.384 5.383 0 12 0z"
  })]
});