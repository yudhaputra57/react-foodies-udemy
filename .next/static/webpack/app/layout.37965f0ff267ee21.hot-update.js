"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./components/main-header/nav-link.js":
/*!********************************************!*\
  !*** ./components/main-header/nav-link.js ***!
  \********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ NavLink; }\n/* harmony export */ });\n/* harmony import */ var _swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @swc/helpers/_/_tagged_template_literal */ \"(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ \"(app-pages-browser)/./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! next/navigation */ \"(app-pages-browser)/./node_modules/next/navigation.js\");\n/* harmony import */ var next_navigation__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(next_navigation__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _nav_link_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./nav-link.module.css */ \"(app-pages-browser)/./components/main-header/nav-link.module.css\");\n/* harmony import */ var _nav_link_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_nav_link_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nfunction _templateObject() {\n    const data = (0,_swc_helpers_tagged_template_literal__WEBPACK_IMPORTED_MODULE_0__._)([\n        \"\",\n        \"\"\n    ]);\n    _templateObject = function() {\n        return data;\n    };\n    return data;\n}\n\nvar _s = $RefreshSig$();\n\n\n\nfunction NavLink(param) {\n    let { href, children } = param;\n    _s();\n    const path = (0,next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_2___default()), {\n        href: href,\n        className: path.startsWith(href) ? \"\".concat((_nav_link_module_css__WEBPACK_IMPORTED_MODULE_4___default().link))(_templateObject(), (_nav_link_module_css__WEBPACK_IMPORTED_MODULE_4___default().active)) : undefined,\n        children: children\n    }, void 0, false, {\n        fileName: \"/home/recreation/Yudha/NEXT-Project/foodies-udemy-project/components/main-header/nav-link.js\",\n        lineNumber: 10,\n        columnNumber: 9\n    }, this);\n}\n_s(NavLink, \"kx72sda92+XlSh1QiZvq/YVQxpY=\", false, function() {\n    return [\n        next_navigation__WEBPACK_IMPORTED_MODULE_3__.usePathname\n    ];\n});\n_c = NavLink;\nvar _c;\n$RefreshReg$(_c, \"NavLink\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvbWFpbi1oZWFkZXIvbmF2LWxpbmsuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUU2QjtBQUNpQjtBQUNIO0FBRTVCLFNBQVNHLFFBQVEsS0FBZ0I7UUFBaEIsRUFBQ0MsSUFBSSxFQUFFQyxRQUFRLEVBQUMsR0FBaEI7O0lBQzVCLE1BQU1DLE9BQU9MLDREQUFXQTtJQUN4QixxQkFDSSw4REFBQ0Qsa0RBQUlBO1FBQUNJLE1BQU1BO1FBQ1JHLFdBQVdELEtBQUtFLFVBQVUsQ0FBQ0osUUFDM0IsR0FBZ0IsT0FBYkYsa0VBQVkscUJBQU1BLG9FQUFjLElBQUtTO2tCQUN2Q047Ozs7OztBQUdiO0dBVHdCRjs7UUFDUEYsd0RBQVdBOzs7S0FESkUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9tYWluLWhlYWRlci9uYXYtbGluay5qcz8wZjEwIl0sInNvdXJjZXNDb250ZW50IjpbIid1c2UgY2xpZW50J1xuXG5pbXBvcnQgTGluayBmcm9tIFwibmV4dC9saW5rXCI7XG5pbXBvcnQgeyB1c2VQYXRobmFtZSB9IGZyb20gXCJuZXh0L25hdmlnYXRpb25cIjtcbmltcG9ydCBjbGFzc2VzIGZyb20gJy4vbmF2LWxpbmsubW9kdWxlLmNzcydcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTmF2TGluayh7aHJlZiwgY2hpbGRyZW59KXtcbiAgICBjb25zdCBwYXRoID0gdXNlUGF0aG5hbWUoKTtcbiAgICByZXR1cm4oXG4gICAgICAgIDxMaW5rIGhyZWY9e2hyZWZ9IFxuICAgICAgICAgICAgY2xhc3NOYW1lPXtwYXRoLnN0YXJ0c1dpdGgoaHJlZikgPyBcbiAgICAgICAgICAgIGAke2NsYXNzZXMubGlua31gIGAke2NsYXNzZXMuYWN0aXZlfWAgOiB1bmRlZmluZWR9PlxuICAgICAgICAgICAge2NoaWxkcmVufVxuICAgICAgICA8L0xpbms+XG4gICAgKVxufSJdLCJuYW1lcyI6WyJMaW5rIiwidXNlUGF0aG5hbWUiLCJjbGFzc2VzIiwiTmF2TGluayIsImhyZWYiLCJjaGlsZHJlbiIsInBhdGgiLCJjbGFzc05hbWUiLCJzdGFydHNXaXRoIiwibGluayIsImFjdGl2ZSIsInVuZGVmaW5lZCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/main-header/nav-link.js\n"));

/***/ }),

/***/ "(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@swc/helpers/esm/_tagged_template_literal.js ***!
  \*******************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   _: function() { return /* binding */ _tagged_template_literal; },\n/* harmony export */   _tagged_template_literal: function() { return /* binding */ _tagged_template_literal; }\n/* harmony export */ });\nfunction _tagged_template_literal(strings, raw) {\n    if (!raw) raw = strings.slice(0);\n\n    return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } }));\n}\n\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvZXNtL190YWdnZWRfdGVtcGxhdGVfbGl0ZXJhbC5qcyIsIm1hcHBpbmdzIjoiOzs7OztBQUFPO0FBQ1A7O0FBRUEsNERBQTRELE9BQU8sNkJBQTZCO0FBQ2hHO0FBQ3lDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL25vZGVfbW9kdWxlcy9Ac3djL2hlbHBlcnMvZXNtL190YWdnZWRfdGVtcGxhdGVfbGl0ZXJhbC5qcz82MTg0Il0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBfdGFnZ2VkX3RlbXBsYXRlX2xpdGVyYWwoc3RyaW5ncywgcmF3KSB7XG4gICAgaWYgKCFyYXcpIHJhdyA9IHN0cmluZ3Muc2xpY2UoMCk7XG5cbiAgICByZXR1cm4gT2JqZWN0LmZyZWV6ZShPYmplY3QuZGVmaW5lUHJvcGVydGllcyhzdHJpbmdzLCB7IHJhdzogeyB2YWx1ZTogT2JqZWN0LmZyZWV6ZShyYXcpIH0gfSkpO1xufVxuZXhwb3J0IHsgX3RhZ2dlZF90ZW1wbGF0ZV9saXRlcmFsIGFzIF8gfTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./node_modules/@swc/helpers/esm/_tagged_template_literal.js\n"));

/***/ })

});