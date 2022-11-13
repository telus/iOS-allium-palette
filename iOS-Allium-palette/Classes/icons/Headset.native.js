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
    d: "M21.908 16.245c-.889 2.837-2.098 5.703-2.108 5.73-.025.053-.051.11-.083.16a1.391 1.391 0 0 1-1.907.477l-1.568-.94a1.37 1.37 0 0 1-.583-1.694l1.864-4.09c.217-.531.72-.873 1.282-.873.164 0 .325.03.473.085l2.63 1.146zM6.485 15.91l1.845 4.047c.259.64.018 1.36-.572 1.716l-1.568.94a1.375 1.375 0 0 1-1.223.103 1.37 1.37 0 0 1-.763-.732c-.051-.12-1.245-2.966-2.111-5.738l2.604-1.136c.698-.264 1.5.088 1.788.8zM12 0C5.383 0 0 5.383 0 12c0 3.073 2.985 10.153 3.113 10.454.275.631.78 1.117 1.42 1.369a2.571 2.571 0 0 0 2.268-.189l1.569-.942a2.581 2.581 0 0 0 1.052-3.203L7.576 15.44c-.522-1.29-2.011-1.932-3.328-1.43l-2.495 1.087c-.375-1.35-.565-2.392-.565-3.099 0-5.961 4.85-10.81 10.812-10.81S22.811 6.037 22.811 12c0 .707-.189 1.748-.564 3.098l-2.523-1.1a2.55 2.55 0 0 0-3.291 1.42l-1.865 4.091a2.566 2.566 0 0 0 1.062 3.181l1.569.942a2.582 2.582 0 0 0 3.691-1.184c.057-.137 1.409-3.345 2.301-6.343a.216.216 0 0 0 .013-.04c.528-1.779.796-3.147.796-4.066 0-6.617-5.383-12-12-12z"
  })]
});