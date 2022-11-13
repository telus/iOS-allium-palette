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
    d: "M10.62 5.612a1.86 1.86 0 0 0-.47 1.43L11 15.55a.5.5 0 0 0 .499.45h1a.498.498 0 0 0 .496-.45l.851-8.508a1.86 1.86 0 0 0-.47-1.43c-.704-.777-2.052-.777-2.755 0zM12.047 15h-.095l-.803-8.058a.842.842 0 0 1 .217-.66.878.878 0 0 1 1.27 0 .849.849 0 0 1 .217.66L12.046 15zm11.538 1.86L15.071 1.825A3.454 3.454 0 0 0 11.998.001c-1.3 0-2.45.682-3.09 1.862L.422 16.843a3.47 3.47 0 0 0 .073 3.443 3.471 3.471 0 0 0 3.01 1.713h16.989a3.47 3.47 0 0 0 3.008-1.713 3.448 3.448 0 0 0 .082-3.426zm-.942 2.916A2.478 2.478 0 0 1 20.492 21H3.504a2.48 2.48 0 0 1-2.15-1.224 2.479 2.479 0 0 1-.025-2.51L9.804 2.303A2.467 2.467 0 0 1 11.998 1c.93 0 1.75.487 2.176 1.266l8.513 15.035c.427.783.41 1.707-.045 2.474zm-10.644-2.777c-.826 0-1.5.673-1.5 1.5s.674 1.5 1.5 1.5c.827 0 1.5-.673 1.5-1.5s-.673-1.5-1.5-1.5zm0 2A.5.5 0 1 1 12 17.998a.5.5 0 0 1-.002 1.001z"
  })]
});