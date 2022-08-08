(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resource/js/Pages/About.vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Layouts/Alert.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Layouts/Alert.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: "alert",
  props: {
    data: Object
  },
  data: function data() {
    return {};
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    errors: "getError"
  }))
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Layouts/Breadcrumb.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Layouts/Breadcrumb.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************************************************************************************************/
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
/* harmony default export */ __webpack_exports__["default"] = ({
  name: "breadcrumb",
  data: function data() {
    return {
      breadcrumbList: [],
      pageTitle: ''
    };
  },
  mounted: function mounted() {
    this.breadcrumbList = this.$route.meta.breadcrumb;
    this.pageTitle = this.$route.meta.title;
  },
  watch: {
    $route: function $route() {
      this.breadcrumbList = this.$route.meta.breadcrumb;
    }
  },
  methods: {
    to: function to(item) {
      if (item.link) {
        this.$router.push({
          name: item.link
        });
      }
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_js_Components_Layouts_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .../../../resources/js/Components/Layouts/Breadcrumb */ "./resources/js/Components/Layouts/Breadcrumb.vue");
/* harmony import */ var _resources_js_Components_Layouts_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .../../../resources/js/Components/Layouts/Alert */ "./resources/js/Components/Layouts/Alert.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

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
  name: "viewprofile",
  components: {
    Breadcrumb: _resources_js_Components_Layouts_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__["default"],
    Alert: _resources_js_Components_Layouts_Alert__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      userPass: {
        new_password: "",
        confirm_password: ""
      },
      showError: false
    };
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])({
    userDetails: "getUserDetails",
    errors: "getError"
  })), {}, {
    isLoggedIn: function isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  }),
  methods: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapActions"])(["ChangePassword"])), {}, {
    changePassword: function changePassword() {
      var _this = this;

      var data = {
        old_password: this.userPass.old_password,
        new_password: this.userPass.new_password,
        confirm_password: this.userPass.confirm_password
      };
      this.$store.dispatch("ChangePassword", data).then(function (resp) {
        _this.showError = false;

        _this.$toast.success(resp.data.success, {});

        _this.$store.dispatch("logout");

        _this.$router.push("/");
      })["catch"](function (err) {// this.showError = true;
      });
    }
  })
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Layouts/Alert.vue?vue&type=template&id=193822fb&":
/*!****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Layouts/Alert.vue?vue&type=template&id=193822fb& ***!
  \****************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "alert" }, [
    _vm.data
      ? _c("span", [
          _c(
            "div",
            {
              staticClass: "alert alert-success alert-dismissible fade show",
              attrs: { role: "alert" }
            },
            [
              _vm._v("\n      " + _vm._s(_vm.data) + "\n      "),
              _c("button", {
                staticClass: "btn-close",
                attrs: {
                  type: "button",
                  "data-bs-dismiss": "alert",
                  "aria-label": "Close"
                }
              })
            ]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _vm.errors
      ? _c(
          "span",
          _vm._l(_vm.errors, function(error) {
            return _c(
              "div",
              {
                key: error,
                staticClass: "alert alert-danger alert-dismissible fade show",
                attrs: { role: "alert" }
              },
              [
                _vm._v("\n      " + _vm._s(error[0]) + "\n      "),
                _c("button", {
                  staticClass: "btn-close",
                  attrs: {
                    type: "button",
                    "data-bs-dismiss": "alert",
                    "aria-label": "Close"
                  }
                })
              ]
            )
          }),
          0
        )
      : _vm._e()
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Layouts/Breadcrumb.vue?vue&type=template&id=11cf4074&":
/*!*********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Layouts/Breadcrumb.vue?vue&type=template&id=11cf4074& ***!
  \*********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "pagetitle" }, [
    _c("h1", [_vm._v(_vm._s(this.pageTitle))]),
    _vm._v(" "),
    _c("nav", [
      _c(
        "ol",
        { staticClass: "breadcrumb" },
        _vm._l(_vm.breadcrumbList, function(item, index) {
          return _c("li", { key: index, staticClass: "breadcrumb-item" }, [
            item.link
              ? _c(
                  "span",
                  {
                    attrs: { role: "button" },
                    on: {
                      click: function($event) {
                        return _vm.to(item)
                      }
                    }
                  },
                  [_vm._v(_vm._s(item.name))]
                )
              : _c("strong", { staticClass: "breadcrumb-item active" }, [
                  _vm._v(_vm._s(item.name))
                ])
          ])
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=template&id=cfb24ef6&":
/*!***********************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=template&id=cfb24ef6& ***!
  \***********************************************************************************************************************************************************************************************************************/
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
  return _c("div", { staticClass: "viewprofile" }, [
    _c(
      "main",
      { staticClass: "main", attrs: { id: "main" } },
      [
        _c("Breadcrumb"),
        _vm._v(" "),
        _c("section", { staticClass: "section profile" }, [
          _c("div", { staticClass: "row" }, [
            _c("div", { staticClass: "col-xl-4" }, [
              _c("div", { staticClass: "card" }, [
                _c(
                  "div",
                  {
                    staticClass:
                      "\n                  card-body\n                  profile-card\n                  pt-4\n                  d-flex\n                  flex-column\n                  align-items-center\n                "
                  },
                  [
                    _c("img", {
                      staticClass: "rounded-circle",
                      attrs: {
                        src: "backendTheme/assets/img/profile-img.jpg",
                        alt: "Profile"
                      }
                    }),
                    _vm._v(" "),
                    _c("h2", [_vm._v(_vm._s(_vm.userDetails.name))]),
                    _vm._v(" "),
                    _c("h3", [_vm._v("Web Designer")]),
                    _vm._v(" "),
                    _c("h3", [_vm._v(_vm._s(_vm.userDetails.email))]),
                    _vm._v(" "),
                    _vm._m(0)
                  ]
                )
              ])
            ]),
            _vm._v(" "),
            _c("div", { staticClass: "col-xl-8" }, [
              _c("div", { staticClass: "card" }, [
                _c("div", { staticClass: "card-body pt-3" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c("div", { staticClass: "tab-content pt-2" }, [
                    _c(
                      "div",
                      {
                        staticClass:
                          "tab-pane fade show active profile-overview",
                        attrs: { id: "profile-overview" }
                      },
                      [
                        _c("h5", { staticClass: "card-title" }, [
                          _vm._v("About")
                        ]),
                        _vm._v(" "),
                        _c("p", { staticClass: "small fst-italic" }, [
                          _vm._v(
                            "\n                      Sunt est soluta temporibus accusantium neque nam maiores\n                      cumque temporibus. Tempora libero non est unde veniam est\n                      qui dolor. Ut sunt iure rerum quae quisquam autem eveniet\n                      perspiciatis odit. Fuga sequi sed ea saepe at unde.\n                    "
                          )
                        ]),
                        _vm._v(" "),
                        _c("h5", { staticClass: "card-title" }, [
                          _vm._v("Profile Details")
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-lg-3 col-md-4 label" },
                            [_vm._v("Full Name")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.userDetails.name) +
                                "\n                      "
                            )
                          ])
                        ]),
                        _vm._v(" "),
                        _vm._m(2),
                        _vm._v(" "),
                        _vm._m(3),
                        _vm._v(" "),
                        _vm._m(4),
                        _vm._v(" "),
                        _vm._m(5),
                        _vm._v(" "),
                        _vm._m(6),
                        _vm._v(" "),
                        _c("div", { staticClass: "row" }, [
                          _c(
                            "div",
                            { staticClass: "col-lg-3 col-md-4 label" },
                            [_vm._v("Email")]
                          ),
                          _vm._v(" "),
                          _c("div", { staticClass: "col-lg-9 col-md-8" }, [
                            _vm._v(
                              "\n                        " +
                                _vm._s(_vm.userDetails.email) +
                                "\n                      "
                            )
                          ])
                        ])
                      ]
                    ),
                    _vm._v(" "),
                    _vm._m(7),
                    _vm._v(" "),
                    _c(
                      "div",
                      {
                        staticClass: "tab-pane fade pt-3",
                        attrs: { id: "profile-change-password" }
                      },
                      [
                        _c("Alert", { attrs: { data: _vm.showError } }),
                        _vm._v(" "),
                        _c(
                          "form",
                          {
                            attrs: { method: "post", action: "" },
                            on: {
                              submit: function($event) {
                                $event.preventDefault()
                                return _vm.changePassword($event)
                              }
                            }
                          },
                          [
                            _c("div", { staticClass: "row mb-3" }, [
                              _c(
                                "label",
                                {
                                  staticClass:
                                    "col-md-4 col-lg-3 col-form-label",
                                  attrs: { for: "newPassword" }
                                },
                                [_vm._v("New Password")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-8 col-lg-9" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.userPass.new_password,
                                      expression: "userPass.new_password"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "password" },
                                  domProps: {
                                    value: _vm.userPass.new_password
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.userPass,
                                        "new_password",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "row mb-3" }, [
                              _c(
                                "label",
                                {
                                  staticClass:
                                    "col-md-4 col-lg-3 col-form-label",
                                  attrs: { for: "renewPassword" }
                                },
                                [_vm._v("Confirm New Password")]
                              ),
                              _vm._v(" "),
                              _c("div", { staticClass: "col-md-8 col-lg-9" }, [
                                _c("input", {
                                  directives: [
                                    {
                                      name: "model",
                                      rawName: "v-model",
                                      value: _vm.userPass.confirm_password,
                                      expression: "userPass.confirm_password"
                                    }
                                  ],
                                  staticClass: "form-control",
                                  attrs: { type: "password" },
                                  domProps: {
                                    value: _vm.userPass.confirm_password
                                  },
                                  on: {
                                    input: function($event) {
                                      if ($event.target.composing) {
                                        return
                                      }
                                      _vm.$set(
                                        _vm.userPass,
                                        "confirm_password",
                                        $event.target.value
                                      )
                                    }
                                  }
                                })
                              ])
                            ]),
                            _vm._v(" "),
                            _vm._m(8)
                          ]
                        )
                      ],
                      1
                    )
                  ])
                ])
              ])
            ])
          ])
        ])
      ],
      1
    )
  ])
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "social-links mt-2" }, [
      _c("a", { staticClass: "twitter", attrs: { href: "#" } }, [
        _c("i", { staticClass: "bi bi-twitter" })
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "facebook", attrs: { href: "#" } }, [
        _c("i", { staticClass: "bi bi-facebook" })
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "instagram", attrs: { href: "#" } }, [
        _c("i", { staticClass: "bi bi-instagram" })
      ]),
      _vm._v(" "),
      _c("a", { staticClass: "linkedin", attrs: { href: "#" } }, [
        _c("i", { staticClass: "bi bi-linkedin" })
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("ul", { staticClass: "nav nav-tabs nav-tabs-bordered" }, [
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "button",
          {
            staticClass: "nav-link active",
            attrs: {
              "data-bs-toggle": "tab",
              "data-bs-target": "#profile-overview"
            }
          },
          [_vm._v("\n                      Overview\n                    ")]
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "button",
          {
            staticClass: "nav-link",
            attrs: {
              "data-bs-toggle": "tab",
              "data-bs-target": "#profile-edit"
            }
          },
          [_vm._v("\n                      Edit Profile\n                    ")]
        )
      ]),
      _vm._v(" "),
      _c("li", { staticClass: "nav-item" }, [
        _c(
          "button",
          {
            staticClass: "nav-link",
            attrs: {
              "data-bs-toggle": "tab",
              "data-bs-target": "#profile-change-password"
            }
          },
          [
            _vm._v(
              "\n                      Change Password\n                    "
            )
          ]
        )
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-3 col-md-4 label" }, [
        _vm._v("Company")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-9 col-md-8" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-3 col-md-4 label" }, [_vm._v("Job")]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-9 col-md-8" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-3 col-md-4 label" }, [
        _vm._v("Country")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-9 col-md-8" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-3 col-md-4 label" }, [
        _vm._v("Address")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-9 col-md-8" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "row" }, [
      _c("div", { staticClass: "col-lg-3 col-md-4 label" }, [_vm._v("Phone")]),
      _vm._v(" "),
      _c("div", { staticClass: "col-lg-9 col-md-8" })
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      {
        staticClass: "tab-pane fade profile-edit pt-3",
        attrs: { id: "profile-edit" }
      },
      [
        _c("form", [
          _c("div", { staticClass: "row mb-3" }, [
            _c(
              "label",
              {
                staticClass: "col-md-4 col-lg-3 col-form-label",
                attrs: { for: "profileImage" }
              },
              [_vm._v("Profile Image")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-8 col-lg-9" }, [
              _c("img", {
                attrs: {
                  src: "backendTheme/assets/img/profile-img.jpg",
                  alt: "Profile"
                }
              }),
              _vm._v(" "),
              _c("div", { staticClass: "pt-2" }, [
                _c(
                  "a",
                  {
                    staticClass: "btn btn-primary btn-sm",
                    attrs: { href: "#", title: "Upload new profile image" }
                  },
                  [_c("i", { staticClass: "bi bi-upload" })]
                ),
                _vm._v(" "),
                _c(
                  "a",
                  {
                    staticClass: "btn btn-danger btn-sm",
                    attrs: { href: "#", title: "Remove my profile image" }
                  },
                  [_c("i", { staticClass: "bi bi-trash" })]
                )
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mb-3" }, [
            _c(
              "label",
              {
                staticClass: "col-md-4 col-lg-3 col-form-label",
                attrs: { for: "fullName" }
              },
              [_vm._v("Full Name")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-8 col-lg-9" }, [
              _c("input", {
                staticClass: "form-control",
                attrs: {
                  name: "fullName",
                  type: "text",
                  id: "fullName",
                  value: ""
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mb-3" }, [
            _c(
              "label",
              {
                staticClass: "col-md-4 col-lg-3 col-form-label",
                attrs: { for: "about" }
              },
              [_vm._v("About")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-8 col-lg-9" }, [
              _c(
                "textarea",
                {
                  staticClass: "form-control",
                  staticStyle: { height: "100px" },
                  attrs: { name: "about", id: "about" }
                },
                [
                  _vm._v(
                    "Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde."
                  )
                ]
              )
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mb-3" }, [
            _c(
              "label",
              {
                staticClass: "col-md-4 col-lg-3 col-form-label",
                attrs: { for: "company" }
              },
              [_vm._v("Company")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-8 col-lg-9" }, [
              _c("input", {
                staticClass: "form-control",
                attrs: {
                  name: "company",
                  type: "text",
                  id: "company",
                  value: ""
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mb-3" }, [
            _c(
              "label",
              {
                staticClass: "col-md-4 col-lg-3 col-form-label",
                attrs: { for: "Job" }
              },
              [_vm._v("Job")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-8 col-lg-9" }, [
              _c("input", {
                staticClass: "form-control",
                attrs: { name: "job", type: "text", id: "Job", value: "" }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mb-3" }, [
            _c(
              "label",
              {
                staticClass: "col-md-4 col-lg-3 col-form-label",
                attrs: { for: "Country" }
              },
              [_vm._v("Country")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-8 col-lg-9" }, [
              _c("input", {
                staticClass: "form-control",
                attrs: {
                  name: "country",
                  type: "text",
                  id: "Country",
                  value: ""
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mb-3" }, [
            _c(
              "label",
              {
                staticClass: "col-md-4 col-lg-3 col-form-label",
                attrs: { for: "Address" }
              },
              [_vm._v("Address")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-8 col-lg-9" }, [
              _c("input", {
                staticClass: "form-control",
                attrs: {
                  name: "address",
                  type: "text",
                  id: "Address",
                  value: ""
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mb-3" }, [
            _c(
              "label",
              {
                staticClass: "col-md-4 col-lg-3 col-form-label",
                attrs: { for: "Phone" }
              },
              [_vm._v("Phone")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-8 col-lg-9" }, [
              _c("input", {
                staticClass: "form-control",
                attrs: { name: "phone", type: "text", id: "Phone", value: "" }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mb-3" }, [
            _c(
              "label",
              {
                staticClass: "col-md-4 col-lg-3 col-form-label",
                attrs: { for: "Email" }
              },
              [_vm._v("Email")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-8 col-lg-9" }, [
              _c("input", {
                staticClass: "form-control",
                attrs: { name: "email", type: "email", id: "Email", value: "" }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mb-3" }, [
            _c(
              "label",
              {
                staticClass: "col-md-4 col-lg-3 col-form-label",
                attrs: { for: "Twitter" }
              },
              [_vm._v("Twitter Profile")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-8 col-lg-9" }, [
              _c("input", {
                staticClass: "form-control",
                attrs: {
                  name: "twitter",
                  type: "text",
                  id: "Twitter",
                  value: ""
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mb-3" }, [
            _c(
              "label",
              {
                staticClass: "col-md-4 col-lg-3 col-form-label",
                attrs: { for: "Facebook" }
              },
              [_vm._v("Facebook Profile")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-8 col-lg-9" }, [
              _c("input", {
                staticClass: "form-control",
                attrs: {
                  name: "facebook",
                  type: "text",
                  id: "Facebook",
                  value: ""
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mb-3" }, [
            _c(
              "label",
              {
                staticClass: "col-md-4 col-lg-3 col-form-label",
                attrs: { for: "Instagram" }
              },
              [_vm._v("Instagram Profile")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-8 col-lg-9" }, [
              _c("input", {
                staticClass: "form-control",
                attrs: {
                  name: "instagram",
                  type: "text",
                  id: "Instagram",
                  value: ""
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "row mb-3" }, [
            _c(
              "label",
              {
                staticClass: "col-md-4 col-lg-3 col-form-label",
                attrs: { for: "Linkedin" }
              },
              [_vm._v("Linkedin Profile")]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "col-md-8 col-lg-9" }, [
              _c("input", {
                staticClass: "form-control",
                attrs: {
                  name: "linkedin",
                  type: "text",
                  id: "Linkedin",
                  value: ""
                }
              })
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "text-center" }, [
            _c(
              "button",
              { staticClass: "btn btn-primary", attrs: { type: "submit" } },
              [
                _vm._v(
                  "\n                          Save Changes\n                        "
                )
              ]
            )
          ])
        ])
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "text-center" }, [
      _c(
        "button",
        { staticClass: "btn btn-primary", attrs: { type: "submit" } },
        [
          _vm._v(
            "\n                          Change Password\n                        "
          )
        ]
      )
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Components/Layouts/Alert.vue":
/*!***************************************************!*\
  !*** ./resources/js/Components/Layouts/Alert.vue ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Alert_vue_vue_type_template_id_193822fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Alert.vue?vue&type=template&id=193822fb& */ "./resources/js/Components/Layouts/Alert.vue?vue&type=template&id=193822fb&");
/* harmony import */ var _Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Alert.vue?vue&type=script&lang=js& */ "./resources/js/Components/Layouts/Alert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Alert_vue_vue_type_template_id_193822fb___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Alert_vue_vue_type_template_id_193822fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Layouts/Alert.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Layouts/Alert.vue?vue&type=script&lang=js&":
/*!****************************************************************************!*\
  !*** ./resources/js/Components/Layouts/Alert.vue?vue&type=script&lang=js& ***!
  \****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Alert.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Layouts/Alert.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Layouts/Alert.vue?vue&type=template&id=193822fb&":
/*!**********************************************************************************!*\
  !*** ./resources/js/Components/Layouts/Alert.vue?vue&type=template&id=193822fb& ***!
  \**********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_193822fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Alert.vue?vue&type=template&id=193822fb& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Layouts/Alert.vue?vue&type=template&id=193822fb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_193822fb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_193822fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Components/Layouts/Breadcrumb.vue":
/*!********************************************************!*\
  !*** ./resources/js/Components/Layouts/Breadcrumb.vue ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Breadcrumb_vue_vue_type_template_id_11cf4074___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Breadcrumb.vue?vue&type=template&id=11cf4074& */ "./resources/js/Components/Layouts/Breadcrumb.vue?vue&type=template&id=11cf4074&");
/* harmony import */ var _Breadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Breadcrumb.vue?vue&type=script&lang=js& */ "./resources/js/Components/Layouts/Breadcrumb.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Breadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Breadcrumb_vue_vue_type_template_id_11cf4074___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Breadcrumb_vue_vue_type_template_id_11cf4074___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Layouts/Breadcrumb.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Layouts/Breadcrumb.vue?vue&type=script&lang=js&":
/*!*********************************************************************************!*\
  !*** ./resources/js/Components/Layouts/Breadcrumb.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Breadcrumb.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Layouts/Breadcrumb.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Layouts/Breadcrumb.vue?vue&type=template&id=11cf4074&":
/*!***************************************************************************************!*\
  !*** ./resources/js/Components/Layouts/Breadcrumb.vue?vue&type=template&id=11cf4074& ***!
  \***************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_template_id_11cf4074___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Breadcrumb.vue?vue&type=template&id=11cf4074& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Layouts/Breadcrumb.vue?vue&type=template&id=11cf4074&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_template_id_11cf4074___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_template_id_11cf4074___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Admin/Profile/ViewProfile.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Admin/Profile/ViewProfile.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewProfile_vue_vue_type_template_id_cfb24ef6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewProfile.vue?vue&type=template&id=cfb24ef6& */ "./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=template&id=cfb24ef6&");
/* harmony import */ var _ViewProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewProfile.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ViewProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewProfile_vue_vue_type_template_id_cfb24ef6___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ViewProfile_vue_vue_type_template_id_cfb24ef6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Profile/ViewProfile.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=script&lang=js&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ViewProfile.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=template&id=cfb24ef6&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=template&id=cfb24ef6& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewProfile_vue_vue_type_template_id_cfb24ef6___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ViewProfile.vue?vue&type=template&id=cfb24ef6& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=template&id=cfb24ef6&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewProfile_vue_vue_type_template_id_cfb24ef6___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewProfile_vue_vue_type_template_id_cfb24ef6___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);