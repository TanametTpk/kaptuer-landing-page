webpackHotUpdate("static/development/pages/forgotPassword.js",{

/***/ "./pages/forgotPassword.js":
/*!*********************************!*\
  !*** ./pages/forgotPassword.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _assets_css_Customs_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../assets/css/Customs.css */ "./assets/css/Customs.css");
/* harmony import */ var _assets_css_Customs_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_assets_css_Customs_css__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_Input__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Input */ "./components/Input.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_user__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../store/actions/user */ "./store/actions/user.js");
var _jsxFileName = "/Users/tanamet/Documents/Startup/kaptuer-landing/pages/forgotPassword.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;









var index = function index(props) {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_0__["useState"])(""),
      email = _useState[0],
      setEmail = _useState[1];

  var sendForgetPassword = function sendForgetPassword() {
    props.requestRecoveryPassword({
      email: email
    });
  };

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
      lineNumber: 21
    },
    __self: this
  }, __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_3__["default"], {
    customStyle: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      minWidth: "600px",
      padding: "42px 42px",
      backgroundColor: "white",
      borderRadius: "20px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("h3", {
    style: {
      marginBottom: '1.2em'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, "Forgot your password?"), __jsx(_components_Input__WEBPACK_IMPORTED_MODULE_5__["TitleInput"], {
    title: "Email Address",
    value: email,
    onChange: function onChange(_ref) {
      var value = _ref.target.value;
      return setEmail(value);
    },
    customStyle: {
      width: '80%',
      marginBottom: '1.5em',
      fontSize: '14px'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }), __jsx("div", {
    style: {
      display: "flex",
      justifyContent: "flex-end",
      width: "80%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 26
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_4__["Button"], {
    variant: email ? "primary" : "secondary",
    onClick: sendForgetPassword,
    disabled: !email,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }, "Send Me Instructions"))));
};

var mapDispatchToProps = {
  requestRecoveryPassword: _store_actions_user__WEBPACK_IMPORTED_MODULE_7__["requestRecoveryPassword"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_6__["connect"])(null, mapDispatchToProps)(index));

/***/ })

})
//# sourceMappingURL=forgotPassword.js.806eaee6d930b1f6de72.hot-update.js.map