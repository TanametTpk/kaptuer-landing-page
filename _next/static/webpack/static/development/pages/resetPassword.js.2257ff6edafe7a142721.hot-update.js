webpackHotUpdate("static\\development\\pages\\resetPassword.js",{

/***/ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js":
/*!*****************************************************************!*\
  !*** ./node_modules/@babel/runtime-corejs2/core-js/date/now.js ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! core-js/library/fn/date/now */ "./node_modules/core-js/library/fn/date/now.js");

/***/ }),

/***/ "./node_modules/core-js/library/fn/date/now.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/library/fn/date/now.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ../../modules/es6.date.now */ "./node_modules/core-js/library/modules/es6.date.now.js");
module.exports = __webpack_require__(/*! ../../modules/_core */ "./node_modules/core-js/library/modules/_core.js").Date.now;


/***/ }),

/***/ "./node_modules/core-js/library/modules/es6.date.now.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/library/modules/es6.date.now.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.3.3.1 / 15.9.4.4 Date.now()
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/library/modules/_export.js");

$export($export.S, 'Date', { now: function () { return new Date().getTime(); } });


/***/ }),

/***/ "./pages/resetPassword.js":
/*!********************************!*\
  !*** ./pages/resetPassword.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/core-js/date/now */ "./node_modules/@babel/runtime-corejs2/core-js/date/now.js");
/* harmony import */ var _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/actions/user */ "./store/actions/user.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../util/hooks */ "./util/hooks/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_10__);




var _jsxFileName = "C:\\Users\\Tanamet\\Desktop\\StartUp\\codeless\\kaptuer-landing-page\\pages\\resetPassword.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;








var index = function index(props) {
  var _useFormHandle = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_9__["useFormHandle"])({
    password: "",
    confirmpassword: ""
  }),
      _useFormHandle2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useFormHandle, 2),
      user = _useFormHandle2[0],
      handleFormChange = _useFormHandle2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isClick = _useState[0],
      setClick = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(0),
      currentTime = _useState2[0],
      setCurrectTime = _useState2[1];

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(true),
      isTimeRunning = _useState3[0],
      setTimeRunning = _useState3[1];

  var end = Number(props.query.end || _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default()());
  Object(_util_hooks__WEBPACK_IMPORTED_MODULE_9__["useInterval"])(function () {
    var msLeft = end - _babel_runtime_corejs2_core_js_date_now__WEBPACK_IMPORTED_MODULE_2___default()();

    if (msLeft < 0) {
      msLeft = 0;
      setTimeRunning(false);
    }

    var secLeft = msLeft / 1000;
    setCur;
  }, isTimeRunning ? 1000 : null);

  var sendForgetPassword =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
      var token;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setClick(true);

              if (!(!user.password || !user.confirmpassword || user.password !== user.confirmpassword)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              token = props.query.token;
              props.resetPassword({
                password: user.password,
                token: token
              }, function () {
                next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/forgotPassword');
              });

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function sendForgetPassword() {
      return _ref.apply(this, arguments);
    };
  }();

  return __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "100vh",
      backgroundImage: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%)"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Toast"], {
    style: {
      position: 'absolute',
      top: 24,
      right: 24
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Toast"].Header, {
    closeButton: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("strong", {
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "Kaptuer")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Toast"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "You have 200 seconds left to reset password")), __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
    customStyle: {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      minWidth: "600px",
      padding: "42px 42px",
      backgroundColor: "white",
      borderRadius: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 60
    },
    __self: this
  }, __jsx("h3", {
    style: {
      marginBottom: '1.2em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Reset Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"], {
    style: {
      width: "80%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
    controlId: "formBasicPassword",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
    isInvalid: isClick && user.confirmpassword && user.confirmpassword !== user.password,
    type: "password",
    name: "password",
    value: user.password,
    onChange: handleFormChange,
    placeholder: "Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
    controlId: "formBasicConfirmPassword",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "Confirm Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
    isInvalid: isClick && user.confirmpassword && user.confirmpassword !== user.password,
    type: "password",
    name: "confirmpassword",
    value: user.confirmpassword,
    onChange: handleFormChange,
    placeholder: "Confirm Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control.Feedback, {
    type: "invalid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "password is not matched"))), __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      width: "80%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    className: "mx-3 mb-2",
    onClick: function onClick() {
      return sendForgetPassword();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Reset"))));
};

index.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  return {
    query: query
  };
};

var mapDispatchToProps = {
  resetPassword: _store_actions_user__WEBPACK_IMPORTED_MODULE_7__["resetPassword"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(null, mapDispatchToProps)(index));

/***/ })

})
//# sourceMappingURL=resetPassword.js.2257ff6edafe7a142721.hot-update.js.map