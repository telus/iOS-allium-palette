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
    d: "M9.63 10.364a1.795 1.795 0 0 0-.252-.693 2.26 2.26 0 0 0-1.155-.924 2.285 2.285 0 0 0-.777-.133c-.495 0-.915.096-1.26.287a2.379 2.379 0 0 0-.84.77 3.374 3.374 0 0 0-.469 1.099 5.47 5.47 0 0 0-.147 1.274c0 .42.049.828.147 1.225.098.397.254.754.469 1.071.215.317.495.572.84.763.345.191.765.287 1.26.287.672 0 1.197-.205 1.575-.616.378-.41.609-.952.693-1.624h2.128a5.08 5.08 0 0 1-.434 1.694 4.057 4.057 0 0 1-.924 1.288c-.383.355-.83.625-1.344.812a4.924 4.924 0 0 1-1.694.28c-.765 0-1.454-.133-2.065-.399a4.425 4.425 0 0 1-1.547-1.099 4.865 4.865 0 0 1-.966-1.645 6.037 6.037 0 0 1-.336-2.037c0-.747.112-1.44.336-2.079.224-.64.546-1.197.966-1.673.42-.476.936-.85 1.547-1.12.611-.27 1.3-.406 2.065-.406.55 0 1.071.08 1.561.238.49.159.929.39 1.316.693.387.303.707.679.959 1.127.252.448.41.961.476 1.54H9.63zm10.374 0a1.794 1.794 0 0 0-.252-.693 2.26 2.26 0 0 0-1.155-.924 2.285 2.285 0 0 0-.777-.133c-.495 0-.915.096-1.26.287a2.379 2.379 0 0 0-.84.77 3.373 3.373 0 0 0-.469 1.099 5.47 5.47 0 0 0-.147 1.274c0 .42.049.828.147 1.225.098.397.254.754.469 1.071.215.317.495.572.84.763.345.191.765.287 1.26.287.672 0 1.197-.205 1.575-.616.378-.41.609-.952.693-1.624h2.128c-.056.625-.2 1.19-.434 1.694a4.06 4.06 0 0 1-.924 1.288c-.383.355-.83.625-1.344.812a4.924 4.924 0 0 1-1.694.28c-.765 0-1.454-.133-2.065-.399a4.425 4.425 0 0 1-1.547-1.099 4.865 4.865 0 0 1-.966-1.645 6.037 6.037 0 0 1-.336-2.037c0-.747.112-1.44.336-2.079.224-.64.546-1.197.966-1.673.42-.476.936-.85 1.547-1.12.611-.27 1.3-.406 2.065-.406.55 0 1.071.08 1.561.238.49.159.929.39 1.316.693.387.303.707.679.959 1.127.252.448.41.961.476 1.54h-2.128z"
  })]
});