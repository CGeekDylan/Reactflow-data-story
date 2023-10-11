"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Json = void 0;
const jsx_runtime_1 = require("react/jsx-runtime");
const Json = ({ register, label, id }) => {
    return ((0, jsx_runtime_1.jsxs)("div", Object.assign({ className: "flex flex-col" }, { children: [(0, jsx_runtime_1.jsx)("label", Object.assign({ className: "mt-2 mb-1 text-xs text-gray-400" }, { children: label })), (0, jsx_runtime_1.jsx)("textarea", Object.assign({ rows: 1, placeholder: "[{}]", className: "w-full bg-white text-xs text-gray-400 px-2 py-1 border rounded border-blue-200" }, register(id)))] }), id));
};
exports.Json = Json;
