webpackHotUpdate("static/development/pages/index.js",{

/***/ "./util/api/controllers/user.js":
/*!**************************************!*\
  !*** ./util/api/controllers/user.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/regenerator */ "./node_modules/@babel/runtime-corejs2/regenerator/index.js");
/* harmony import */ var _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/asyncToGenerator */ "./node_modules/@babel/runtime-corejs2/helpers/esm/asyncToGenerator.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _configs_apis__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../configs/apis */ "./configs/apis.js");
/* harmony import */ var _libs_authorizationManager__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../libs/authorizationManager */ "./util/api/libs/authorizationManager.js");
/* harmony import */ var _libs_executeHandler__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../libs/executeHandler */ "./util/api/libs/executeHandler.js");






var USER = _configs_apis__WEBPACK_IMPORTED_MODULE_3__["default"].USER;

var createUser =
/*#__PURE__*/
function () {
  var _ref = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(payload, errorHandler) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(USER + "/user", payload)["catch"](Object(_libs_executeHandler__WEBPACK_IMPORTED_MODULE_5__["default"])(errorHandler));

          case 2:
            return _context.abrupt("return", _context.sent);

          case 3:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));

  return function createUser(_x, _x2) {
    return _ref.apply(this, arguments);
  };
}();

var login =
/*#__PURE__*/
function () {
  var _ref2 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee2(payload, errorHandler) {
    var res, token;
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee2$(_context2) {
      while (1) {
        switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.post(USER + "/user/validate", payload)["catch"](Object(_libs_executeHandler__WEBPACK_IMPORTED_MODULE_5__["default"])(errorHandler));

          case 2:
            res = _context2.sent;

            if (res) {
              _context2.next = 5;
              break;
            }

            return _context2.abrupt("return", res);

          case 5:
            token = res.data.token; // save token

            if (token) {
              _libs_authorizationManager__WEBPACK_IMPORTED_MODULE_4__["default"].setToken(token);
            }

            return _context2.abrupt("return", res);

          case 8:
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

var logout = function logout() {
  // remove token
  _libs_authorizationManager__WEBPACK_IMPORTED_MODULE_4__["default"].clear();
};

var isLogin = function isLogin() {
  var token = _libs_authorizationManager__WEBPACK_IMPORTED_MODULE_4__["default"].loadToken();
  return token ? token.length > 0 : false;
};

var requestVerify =
/*#__PURE__*/
function () {
  var _ref3 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee3(errorHandler) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee3$(_context3) {
      while (1) {
        switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(USER + "/user/requestVerify", payload)["catch"](Object(_libs_executeHandler__WEBPACK_IMPORTED_MODULE_5__["default"])(errorHandler));

          case 2:
            return _context3.abrupt("return", _context3.sent);

          case 3:
          case "end":
            return _context3.stop();
        }
      }
    }, _callee3);
  }));

  return function requestVerify(_x5) {
    return _ref3.apply(this, arguments);
  };
}();

var requestRecoveryPassword =
/*#__PURE__*/
function () {
  var _ref4 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee4(errorHandler) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee4$(_context4) {
      while (1) {
        switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(USER + "/user/forgetPassword", payload)["catch"](Object(_libs_executeHandler__WEBPACK_IMPORTED_MODULE_5__["default"])(errorHandler));

          case 2:
            return _context4.abrupt("return", _context4.sent);

          case 3:
          case "end":
            return _context4.stop();
        }
      }
    }, _callee4);
  }));

  return function requestRecoveryPassword(_x6) {
    return _ref4.apply(this, arguments);
  };
}();

var resetPassword =
/*#__PURE__*/
function () {
  var _ref5 = Object(_babel_runtime_corejs2_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__["default"])(
  /*#__PURE__*/
  _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee5(payload, errorHandler) {
    return _babel_runtime_corejs2_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee5$(_context5) {
      while (1) {
        switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get(USER + "/user/resetPassword", payload)["catch"](Object(_libs_executeHandler__WEBPACK_IMPORTED_MODULE_5__["default"])(errorHandler));

          case 2:
            return _context5.abrupt("return", _context5.sent);

          case 3:
          case "end":
            return _context5.stop();
        }
      }
    }, _callee5);
  }));

  return function resetPassword(_x7, _x8) {
    return _ref5.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = ({
  createUser: createUser,
  login: login,
  logout: logout,
  isLogin: isLogin,
  requestRecoveryPassword: requestRecoveryPassword,
  requestVerify: requestVerify,
  resetPassword: resetPassword
});

/***/ })

})
//# sourceMappingURL=index.js.4d0034f5699733359ead.hot-update.js.map