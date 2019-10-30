webpackHotUpdate("static/development/pages/forgotpassword.js",{

/***/ "./pages/forgotpassword.js":
/*!*********************************!*\
  !*** ./pages/forgotpassword.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_css_Customs_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/css/Customs.css */ "./assets/css/Customs.css");
/* harmony import */ var _assets_css_Customs_css__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_assets_css_Customs_css__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! bootstrap/dist/css/bootstrap.min.css */ "./node_modules/bootstrap/dist/css/bootstrap.min.css");
/* harmony import */ var bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(bootstrap_dist_css_bootstrap_min_css__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Card */ "./components/Card.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_user__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../store/actions/user */ "./store/actions/user.js");
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../util/hooks */ "./util/hooks/index.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_9__);

var _jsxFileName = "/Users/tanamet/Documents/Startup/kaptuer-landing/pages/forgotpassword.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement;










var index = function index(props) {
  var _useFormHandle = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_8__["useFormHandle"])({
    password: "",
    confirmpassword: ""
  }),
      _useFormHandle2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_0__["default"])(_useFormHandle, 2),
      user = _useFormHandle2[0],
      handleFormChange = _useFormHandle2[1];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      isClick = _useState[0],
      setClick = _useState[1];

  var sendForgetPassword = function sendForgetPassword() {
    setClick(true);
    console.log(props.url);
    if (!user.password || !user.confirmpassword || user.password !== user.confirmpassword) return; // let token = props.location.query.token

    props.resetPassword({
      password: user.password,
      token: token
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
      lineNumber: 32
    },
    __self: this
  }, __jsx(_components_Card__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
  }, "Reset Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"], {
    style: {
      width: "80%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Group, {
    controlId: "formBasicPassword",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 38
    },
    __self: this
  }, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Control, {
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
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Group, {
    controlId: "formBasicConfirmPassword",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 41
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, "Confirm Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Control, {
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
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Form"].Control.Feedback, {
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
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_7__["Button"], {
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

index.getInitialProps = function (_ref) {
  var query = _ref.query;
  console.log(quert);
  return {
    query: query
  };
};

var mapDispatchToProps = {
  resetPassword: _store_actions_user__WEBPACK_IMPORTED_MODULE_6__["resetPassword"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_5__["connect"])(null, mapDispatchToProps)(index));

/***/ })

})
//# sourceMappingURL=forgotpassword.js.c6d496ae3ef8bed70639.hot-update.js.map