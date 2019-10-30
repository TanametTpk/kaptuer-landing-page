webpackHotUpdate("static/development/pages/index.js",{

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/objectSpread */ "./node_modules/@babel/runtime-corejs2/helpers/esm/objectSpread.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/slicedToArray */ "./node_modules/@babel/runtime-corejs2/helpers/esm/slicedToArray.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_custom_KaptuerHeader__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/custom/KaptuerHeader */ "./components/custom/KaptuerHeader.js");
/* harmony import */ var _components_Button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Button */ "./components/Button.js");
/* harmony import */ var _components_Section__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Section */ "./components/Section.js");
/* harmony import */ var _components_Stack__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Stack */ "./components/Stack.js");
/* harmony import */ var _components_Grid__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Grid */ "./components/Grid.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! react-modal */ "./node_modules/react-modal/lib/index.js");
/* harmony import */ var react_modal__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(react_modal__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! react-google-login */ "./node_modules/react-google-login/dist/google-login.js");
/* harmony import */ var react_google_login__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(react_google_login__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! react-facebook-login */ "./node_modules/react-facebook-login/dist/facebook-login-with-button.js");
/* harmony import */ var react_facebook_login__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(react_facebook_login__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var _components_SeperateLine__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ../components/SeperateLine */ "./components/SeperateLine.js");
/* harmony import */ var _components_custom_LoginForm__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ../components/custom/LoginForm */ "./components/custom/LoginForm.js");
/* harmony import */ var _configs_oauth__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../configs/oauth */ "./configs/oauth.js");
/* harmony import */ var _configs_oauth__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(_configs_oauth__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var _util_api_libs_signable__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ../util/api/libs/signable */ "./util/api/libs/signable/index.js");
/* harmony import */ var _configs_apis__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ../configs/apis */ "./configs/apis.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _store_actions_user__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ../store/actions/user */ "./store/actions/user.js");
/* harmony import */ var _util_hooks__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ../util/hooks */ "./util/hooks/index.js");
/* harmony import */ var _components_Loader__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ../components/Loader */ "./components/Loader.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! next/router */ "./node_modules/next/dist/client/router.js");
/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_22___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_22__);
/* harmony import */ var _util_analytics_ga__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ../util/analytics/ga */ "./util/analytics/ga.js");
/* harmony import */ var _assets_css_main_css__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ../assets/css/main.css */ "./assets/css/main.css");
/* harmony import */ var _assets_css_main_css__WEBPACK_IMPORTED_MODULE_24___default = /*#__PURE__*/__webpack_require__.n(_assets_css_main_css__WEBPACK_IMPORTED_MODULE_24__);




var _jsxFileName = "/Users/tanamet/Documents/Startup/kaptuer-landing/pages/index.js";
var __jsx = react__WEBPACK_IMPORTED_MODULE_4___default.a.createElement;





 // import Input from '../components/Input'















 // get information to display in that language
// TODO - change this to ssr

var information = __webpack_require__(/*! ../assets/info */ "./assets/info/index.js").th;

react_modal__WEBPACK_IMPORTED_MODULE_10___default.a.setAppElement('#__next');
var buttons = [{
  key: "signup",
  href: "/signup",
  text: "signup",
  primary: false
}, {
  key: "login",
  href: "",
  text: "LOGIN",
  primary: true
}];

