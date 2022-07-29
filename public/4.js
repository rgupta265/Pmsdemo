(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[4],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Login.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Login.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'login'
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Login.vue?vue&type=template&id=0004d9e0&":
/*!***************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Login.vue?vue&type=template&id=0004d9e0& ***!
  \***************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "about" }, [
    _c("div", { staticClass: "container" }, [
      _c("div", { staticClass: "row vh-100 d-flex justify-content-center" }, [
        _c("div", { staticClass: "col-12 align-self-center" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-lg-5 mx-auto" }, [
              _c("div", { staticClass: "card" }, [
                _c(
                  "ul",
                  {
                    staticClass: "nav-second-level",
                    attrs: { "aria-expanded": "false" }
                  },
                  [
                    _c(
                      "li",
                      { staticClass: "nav-item" },
                      [
                        _c(
                          "router-link",
                          { attrs: { to: { name: "dashboard" } } },
                          [_vm._v("Dashboard")]
                        )
                      ],
                      1
                    )
                  ]
                ),
                _vm._v(" "),
                _vm._m(0),
                _vm._v(" "),
                _vm._m(1),
                _vm._v(" "),
                _vm._m(2)
              ])
            ])
          ])
        ])
      ])
    ])
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body p-0 auth-header-box" }, [
      _c("div", { staticClass: "text-center p-3" }, [
        _c(
          "a",
          { staticClass: "logo logo-admin", attrs: { href: "index.html" } },
          [
            _c("img", {
              staticClass: "auth-logo",
              attrs: {
                src: "assets/images/logo-sm-dark.png",
                height: "50",
                alt: "logo"
              }
            })
          ]
        ),
        _vm._v(" "),
        _c(
          "h4",
          { staticClass: "mt-3 mb-1 font-weight-semibold text-white font-18" },
          [_vm._v("Let's Get Started Dastone")]
        ),
        _vm._v(" "),
        _c("p", { staticClass: "text-muted  mb-0" }, [
          _vm._v("Sign in to continue to Dastone.")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body p-0" }, [
      _c(
        "ul",
        { staticClass: "nav-border nav nav-pills", attrs: { role: "tablist" } },
        [
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link active font-weight-semibold",
                attrs: { "data-toggle": "tab", href: "#LogIn_Tab", role: "tab" }
              },
              [_vm._v("Log In")]
            )
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "nav-item" }, [
            _c(
              "a",
              {
                staticClass: "nav-link font-weight-semibold",
                attrs: {
                  "data-toggle": "tab",
                  href: "#Register_Tab",
                  role: "tab"
                }
              },
              [_vm._v("Register")]
            )
          ])
        ]
      ),
      _vm._v(" "),
      _c("div", { staticClass: "tab-content" }, [
        _c(
          "div",
          {
            staticClass: "tab-pane active p-3",
            attrs: { id: "LogIn_Tab", role: "tabpanel" }
          },
          [
            _c(
              "form",
              {
                staticClass: "form-horizontal auth-form",
                attrs: {
                  action: "https://mannatthemes.com/dastone/default/index.html"
                }
              },
              [
                _c("div", { staticClass: "form-group mb-2" }, [
                  _c("label", { attrs: { for: "username" } }, [
                    _vm._v("Username")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _c("input", {
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "username",
                        id: "username",
                        placeholder: "Enter username"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group mb-2" }, [
                  _c("label", { attrs: { for: "userpassword" } }, [
                    _vm._v("Password")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _c("input", {
                      staticClass: "form-control",
                      attrs: {
                        type: "password",
                        name: "password",
                        id: "userpassword",
                        placeholder: "Enter password"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row my-3" }, [
                  _c("div", { staticClass: "col-sm-6" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "custom-control custom-switch switch-success"
                      },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: { type: "checkbox", id: "customSwitchSuccess" }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label text-muted",
                            attrs: { for: "customSwitchSuccess" }
                          },
                          [_vm._v("Remember me")]
                        )
                      ]
                    )
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "col-sm-6 text-right" }, [
                    _c(
                      "a",
                      {
                        staticClass: "text-muted font-13",
                        attrs: { href: "auth-recover-pw.html" }
                      },
                      [
                        _c("i", { staticClass: "dripicons-lock" }),
                        _vm._v(" Forgot password?")
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group mb-0 row" }, [
                  _c("div", { staticClass: "col-12" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-primary btn-block waves-effect waves-light",
                        attrs: { type: "button" }
                      },
                      [
                        _vm._v("Log In "),
                        _c("i", { staticClass: "fas fa-sign-in-alt ml-1" })
                      ]
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "m-3 text-center text-muted" }, [
              _c("p", { staticClass: "mb-0" }, [
                _vm._v("Don't have an account ?  "),
                _c(
                  "a",
                  {
                    staticClass: "text-primary ml-2",
                    attrs: { href: "auth-register.html" }
                  },
                  [_vm._v("Free Resister")]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "account-social" }, [
              _c("h6", { staticClass: "mb-3" }, [_vm._v("Or Login With")])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "btn-group btn-block" }, [
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-outline-secondary",
                  attrs: { type: "button" }
                },
                [_vm._v("Facebook")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-outline-secondary",
                  attrs: { type: "button" }
                },
                [_vm._v("Twitter")]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "btn btn-sm btn-outline-secondary",
                  attrs: { type: "button" }
                },
                [_vm._v("Google")]
              )
            ])
          ]
        ),
        _vm._v(" "),
        _c(
          "div",
          {
            staticClass: "tab-pane px-3 pt-3",
            attrs: { id: "Register_Tab", role: "tabpanel" }
          },
          [
            _c(
              "form",
              {
                staticClass: "form-horizontal auth-form",
                attrs: {
                  action: "https://mannatthemes.com/dastone/default/index.html"
                }
              },
              [
                _c("div", { staticClass: "form-group mb-2" }, [
                  _c("label", { attrs: { for: "username" } }, [
                    _vm._v("Username")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _c("input", {
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "username",
                        id: "username",
                        placeholder: "Enter username"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group mb-2" }, [
                  _c("label", { attrs: { for: "useremail" } }, [
                    _vm._v("Email")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _c("input", {
                      staticClass: "form-control",
                      attrs: {
                        type: "email",
                        name: "email",
                        id: "useremail",
                        placeholder: "Enter Email"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group mb-2" }, [
                  _c("label", { attrs: { for: "userpassword" } }, [
                    _vm._v("Password")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _c("input", {
                      staticClass: "form-control",
                      attrs: {
                        type: "password",
                        name: "password",
                        id: "userpassword",
                        placeholder: "Enter password"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group mb-2" }, [
                  _c("label", { attrs: { for: "conf_password" } }, [
                    _vm._v("Confirm Password")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _c("input", {
                      staticClass: "form-control",
                      attrs: {
                        type: "password",
                        name: "conf-password",
                        id: "conf_password",
                        placeholder: "Enter Confirm Password"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group mb-2" }, [
                  _c("label", { attrs: { for: "mo_number" } }, [
                    _vm._v("Mobile Number")
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "input-group" }, [
                    _c("input", {
                      staticClass: "form-control",
                      attrs: {
                        type: "text",
                        name: "mobile number",
                        id: "mo_number",
                        placeholder: "Enter Mobile Number"
                      }
                    })
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group row my-3" }, [
                  _c("div", { staticClass: "col-sm-12" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "custom-control custom-switch switch-success"
                      },
                      [
                        _c("input", {
                          staticClass: "custom-control-input",
                          attrs: {
                            type: "checkbox",
                            id: "customSwitchSuccess2"
                          }
                        }),
                        _vm._v(" "),
                        _c(
                          "label",
                          {
                            staticClass: "custom-control-label text-muted",
                            attrs: { for: "customSwitchSuccess2" }
                          },
                          [
                            _vm._v("You agree to the Metrica "),
                            _c(
                              "a",
                              {
                                staticClass: "text-primary",
                                attrs: { href: "#" }
                              },
                              [_vm._v("Terms of Use")]
                            )
                          ]
                        )
                      ]
                    )
                  ])
                ]),
                _vm._v(" "),
                _c("div", { staticClass: "form-group mb-0 row" }, [
                  _c("div", { staticClass: "col-12" }, [
                    _c(
                      "button",
                      {
                        staticClass:
                          "btn btn-primary btn-block waves-effect waves-light",
                        attrs: { type: "button" }
                      },
                      [
                        _vm._v("Register "),
                        _c("i", { staticClass: "fas fa-sign-in-alt ml-1" })
                      ]
                    )
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c("p", { staticClass: "my-3 text-muted" }, [
              _vm._v("Already have an account ?"),
              _c(
                "a",
                {
                  staticClass: "text-primary ml-2",
                  attrs: { href: "auth-login.html" }
                },
                [_vm._v("Log in")]
              )
            ])
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "card-body bg-light-alt text-center" }, [
      _c("span", { staticClass: "text-muted d-none d-sm-inline-block" }, [
        _vm._v("Mannatthemes © 2020")
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Login.vue":
/*!**************************************!*\
  !*** ./resources/js/Pages/Login.vue ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Login_vue_vue_type_template_id_0004d9e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Login.vue?vue&type=template&id=0004d9e0& */ "./resources/js/Pages/Login.vue?vue&type=template&id=0004d9e0&");
/* harmony import */ var _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Login.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Login_vue_vue_type_template_id_0004d9e0___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Login_vue_vue_type_template_id_0004d9e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Login.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Login.vue?vue&type=script&lang=js&":
/*!***************************************************************!*\
  !*** ./resources/js/Pages/Login.vue?vue&type=script&lang=js& ***!
  \***************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Login.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Login.vue?vue&type=template&id=0004d9e0&":
/*!*********************************************************************!*\
  !*** ./resources/js/Pages/Login.vue?vue&type=template&id=0004d9e0& ***!
  \*********************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_0004d9e0___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/vue-loader/lib??vue-loader-options!./Login.vue?vue&type=template&id=0004d9e0& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Login.vue?vue&type=template&id=0004d9e0&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_0004d9e0___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Login_vue_vue_type_template_id_0004d9e0___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);