"use strict";
exports.__esModule = true;
exports.AppContainer = void 0;
require("./dist/appContainer.css");
exports.AppContainer = function () {
    return (React.createElement("div", { className: "appContainer" },
        React.createElement("header", null, "this is header"),
        React.createElement("body", null, "This is body"),
        React.createElement("footer", null, "this is footer")));
};