var LandingPage = function LandingPage(props) {
  var currentY = 0;

  if (true) {
    // client-side-only code
    currentY = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_20__["useScrollY"])();
  }

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])({
    email: ""
  }),
      state = _useState[0],
      setState = _useState[1];

  Object(react__WEBPACK_IMPORTED_MODULE_4__["useEffect"])(function () {
    // Analytic
    if (!window.GA_INITIALIZED) {
      Object(_util_analytics_ga__WEBPACK_IMPORTED_MODULE_23__["initGA"])();
      Object(_util_analytics_ga__WEBPACK_IMPORTED_MODULE_23__["pageView"])();
      window.GA_INITIALIZED = true;
    }

    console.log("test");
  });

  var _useModal = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_20__["useModal"])(),
      _useModal2 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useModal, 3),
      loginModal = _useModal2[0],
      openLogin = _useModal2[1],
      closeLogin = _useModal2[2];

  var _useModal3 = Object(_util_hooks__WEBPACK_IMPORTED_MODULE_20__["useModal"])(),
      _useModal4 = Object(_babel_runtime_corejs2_helpers_esm_slicedToArray__WEBPACK_IMPORTED_MODULE_3__["default"])(_useModal3, 3),
      signupModal = _useModal4[0],
      openSignup = _useModal4[1],
      closeSignup = _useModal4[2];

  var _useState2 = Object(react__WEBPACK_IMPORTED_MODULE_4__["useState"])(false),
      isLoad = _useState2[0],
      setLoad = _useState2[1];

  var login =
  /*#__PURE__*/
  function () {
    var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_2__["default"])(
    /*#__PURE__*/
    _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.mark(function _callee(payload, method) {
      return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_1___default.a.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return props.logIn(_util_api_libs_signable__WEBPACK_IMPORTED_MODULE_16__["default"][method](payload));

            case 2:
              if (!_context.sent) {
                _context.next = 5;
                break;
              }

              window.location.href = _configs_apis__WEBPACK_IMPORTED_MODULE_17__["default"].APP;
              setLoad(true);

            case 5:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    return function login(_x, _x2) {
      return _ref.apply(this, arguments);
    };
  }();

  var headerButtonOnClick = function headerButtonOnClick(key) {
    if (key === "signup") {
      // open sign-up modal
      // openSignup()
      Object(_util_analytics_ga__WEBPACK_IMPORTED_MODULE_23__["logEvent"])("langingPage", "nav signup");
      next_router__WEBPACK_IMPORTED_MODULE_22___default.a.push('/signup');
    } else if (key === "login") {
      // openLoginModel()
      openLogin();
      Object(_util_analytics_ga__WEBPACK_IMPORTED_MODULE_23__["logEvent"])("langingPage", "nav login");
    }
  };

  var onInputEmailChange = function onInputEmailChange(e) {
    var email = e.target.value;
    setState(Object(_babel_runtime_corejs2_helpers_esm_objectSpread__WEBPACK_IMPORTED_MODULE_0__["default"])({}, state, {
      email: email
    }));
  }; // ********************   just open close modal    ********************************


  var openLoginModel = function openLoginModel() {
    closeSignup();
    openLogin();
  };

  var closeLoginModal = function closeLoginModal() {
    closeLogin();
  };

  var openSignupModal = function openSignupModal() {
    closeLogin();
    openSignup();
  };

  var closeSignupModal = function closeSignupModal() {
    closeSignup();
  };

  var onClickTryFree = function onClickTryFree() {
    Object(_util_analytics_ga__WEBPACK_IMPORTED_MODULE_23__["logEvent"])("langingPage", "try it free button");
    next_router__WEBPACK_IMPORTED_MODULE_22___default.a.push('/signup');
  }; // ********************************************************************************
  // check scrolling for display shadow of header


  var shadow = currentY <= 50 ? false : true;
  if (isLoad) return __jsx(_components_Loader__WEBPACK_IMPORTED_MODULE_21__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 139
    },
    __self: this
  });
  return __jsx("div", {
    className: "Landing-page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 142
    },
    __self: this
  }, __jsx(_components_custom_KaptuerHeader__WEBPACK_IMPORTED_MODULE_5__["default"], {
    logo: "/logo.svg",
    action: headerButtonOnClick,
    buttons: buttons,
    shadow: shadow,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 145
    },
    __self: this
  }), __jsx(_components_Section__WEBPACK_IMPORTED_MODULE_7__["default"], {
    backgroundColor: "white",
    height: "100vh",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 148
    },
    __self: this
  }, __jsx(_components_Stack__WEBPACK_IMPORTED_MODULE_8__["default"], {
    minWidth: "450px",
    maxWidth: "50%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 149
    },
    __self: this
  }, __jsx("div", {
    style: {
      paddingBottom: "37px",
      fontSize: "3rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 152
    },
    __self: this
  }, information.LANDING_MAIN_SLOGAN), __jsx("div", {
    style: {
      paddingBottom: "37px",
      color: "gray"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 155
    },
    __self: this
  }, information.LANDING_MAIN_DEF), __jsx("div", {
    className: "Login-signup-form",
    onClick: onClickTryFree,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 160
    },
    __self: this
  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    customStyle: {
      margin: "0px 12px"
    },
    href: "/signup",
    text: information.LANDING_MAIN_SIGNUP_BUTTON,
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 162
    },
    __self: this
  })))), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_10___default.a, {
    closeTimeoutMS: 180,
    isOpen: signupModal,
    onRequestClose: closeSignupModal,
    contentLabel: "Example Modal",
    className: "Modal-signup",
    overlayClassName: "Modal-Overlay-login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 169
    },
    __self: this
  }, __jsx(_components_Stack__WEBPACK_IMPORTED_MODULE_8__["default"], {
    minWidth: "450px",
    maxWidth: "70%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 179
    },
    __self: this
  }, __jsx("div", {
    style: {
      paddingBottom: "37px",
      fontSize: "3rem",
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 181
    },
    __self: this
  }, information.LANDING_MODAL_TITLE), __jsx("div", {
    style: {
      paddingBottom: "37px",
      color: "gray",
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 185
    },
    __self: this
  }, information.LANDING_MODAL_DESCRIPTION)), __jsx("div", {
    className: "Login-signup-form",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 192
    },
    __self: this
  }, __jsx(_components_Button__WEBPACK_IMPORTED_MODULE_6__["Button"], {
    customStyle: {
      margin: "0px 12px"
    },
    href: "/signup",
    text: information.LANDING_MAIN_SIGNUP_BUTTON,
    primary: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 194
    },
    __self: this
  })), __jsx(_components_Stack__WEBPACK_IMPORTED_MODULE_8__["default"], {
    minWidth: "450px",
    maxWidth: "50%",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 198
    },
    __self: this
  }, __jsx("div", {
    style: {
      paddingTop: "37px",
      color: "gray",
      textAlign: 'center'
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 200
    },
    __self: this
  }, __jsx("p", {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 201
    },
    __self: this
  }, information.LANDING_MODAL_POLICIES[0], " ", __jsx("a", {
    className: "hilightLink",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, "Privacy Policy"), " ", information.LANDING_MODAL_POLICIES[1], " ", __jsx("a", {
    className: "hilightLink",
    href: "/",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 202
    },
    __self: this
  }, "Terms of Service."))))), __jsx(react_modal__WEBPACK_IMPORTED_MODULE_10___default.a, {
    closeTimeoutMS: 180,
    isOpen: loginModal,
    onRequestClose: closeLoginModal,
    className: "Modal-login",
    overlayClassName: "Modal-Overlay-login",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 212
    },
    __self: this
  }, __jsx("label", {
    style: {
      fontSize: "2.5rem"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 221
    },
    __self: this
  }, "Log In"), __jsx(_components_Grid__WEBPACK_IMPORTED_MODULE_9__["default"], {
    gap: "20px",
    customStyle: {
      margin: "25px 0px"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 224
    },
    __self: this
  }, __jsx(react_facebook_login__WEBPACK_IMPORTED_MODULE_12___default.a, {
    appId: _configs_oauth__WEBPACK_IMPORTED_MODULE_15__["FB_TOKEN"],
    autoLoad: false,
    fields: "name,email,picture",
    callback: function callback(res) {
      return login(res, "FacebookSign");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 226
    },
    __self: this
  }), __jsx(react_google_login__WEBPACK_IMPORTED_MODULE_11___default.a, {
    clientId: _configs_oauth__WEBPACK_IMPORTED_MODULE_15__["GOOGLE_TOKEN"],
    buttonText: "Login",
    onSuccess: function onSuccess(res) {
      return login(res, "GoogleSign");
    },
    cookiePolicy: 'single_host_origin',
    __source: {
      fileName: _jsxFileName,
      lineNumber: 232
    },
    __self: this
  })), __jsx(_components_SeperateLine__WEBPACK_IMPORTED_MODULE_13__["TitleSeperateLine"], {
    title: "OR",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 241
    },
    __self: this
  }), __jsx(_components_custom_LoginForm__WEBPACK_IMPORTED_MODULE_14__["default"], {
    onSubmit: function onSubmit(res) {
      return login(res, "LocalSign");
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 244
    },
    __self: this
  }), __jsx("p", {
    style: {
      color: "gray"
    },
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, "Don\u2019t have an account? ", __jsx("label", {
    className: "hilightLink",
    onClick: openSignupModal,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 247
    },
    __self: this
  }, "Sign up"))));
};

var mapStateToProps = function mapStateToProps(state) {
  return {
    user: state.user
  };
};

var mapDispatchToProps = {
  logIn: _store_actions_user__WEBPACK_IMPORTED_MODULE_19__["logIn"]
};
/* harmony default export */ __webpack_exports__["default"] = (Object(react_redux__WEBPACK_IMPORTED_MODULE_18__["connect"])(mapStateToProps, mapDispatchToProps)(LandingPage));

/***/ })

})
//# sourceMappingURL=index.js.b94c10ee8ba7045d3145.hot-update.js.map