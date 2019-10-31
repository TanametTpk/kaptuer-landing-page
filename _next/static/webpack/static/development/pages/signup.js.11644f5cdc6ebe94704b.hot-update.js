webpackHotUpdate("static/development/pages/signup.js",{

/***/ "./layouts/Regis/index.js":
/*!********************************!*\
  !*** ./layouts/Regis/index.js ***!
  \********************************/
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
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-facebook-login/dist/facebook-login-render-props */ "./node_modules/react-facebook-login/dist/facebook-login-render-props.js");
/* harmony import */ var react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var react_bootstrap__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! react-bootstrap */ "./node_modules/react-bootstrap/esm/index.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../components/Loader */ "./components/Loader.js");
/* harmony import */ var _configs_oauth__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../configs/oauth */ "./configs/oauth.js");
/* harmony import */ var _configs_oauth__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_configs_oauth__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _util_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../util/api */ "./util/api/index.js");
/* harmony import */ var _configs_apis__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../configs/apis */ "./configs/apis.js");
/* harmony import */ var _util_api_libs_signable__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../util/api/libs/signable */ "./util/api/libs/signable/index.js");
/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../../util/hooks */ "./util/hooks/index.js");
/* harmony import */ var _components_SeperateLine__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../../components/SeperateLine */ "./components/SeperateLine.js");
/* harmony import */ var _util_api_libs_passwordValidator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../../util/api/libs/passwordValidator */ "./util/api/libs/passwordValidator.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_15__);



var _jsxFileName = "/Users/tanamet/Documents/Startup/kaptuer-landing-page/layouts/Regis/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement;














