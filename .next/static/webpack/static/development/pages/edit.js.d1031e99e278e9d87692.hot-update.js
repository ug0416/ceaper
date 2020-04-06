webpackHotUpdate("static/development/pages/edit.js",{

/***/ "./pages/edit.js":
/*!***********************!*\
  !*** ./pages/edit.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _layouts_base_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../layouts/base.js */ "./layouts/base.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/link */ "./node_modules/next/link.js");
/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _assets_icons_ui_add_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../assets/icons/ui/add.js */ "./assets/icons/ui/add.js");
/* harmony import */ var _assets_icons_ui_setting_solid_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../assets/icons/ui/setting_solid.js */ "./assets/icons/ui/setting_solid.js");
/* harmony import */ var _assets_icons_social_instagram_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../assets/icons/social/instagram.js */ "./assets/icons/social/instagram.js");
/* harmony import */ var _assets_icons_social_facebook_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../assets/icons/social/facebook.js */ "./assets/icons/social/facebook.js");
/* harmony import */ var _assets_icons_social_twitter_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../assets/icons/social/twitter.js */ "./assets/icons/social/twitter.js");
/* harmony import */ var _layouts_shot_user_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../layouts/shot_user.js */ "./layouts/shot_user.js");
/* harmony import */ var _assets_icons_ui_pen_solid_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../assets/icons/ui/pen_solid.js */ "./assets/icons/ui/pen_solid.js");
/* harmony import */ var _assets_icons_ui_cook_solid_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../assets/icons/ui/cook-solid.js */ "./assets/icons/ui/cook-solid.js");
/* harmony import */ var _assets_icons_ui_star_solid_js__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../assets/icons/ui/star-solid.js */ "./assets/icons/ui/star-solid.js");
/* harmony import */ var _layouts_nav_edit_js__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../layouts/nav-edit.js */ "./layouts/nav-edit.js");
var _jsxFileName = "/Users/kerry/ceaper/pages/edit.js";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;













function User() {
  return __jsx("img", {
    src: "images/default/user.jpg",
    alt: "user image",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 16
    },
    __self: this
  });
}

