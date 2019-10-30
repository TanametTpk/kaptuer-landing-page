webpackHotUpdate("static\\development\\pages\\resetPassword.js",{

/***/ "./components/custom/CountdownOverlay.js":
/*!***********************************************!*\
  !*** ./components/custom/CountdownOverlay.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
var _jsxFileName = "C:\\Users\\Tanamet\\Desktop\\StartUp\\codeless\\kaptuer-landing-page\\components\\custom\\CountdownOverlay.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;



var Timer = function Timer() {
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Popover"], {
    id: "popover-contained",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 5
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Popover"].Title, {
    as: "h3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 6
    },
    __self: this
  }, "Popover bottom"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["Popover"].Content, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 7
    },
    __self: this
  }, __jsx("strong", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 8
    },
    __self: this
  }, "Holy guacamole!"), " Check this info."));
};

var CountdownOverlay = function CountdownOverlay(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(false),
      show = _useState[0],
      setShow = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(null),
      target = _useState2[0],
      setTarget = _useState2[1];

  var ref = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])(null);
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_1__["OverlayTrigger"], {
    trigger: "focus",
    show: true,
    placement: "top",
    overlay: Timer(),
    __source: {
      fileName: _jsxFileName,
      lineNumber: 20
    },
    __self: this
  }, props.children);
};

/* harmony default export */ __webpack_exports__["default"] = (CountdownOverlay);

/***/ })

})
//# sourceMappingURL=resetPassword.js.c228e43359f984e531ae.hot-update.js.map