function Regis() {
  var _useFormHandle = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_12__["useFormHandle"])({
    name: "",
    email: "",
    password: ""
  }),
      _useFormHandle2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useFormHandle, 2),
      user = _useFormHandle2[0],
      handleFormChange = _useFormHandle2[1];

  var _useModal = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_12__["useModal"])(false),
      _useModal2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_2__["default"])(_useModal, 3),
      showModal = _useModal2[0],
      openModal = _useModal2[1],
      closeModal = _useModal2[2];

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isLoad = _useState[0],
      setLoad = _useState[1];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_3__["useState"])(false),
      isClickSignup = _useState2[0],
      setClickSignup = _useState2[1];

  var registration =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(payload, method) {
      var res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              setClickSignup(true);

              if (!(payload.password !== payload.confirmpassword || !payload.name || !payload.email)) {
                _context.next = 3;
                break;
              }

              return _context.abrupt("return");

            case 3:
              if (!_util_api_libs_passwordValidator__WEBPACK_IMPORTED_MODULE_14__["default"].validate(payload.password)) {
                openModal();
              }

              _context.next = 6;
              return _util_api__WEBPACK_IMPORTED_MODULE_9__["default"].user.createUser(_util_api_libs_signable__WEBPACK_IMPORTED_MODULE_11__["default"][method](payload));

            case 6:
              res = _context.sent;

              if (res.status === 200) {
                login(payload, method);
              } else {//something happen
              }

            case 8:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function registration(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var login =
  /*#__PURE__*/
  function () {
    var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(payload, method) {
      var res;
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _util_api__WEBPACK_IMPORTED_MODULE_9__["default"].user.login(_util_api_libs_signable__WEBPACK_IMPORTED_MODULE_11__["default"][method](payload), function (err) {
                return console.log(err);
              });

            case 2:
              res = _context2.sent;

              if (res.status === 200) {
                window.location.href = _configs_apis__WEBPACK_IMPORTED_MODULE_10__["default"].APP;
                setLoad(true);
              }

            case 4:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    return function login(_x3, _x4) {
      return _ref2.apply(this, arguments);
    };
  }();

  if (isLoad) return __jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_7__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  });
  return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Container"], {
    className: "login-box",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 62
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    style: {
      minWidth: "35%"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 63
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    sm: 12,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"], {
    className: "mx-3",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formBasicName",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "Your name"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    isInvalid: isClickSignup && !user.name,
    type: "text",
    name: "name",
    value: user.name,
    onChange: handleFormChange,
    placeholder: "Enter name",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control.Feedback, {
    type: "invalid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 69
    },
    __self: this
  }, "please enter name")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formBasicEmail",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 73
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 74
    },
    __self: this
  }, "Email address"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    isInvalid: isClickSignup && !user.email,
    type: "email",
    name: "email",
    value: user.email,
    onChange: handleFormChange,
    placeholder: "Enter email",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 75
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control.Feedback, {
    type: "invalid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 76
    },
    __self: this
  }, "please enter email")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formBasicPassword",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  }, "Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    isInvalid: isClickSignup && user.confirmpassword && user.confirmpassword !== user.password,
    type: "password",
    name: "password",
    value: user.password,
    onChange: handleFormChange,
    placeholder: "Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 82
    },
    __self: this
  })), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Group, {
    controlId: "formBasicConfirmPassword",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Label, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }, "Confirm Password"), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control, {
    isInvalid: isClickSignup && user.confirmpassword && user.confirmpassword !== user.password,
    type: "password",
    name: "confirmpassword",
    value: user.confirmpassword,
    onChange: handleFormChange,
    placeholder: "Confirm Password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 86
    },
    __self: this
  }), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Form"].Control.Feedback, {
    type: "invalid",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 87
    },
    __self: this
  }, "password is not matched"))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Row"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 92
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Col"], {
    className: "d-flex flex-column",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 93
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    className: "mx-3 mb-2",
    onClick: function onClick() {
      return registration(user, "LocalSign");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 94
    },
    __self: this
  }, "signup"), __jsx(next_link__WEBPACK_IMPORTED_MODULE_15___default.a, {
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    variant: "outline-primary",
    className: "mx-3 mb-2",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, "back to login")), __jsx(_components_SeperateLine__WEBPACK_IMPORTED_MODULE_13__["SeperateLine"], {
    style: {
      margin: " 12px 0"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }), __jsx(react_facebook_login_dist_facebook_login_render_props__WEBPACK_IMPORTED_MODULE_4___default.a, {
    appId: _configs_oauth__WEBPACK_IMPORTED_MODULE_8__["FB_TOKEN"],
    autoLoad: false,
    fields: "name,email,picture",
    callback: function callback(response) {
      return login(response, "FacebookSign");
    },
    render: function render(renderProps) {
      return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        variant: "facebook",
        className: "mx-3 mb-2",
        onClick: renderProps.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 103
        },
        __self: this
      }, "login with Facebook");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }), __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_5___default.a, {
    clientId: _configs_oauth__WEBPACK_IMPORTED_MODULE_8__["GOOGLE_TOKEN"],
    buttonText: "Login with google",
    onSuccess: function onSuccess(response) {
      return login(response, "GoogleSign");
    },
    cookiePolicy: 'single_host_origin',
    render: function render(renderProps) {
      return __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
        variant: "light",
        className: "mx-3 shadow-sm",
        onClick: renderProps.onClick,
        __source: {
          fileName: _jsxFileName,
          lineNumber: 112
        },
        __self: this
      }, "login with Google");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 106
    },
    __self: this
  }))))), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"], {
    show: showModal,
    onHide: function onHide() {
      return closeModal();
    },
    size: "lg",
    "aria-labelledby": "contained-modal-title-vcenter",
    centered: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 120
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"].Header, {
    closeButton: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 127
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"].Title, {
    id: "contained-modal-title-vcenter",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 128
    },
    __self: this
  }, "Modal heading")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"].Body, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 132
    },
    __self: this
  }, __jsx("h4", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 133
    },
    __self: this
  }, "Centered Modal"), __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 134
    },
    __self: this
  }, "Cras mattis consectetur purus sit amet fermentum. Cras justo odio, dapibus ac facilisis in, egestas eget quam. Morbi leo risus, porta ac consectetur ac, vestibulum at eros.")), __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Modal"].Footer, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 140
    },
    __self: this
  }, __jsx(react_bootstrap__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    onClick: function onClick() {
      return closeModal();
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 141
    },
    __self: this
  }, "Close"))));
}

/* harmony default export */ __webpack_exports__["default"] = (Regis);

/***/ })

})
//# sourceMappingURL=signup.js.11644f5cdc6ebe94704b.hot-update.js.map