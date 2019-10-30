webpackHotUpdate("static\\development\\pages\\resetPassword.js",{

/***/ "./util/hooks/index.js":
/*!*****************************!*\
  !*** ./util/hooks/index.js ***!
  \*****************************/
/*! exports provided: useScrollY, useWindowsWidth, useModal, useFormHandle, useInterval */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _useScrollY__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./useScrollY */ "./util/hooks/useScrollY.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useScrollY", function() { return _useScrollY__WEBPACK_IMPORTED_MODULE_0__["default"]; });

/* harmony import */ var _useWindowsWidth__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./useWindowsWidth */ "./util/hooks/useWindowsWidth.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useWindowsWidth", function() { return _useWindowsWidth__WEBPACK_IMPORTED_MODULE_1__["default"]; });

/* harmony import */ var _useModal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./useModal */ "./util/hooks/useModal.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useModal", function() { return _useModal__WEBPACK_IMPORTED_MODULE_2__["default"]; });

/* harmony import */ var _useFormHandle__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./useFormHandle */ "./util/hooks/useFormHandle.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useFormHandle", function() { return _useFormHandle__WEBPACK_IMPORTED_MODULE_3__["default"]; });

/* harmony import */ var _useInterval__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./useInterval */ "./util/hooks/useInterval.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "useInterval", function() { return _useInterval__WEBPACK_IMPORTED_MODULE_4__["default"]; });







/***/ }),

/***/ "./util/hooks/useInterval.js":
/*!***********************************!*\
  !*** ./util/hooks/useInterval.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var useInterval = function useInterval(callback, delay) {
  var savedCallback = Object(react__WEBPACK_IMPORTED_MODULE_0__["useRef"])();
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    savedCallback.current = callback;
  }, [callback]);
  Object(react__WEBPACK_IMPORTED_MODULE_0__["useEffect"])(function () {
    var tick = function tick() {
      savedCallback.current();
    };

    if (delay !== null) {
      var id = setInterval(tick, delay);
      return function () {
        return clearInterval(id);
      };
    }
  }, [delay]);
};

/* harmony default export */ __webpack_exports__["default"] = (useInterval);

/***/ })

})
//# sourceMappingURL=resetPassword.js.55a8c9a1d6559aef6828.hot-update.js.map