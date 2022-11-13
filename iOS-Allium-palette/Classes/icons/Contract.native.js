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
  viewBox: "0 0 20 24",
  height: size,
  width: size,
  fill: color,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)(_reactNativeSvg.Path, {
    fillRule: "evenodd",
    d: "M15.5 6h-6a.5.5 0 0 0 0 1h6a.5.5 0 0 0 0-1zM20 16.5c0-1.378-1.122-2.5-2.5-2.5a2.503 2.503 0 0 0-2.5 2.5c0 .81.394 1.525.994 1.982l-.984 4.919a.499.499 0 0 0 .714.546l1.776-.888 1.776.888a.492.492 0 0 0 .526-.05.5.5 0 0 0 .187-.496l-.984-4.918A2.49 2.49 0 0 0 20 16.5zm-2.277 5.552a.502.502 0 0 0-.447 0l-1.085.543.733-3.669c.186.045.377.074.576.074.199 0 .389-.029.575-.073l.733 3.668-1.085-.543zM17.5 18c-.827 0-1.5-.673-1.5-1.5s.673-1.5 1.5-1.5 1.5.673 1.5 1.5-.673 1.5-1.5 1.5zm-4 3H1V7h5.5a.5.5 0 0 0 .5-.5V1h10v11.5a.5.5 0 0 0 1 0V.5a.5.5 0 0 0-.5-.5h-11a.508.508 0 0 0-.193.039c-.029.012-.051.034-.077.051-.028.018-.06.032-.084.056l-6 6c-.023.023-.036.054-.054.081-.018.027-.041.05-.053.08A.508.508 0 0 0 0 6.5v15a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 0-1zM6 1.707V6H1.707L6 1.707zM15.5 10h-13a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zm-2 4h-11a.5.5 0 0 0 0 1h11a.5.5 0 0 0 0-1zm-7 5a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1h4z"
  })]
});