"use strict";

var _jsxRuntime = require("react/jsx-runtime");

module.exports = ({
  title,
  titleId,
  size,
  color,
  ...props
}) => /*#__PURE__*/(0, _jsxRuntime.jsxs)("svg", { ...props,
  viewBox: "0 0 24 20",
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
    d: "M12 6.957a4.632 4.632 0 0 0-4.626 4.627A4.632 4.632 0 0 0 12 16.212a4.632 4.632 0 0 0 4.627-4.628A4.632 4.632 0 0 0 12 6.957zm-5.666 4.627A5.672 5.672 0 0 1 12 5.919a5.672 5.672 0 0 1 5.666 5.665A5.673 5.673 0 0 1 12 17.25a5.673 5.673 0 0 1-5.666-5.666zm2.172.554a.52.52 0 0 1-.52-.52A4.019 4.019 0 0 1 12 7.606a.52.52 0 0 1 0 1.039 2.979 2.979 0 0 0-2.975 2.975.52.52 0 0 1-.519.519zm1.16-10.723c-.594 0-1.183.477-1.401 1.131l-.323.994a1.501 1.501 0 0 1-1.433 1.042H2.895a1.858 1.858 0 0 0-1.856 1.856V16.73c0 1.022.833 1.854 1.856 1.854h18.21a1.857 1.857 0 0 0 1.856-1.855V6.438a1.858 1.858 0 0 0-1.856-1.855H17.49c-.671 0-1.236-.393-1.438-1.003l-.322-1.065c-.212-.635-.799-1.098-1.396-1.098H9.666zm11.439 2.128A2.898 2.898 0 0 1 24 6.438V16.73a2.898 2.898 0 0 1-2.895 2.895H2.895A2.897 2.897 0 0 1 0 16.73V6.438a2.897 2.897 0 0 1 2.895-2.894h3.614c.203 0 .382-.13.445-.322l.325-1C7.64 1.134 8.622.376 9.666.376h4.668c1.048 0 2.028.75 2.387 1.823l.321 1.066c.057.17.228.278.448.278h3.615z"
  })]
});