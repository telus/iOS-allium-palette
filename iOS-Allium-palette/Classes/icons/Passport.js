"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  viewBox: "0 0 18 24",
  height: size,
  width: size,
  fill: color,
  role: title ? 'img' : undefined,
  "aria-hidden": !title,
  "aria-labelledby": titleId,
  children: [title ? /*#__PURE__*/(0, _jsxRuntime.jsx)("title", {
    id: titleId,
    children: title
  }) : null, /*#__PURE__*/(0, _jsxRuntime.jsx)("path", {
    fillRule: "evenodd",
    d: "M13.363 16.661a.496.496 0 1 1 0 .991H4.636a.495.495 0 1 1 0-.99h8.727zm3.471 5.257V2.083c0-.602-.49-1.091-1.091-1.091H2.255c-.6 0-1.09.489-1.09 1.091v19.835c0 .601.49 1.09 1.09 1.09h13.488c.601 0 1.091-.489 1.091-1.09zM15.743 0c1.15 0 2.083.934 2.083 2.083v19.835A2.085 2.085 0 0 1 15.742 24H2.255a2.084 2.084 0 0 1-2.081-2.082V2.083C.174.934 1.107 0 2.255 0h13.488zm-2.886 12.684c.412-.412.72-.884.973-1.377h-2.2a8.626 8.626 0 0 1-1.405 2.818 5.392 5.392 0 0 0 2.632-1.441zM4.17 11.307c.252.493.56.965.973 1.377a5.39 5.39 0 0 0 2.631 1.44 8.646 8.646 0 0 1-1.405-2.817H4.17zm-.391-3.968a5.448 5.448 0 0 0 0 2.975h2.368a9.051 9.051 0 0 1 0-2.975H3.779zm1.364-2.37a5.337 5.337 0 0 0-.973 1.379h2.199a8.648 8.648 0 0 1 1.41-2.826A5.403 5.403 0 0 0 5.143 4.97zm5.451 1.379A7.532 7.532 0 0 0 9 3.584a7.513 7.513 0 0 0-1.594 2.764h3.188zm-3.44 3.966h3.691c.092-.484.138-.983.138-1.487 0-.504-.046-1.002-.138-1.488H7.154a8.084 8.084 0 0 0 0 2.975zm.252.993A7.508 7.508 0 0 0 9 14.07a7.545 7.545 0 0 0 1.594-2.763H7.406zm4.447-3.968a9.193 9.193 0 0 1 0 2.975h2.367c.277-.974.277-2 0-2.975h-2.367zm1.977-.991a5.386 5.386 0 0 0-.973-1.378 5.41 5.41 0 0 0-2.637-1.448 8.609 8.609 0 0 1 1.41 2.826h2.2zM9.018 2.385a6.425 6.425 0 0 1 4.54 1.883 6.455 6.455 0 0 1 0 9.117 6.43 6.43 0 0 1-4.541 1.885c-.006 0-.012.003-.017.003l-.018-.003a6.431 6.431 0 0 1-4.541-1.885 6.455 6.455 0 0 1 0-9.117 6.43 6.43 0 0 1 4.54-1.883c.006-.001.012-.005.019-.005.006 0 .012.004.018.005zm2.759 17.45a.496.496 0 0 1 0 .992H6.223a.495.495 0 1 1 0-.992h5.554z"
  })]
});