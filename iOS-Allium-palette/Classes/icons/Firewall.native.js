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
  viewBox: "0 0 22 24",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    d: "M20.773 3.937v10.596c0 3.476-5.766 7.177-9.773 8.422-4.008-1.245-9.774-4.946-9.774-8.422V3.937L11 1.044l9.773 2.893zm.634-.923c.212.104.405.298.405.514v11.005c0 4.435-6.968 8.351-10.698 9.462l-.017.005-.212-.005C7.155 22.884.188 18.968.188 14.533V3.528c0-.141.052-.397.4-.513L10.92 0l.194.005 10.293 3.009zM5.782 11.279a.504.504 0 0 0-.729 0 .504.504 0 0 0 0 .729l3.958 3.96c.116.114.311.114.405.114.104 0 .246 0 .292-.11a.144.144 0 0 0 .011-.063l7.068-7.068c.1-.1.156-.23.156-.365a.514.514 0 0 0-.156-.364.505.505 0 0 0-.729 0l-6.722 6.722-3.554-3.555z"
  })]
});