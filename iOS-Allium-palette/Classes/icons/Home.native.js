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
    d: "M8.957 19.002h6.086v-6.087H8.957v6.087zm6.605-7.126c.306 0 .52.214.52.52v7.125c0 .307-.214.52-.52.52H8.438a.497.497 0 0 1-.52-.52v-7.125c0-.306.213-.52.52-.52h7.126zm4.751-.791h.124v.079h1.794l-2.358-2.359v-.051c0-.02-.022-.082-.034-.119-.023-.071-.046-.138-.046-.198V1.039h-2.919v3.36c0 .234-.138.417-.378.506-.153.108-.438.006-.546-.101L12.465 1.24a.516.516 0 0 0-.388-.199.731.731 0 0 0-.544.2l-9.767 9.844h1.92c.306 0 .52.213.52.519v11.357h15.587V11.604c0-.306.214-.519.52-.519zm3.594.147c.093.185.093.369.093.53l-.014.055a.56.56 0 0 1-.506.307h-2.647v11.357a.497.497 0 0 1-.52.519H3.686a.497.497 0 0 1-.519-.519V12.124H.519a.56.56 0 0 1-.506-.307L0 11.762c0-.161 0-.345.092-.53l.023-.032L10.724.512a1.75 1.75 0 0 1 2.472-.001l2.638 2.639V.52c0-.307.214-.52.521-.52h3.958c.306 0 .52.213.52.52v7.707l3.074 3.005z"
  })]
});