{
  /*入力された文・値は保存*/
}
/* harmony default export */ __webpack_exports__["default"] = (function () {
  return __jsx(_layouts_base_js__WEBPACK_IMPORTED_MODULE_1__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 21
    },
    __self: this
  }, __jsx("div", {
    id: "page",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 22
    },
    __self: this
  }, __jsx("div", {
    "class": "user-row edit-row",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 23
    },
    __self: this
  }, __jsx("div", {
    "class": "contents",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 24
    },
    __self: this
  }, __jsx("div", {
    "class": "section edit-wrapper center-section",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 25
    },
    __self: this
  }, __jsx(_layouts_nav_edit_js__WEBPACK_IMPORTED_MODULE_12__["default"], {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 27
    },
    __self: this
  }), __jsx("div", {
    "class": "edit-inner",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 29
    },
    __self: this
  }, __jsx("div", {
    "class": "edit-section",
    id: "profile",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 32
    },
    __self: this
  }, __jsx("div", {
    "class": "user-container",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 33
    },
    __self: this
  }, __jsx("h3", {
    "class": "edit-section-title section-title edit-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 34
    },
    __self: this
  }, "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB"), __jsx("div", {
    "class": "edit-item edit-user-icon-wrapper",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 35
    },
    __self: this
  }, __jsx("div", {
    "class": "edit-user-icon",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 36
    },
    __self: this
  }, __jsx(User, {
    __source: {
      fileName: _jsxFileName,
      lineNumber: 37
    },
    __self: this
  })), __jsx("button", {
    "class": "button button-black xs-text",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 39
    },
    __self: this
  }, "\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u753B\u50CF\u3092\u30A2\u30C3\u30D7\u30ED\u30FC\u30C9")), __jsx("div", {
    "class": "edit-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 42
    },
    __self: this
  }, __jsx("label", {
    "class": "edit-title edit-required",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 43
    },
    __self: this
  }, "\u540D\u524D"), __jsx("input", {
    "class": "input-inner edit-input-inner",
    autocomplete: "username",
    type: "text",
    value: "\u30B1\u30EA\u30FC\u5C0F\u7530",
    required: true,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 44
    },
    __self: this
  })), __jsx("div", {
    "class": "edit-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 47
    },
    __self: this
  }, __jsx("label", {
    "class": "edit-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 48
    },
    __self: this
  }, "\u81EA\u5DF1\u7D39\u4ECB"), __jsx("textarea", {
    "class": "edit-area",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 49
    },
    __self: this
  }, "\u79C1\u306F\u3001\u6599\u7406\u304C\u5927\u597D\u304D\u306A\u751F\u7C8B\u306E\u30AD\u30E3\u30F3\u30D1\u30FC\u3067\u3059\u3002\u90317\u3067\u3001\u30AD\u30E3\u30F3\u30D7\u306B\u884C\u3063\u3066\u3044\u307E\u3059\uFF01\u3088\u304F\u51FA\u6CA1\u3059\u308B\u5834\u6240\u306F\u9AD8\u5C3E\u5C71\u3067\u3059\u3002")))), __jsx("div", {
    "class": "edit-section",
    id: "settings",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 55
    },
    __self: this
  }, __jsx("h3", {
    "class": "edit-section-title section-title edit-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 56
    },
    __self: this
  }, "\u30A2\u30AB\u30A6\u30F3\u30C8\u8A2D\u5B9A"), __jsx("div", {
    "class": "edit-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 57
    },
    __self: this
  }, __jsx("label", {
    "class": "edit-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 58
    },
    __self: this
  }, "E\u30E1\u30FC\u30EB"), __jsx("input", {
    "class": "input-inner edit-input-inner",
    autocorrect: "off",
    autocapitalize: "off",
    autocomplete: "useremail",
    type: "text",
    value: "user@gmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 59
    },
    __self: this
  }))), __jsx("div", {
    "class": "edit-section",
    id: "password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 64
    },
    __self: this
  }, __jsx("h3", {
    "class": "edit-section-title section-title edit-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 65
    },
    __self: this
  }, "\u30D1\u30B9\u30EF\u30FC\u30C9"), __jsx("div", {
    "class": "edit-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 66
    },
    __self: this
  }, __jsx("label", {
    "class": "edit-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 67
    },
    __self: this
  }, "\u73FE\u5728\u306E\u30D1\u30B9\u30EF\u30FC\u30C9"), __jsx("input", {
    "class": "input-inner edit-input-inner",
    autocomplete: "userpassword",
    type: "password",
    value: "user@gmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 68
    },
    __self: this
  })), __jsx("div", {
    "class": "edit-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 70
    },
    __self: this
  }, __jsx("label", {
    "class": "edit-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 71
    },
    __self: this
  }, "\u65B0\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9"), __jsx("input", {
    "class": "input-inner edit-input-inner",
    type: "password",
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 72
    },
    __self: this
  }))), __jsx("div", {
    "class": "edit-section",
    id: "password",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 77
    },
    __self: this
  }, __jsx("h3", {
    "class": "edit-section-title section-title edit-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 78
    },
    __self: this
  }, "\u30D1\u30B9\u30EF\u30FC\u30C9"), __jsx("div", {
    "class": "edit-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 79
    },
    __self: this
  }, __jsx("label", {
    "class": "edit-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 80
    },
    __self: this
  }, "\u73FE\u5728\u306E\u30D1\u30B9\u30EF\u30FC\u30C9"), __jsx("input", {
    "class": "input-inner edit-input-inner",
    autocomplete: "userpassword",
    type: "password",
    value: "user@gmail.com",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 81
    },
    __self: this
  })), __jsx("div", {
    "class": "edit-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 83
    },
    __self: this
  }, __jsx("label", {
    "class": "edit-title",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 84
    },
    __self: this
  }, "\u65B0\u3057\u3044\u30D1\u30B9\u30EF\u30FC\u30C9"), __jsx("input", {
    "class": "input-inner edit-input-inner",
    type: "password",
    value: "",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 85
    },
    __self: this
  }))), __jsx("div", {
    "class": "edit-section",
    id: "save",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 95
    },
    __self: this
  }, __jsx("div", {
    "class": "edit-item",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 96
    },
    __self: this
  }, __jsx("a", {
    "class": "button button-accent",
    __source: {
      fileName: _jsxFileName,
      lineNumber: 97
    },
    __self: this
  }, "\u4FDD\u5B58\u3059\u308B")))))))));
});

/***/ })

})
//# sourceMappingURL=edit.js.d1031e99e278e9d87692.hot-update.js.map