"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  viewBox: "0 0 22 24",
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
    d: "M6.05 2.073c.202 3.329 1.043 11.506 4.463 15.53a.52.52 0 1 1-.792.672c-3.62-4.262-4.5-12.707-4.71-16.14a.52.52 0 0 1 .488-.55c.281 0 .532.205.55.488zm14.168 7.31c.916-2.32.595-5.273-.32-5.869-.44-.292-1.029.127-1.452.542-.268 2.866-.88 6.951-2.287 10.546 1.331-1.234 3.291-3.277 4.06-5.22zm-7.852 9.62c4.49-4.785 5.14-15.519 5.23-17.964H4.411c.091 2.444.74 13.176 5.231 17.963h2.724zm2.87 3.651c0-1.496-1.608-2.613-3.044-2.613H9.816c-1.436 0-3.043 1.117-3.043 2.613v.307h8.463v-.307zM1.79 9.53c.77 1.95 2.746 3.941 4.082 5.135C4.448 11.05 3.83 6.93 3.562 4.037c-.415-.404-.987-.808-1.42-.524C1.193 4.13.853 7.157 1.79 9.53zm18.673-6.887c1.445.94 1.796 4.4.721 7.12-1.378 3.49-5.978 7.036-6.024 7.072l-.03.02a14.047 14.047 0 0 1-1.586 2.381c1.387.474 2.731 1.685 2.731 3.418v.826a.52.52 0 0 1-.52.52h-9.5a.52.52 0 0 1-.52-.52v-.825c0-1.732 1.342-2.944 2.73-3.419a14.11 14.11 0 0 1-1.602-2.408l-.005-.003c-.19-.14-4.67-3.463-6.034-6.913-1.095-2.775-.73-6.307.751-7.269.323-.21.98-.469 1.877.023A46.015 46.015 0 0 1 3.37 1.04h-.283a.52.52 0 0 1 0-1.039h15.834a.52.52 0 0 1 .521.52c0 .286-.234.52-.52.52h-.284c-.01.333-.032.902-.082 1.64.916-.51 1.581-.25 1.907-.037z"
  })]
});