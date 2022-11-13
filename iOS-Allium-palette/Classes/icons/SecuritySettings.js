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
    d: "M11 24a.491.491 0 0 1-.148-.022C7.242 22.855.5 18.922.5 14.5v-11a.5.5 0 0 1 .356-.479l10-3a.5.5 0 0 1 .287 0l10 3a.5.5 0 0 1 .357.479v11c0 4.422-6.742 8.354-10.352 9.478A.491.491 0 0 1 11 24zM1.5 3.872V14.5c0 3.511 5.563 7.203 9.5 8.476 3.937-1.273 9.5-4.965 9.5-8.476V3.872L11 1.022l-9.5 2.85zm10.479 13.127a.505.505 0 0 1-.497-.457.495.495 0 0 0-.482-.46.496.496 0 0 0-.483.46.509.509 0 0 1-.2.358.49.49 0 0 1-.395.09c-1.172-.238-2.223-.863-3.038-1.807a.507.507 0 0 1-.122-.388.511.511 0 0 1 .196-.355.503.503 0 0 0 .145-.648.482.482 0 0 0-.623-.198.495.495 0 0 1-.669-.305A5.597 5.597 0 0 1 5.5 11.5c0-.577.102-1.161.311-1.788a.505.505 0 0 1 .269-.3.49.49 0 0 1 .4-.005c.239.103.5.02.622-.197a.503.503 0 0 0-.144-.65.508.508 0 0 1-.196-.356.512.512 0 0 1 .121-.388c.816-.945 1.867-1.57 3.039-1.806a.49.49 0 0 1 .395.09.507.507 0 0 1 .2.357c.026.262.234.46.483.46a.495.495 0 0 0 .482-.46.51.51 0 0 1 .2-.358.485.485 0 0 1 .395-.09c1.172.237 2.223.862 3.039 1.807a.51.51 0 0 1 .121.388.511.511 0 0 1-.196.355.501.501 0 0 0-.145.648c.124.218.388.3.624.198a.493.493 0 0 1 .4.004.51.51 0 0 1 .269.3c.209.628.311 1.212.311 1.789a5.62 5.62 0 0 1-.311 1.787.503.503 0 0 1-.269.3.493.493 0 0 1-.4.005.483.483 0 0 0-.623.198h-.001a.501.501 0 0 0 .145.648.506.506 0 0 1 .196.355.509.509 0 0 1-.122.388c-.815.945-1.866 1.57-3.038 1.807a.32.32 0 0 1-.098.012zm-4.041-2.167a4.42 4.42 0 0 0 1.747 1.048A1.48 1.48 0 0 1 11 15.063c.567 0 1.063.327 1.313.817a4.43 4.43 0 0 0 1.747-1.048 1.532 1.532 0 0 1-.03-1.55c.279-.49.839-.754 1.336-.748.09-.36.134-.701.134-1.033 0-.333-.044-.674-.133-1.034a1.465 1.465 0 0 1-1.337-.748 1.534 1.534 0 0 1 .03-1.55 4.418 4.418 0 0 0-1.747-1.047c-.25.487-.746.814-1.313.814a1.477 1.477 0 0 1-1.314-.816 4.43 4.43 0 0 0-1.747 1.047c.282.466.308 1.06.029 1.552-.278.49-.8.758-1.335.747-.089.36-.133.7-.133 1.034 0 .334.044.675.133 1.033a1.478 1.478 0 0 1 1.336.748 1.534 1.534 0 0 1-.031 1.551zM11 14a2.503 2.503 0 0 1-2.5-2.5C8.5 10.122 9.621 9 11 9s2.5 1.122 2.5 2.5S12.379 14 11 14zm0-4c-.827 0-1.5.673-1.5 1.5S10.173 13 11 13s1.5-.673 1.5-1.5S11.827 10 11 10z"
  })]
});