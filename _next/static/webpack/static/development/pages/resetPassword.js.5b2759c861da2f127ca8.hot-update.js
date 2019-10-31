webpackHotUpdate("static/development/pages/resetpassword.js",{

/***/ "./pages/resetpassword.js":
/*!********************************!*\
  !*** ./pages/resetpassword.js ***!
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
/* harmony import */ var _util_api_libs_passwordValidator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../util/api/libs/passwordValidator */ "./util/api/libs/passwordValidator.js");




var _jsxFileName = "/Users/tanamet/Documents/Startup/kaptuer-landing-page/pages/resetpassword.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;









var index = function index(props) {
  var _useFormHandle = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_9__["useFormHandle"])({
    password: "",
    confirmpassword: ""
  }),
      _useFormHandle2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useFormHandle, 2),
      user = _useFormHandle2[0],
      handleFormChange = _useFormHandle2[1];

  var _useModal = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_9__["useModal"])(false),
      _useModal2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useModal, 3),
      showModal = _useModal2[0],
      openModal = _useModal2[1],
      closeModal = _useModal2[2];

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

    var secLeft = Math.floor(msLeft / 1000);
    setCurrectTime(secLeft);
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
              if (_util_api_libs_passwordValidator__WEBPACK_IMPORTED_MODULE_11__["default"].validate(user.password)) {
                _context.next = 6;
                break;
              }

              openModal();
              return _context.abrupt("return");

            case 6:
              token = props.query.token;
              props.resetPassword({
                password: user.password,
                token: token
              });
              next_router__WEBPACK_IMPORTED_MODULE_10___default.a.push('/');

            case 9:
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
      lineNumber: 53
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
      lineNumber: 54
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Toast"].Header, {
    closeButton: false,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 61
    },
    __self: this
  }, __jsx("strong", {
    className: "mr-auto",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, "Kaptuer")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Toast"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, currentTime < 1 && isTimeRunning ? "Estimating time...." : currentTime < 1 ? "You can't reset password in this moment." : "You have ".concat(currentTime, " seconds left to reset password"))), __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
      lineNumber: 73
    },
    __self: this
  }, __jsx("h3", {
    style: {
      marginBottom: '1.2em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }, "Reset Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"], {
    style: {
      width: "80%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
    controlId: "formBasicPassword",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
    isInvalid: isClick && user.confirmpassword && user.confirmpassword !== user.password,
    disabled: currentTime < 1,
    type: "password",
    name: "password",
    value: user.password,
    onChange: handleFormChange,
    placeholder: "Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Group, {
    controlId: "formBasicConfirmPassword",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  }, "Confirm Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control, {
    isInvalid: isClick && user.confirmpassword && user.confirmpassword !== user.password,
    disabled: currentTime < 1,
    type: "password",
    name: "confirmpassword",
    value: user.confirmpassword,
    onChange: handleFormChange,
    placeholder: "Confirm Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Form"].Control.Feedback, {
    type: "invalid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
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
      lineNumber: 90
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    className: "mx-3 mb-2",
    onClick: function onClick() {
      return sendForgetPassword();
    },
    disabled: currentTime < 1,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 91
    },
    __self: this
  }, "Reset"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"], {
    show: showModal,
    onHide: function onHide() {
      return closeModal();
    },
    size: "lg",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Header, {
    closeButton: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 104
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Title, {
    id: "contained-modal-title-vcenter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 105
    },
    __self: this
  }, "Your password is too weak.")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 109
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 110
    },
    __self: this
  }, "Needed"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 111
    },
    __self: this
  }, "password length between 8 - 100 characters, at least 1 uppercase, at least 1 lowercase, at least 1 digit, at lease 1 symbol and no space")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Modal"].Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_8__["Button"], {
    onClick: function onClick() {
      return closeModal();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 121
    },
    __self: this
  }, "Close"))));
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
//# sourceMappingURL=resetpassword.js.5b2759c861da2f127ca8.hot-update.js.map