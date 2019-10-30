webpackHotUpdate("static/development/pages/forgotpassword.js",{

/***/ "./pages/forgotpassword.js":
/*!*********************************!*\
  !*** ./pages/forgotpassword.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _assets_css_Customs_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/css/Customs.css */ "./assets/css/Customs.css");
/* harmony import */ var _assets_css_Customs_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_assets_css_Customs_css__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_user__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../store/actions/user */ "./store/actions/user.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../util/hooks */ "./util/hooks/index.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_11__);



var _jsxFileName = "/Users/tanamet/Documents/Startup/kaptuer-landing/pages/forgotpassword.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;










var index = function index(props) {
  var _useFormHandle = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_10__["useFormHandle"])({
    password: "",
    confirmpassword: ""
  }),
      _useFormHandle2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useFormHandle, 2),
      user = _useFormHandle2[0],
      handleFormChange = _useFormHandle2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isClick = _useState[0],
      setClick = _useState[1];

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
                next_router__WEBPACK_IMPORTED_MODULE_11___default.a.push('/forgotPassword');
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
      lineNumber: 32
    },
    __self: this
  }, __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_6__["default"], {
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
      lineNumber: 33
    },
    __self: this
  }, __jsx("h3", {
    style: {
      marginBottom: '1.2em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, "Reset Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"], {
    style: {
      width: "80%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
    controlId: "formBasicPassword",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
    isInvalid: isClick && user.confirmpassword && user.confirmpassword !== user.password,
    type: "password",
    name: "password",
    value: user.password,
    onChange: handleFormChange,
    placeholder: "Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Group, {
    controlId: "formBasicConfirmPassword",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Confirm Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control, {
    isInvalid: isClick && user.confirmpassword && user.confirmpassword !== user.password,
    type: "password",
    name: "confirmpassword",
    value: user.confirmpassword,
    onChange: handleFormChange,
    placeholder: "Confirm Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Form"].Control.Feedback, {
    type: "invalid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
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
      lineNumber: 50
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_9__["Button"], {
    className: "mx-3 mb-2",
    onClick: function onClick() {
      return sendForgetPassword();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 51
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
  resetPassword: _store_actions_user__WEBPACK_IMPORTED_MODULE_8__["resetPassword"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_7__["connect"])(null, mapDispatchToProps)(index));

/***/ })

})
//# sourceMappingURL=forgotpassword.js.f0a40cabbc40afe0341c.hot-update.js.map