(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[0],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Layouts/Navbar.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Layouts/Navbar.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
/* harmony import */ var _helpers_can__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../helpers/can */ "./resources/js/helpers/can.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

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


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "navbar",
  data: function data() {
    return {};
  },
  computed: _objectSpread(_objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    user: "getUser",
    userDetails: "getUserDetails"
  })), {}, {
    isLoggedIn: function isLoggedIn() {
      return this.$store.getters.isLoggedIn;
    }
  }),
  created: function created() {
    //  this.$toast("Welcome To dashboard");
    if (this.isLoggedIn) {
      this.$store.dispatch('getUser');
      this.$store.dispatch('getUserDetails');
    }
  },
  methods: {
    logout: function logout() {
      var _this = this;

      return _asyncToGenerator( /*#__PURE__*/_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return _this.$store.dispatch('logout');

              case 2:
                _this.$router.push('/');

              case 3:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }))();
    }
  }
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Layouts/Navbar.vue?vue&type=template&id=dd501afe&":
/*!*****************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Layouts/Navbar.vue?vue&type=template&id=dd501afe& ***!
  \*****************************************************************************************************************************************************************************************************************/
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
  return _c(
    "div",
    { attrs: { id: "navbar" } },
    [
      _c(
        "header",
        {
          staticClass: "header fixed-top d-flex align-items-center",
          attrs: { id: "header" }
        },
        [
          _vm._m(0),
          _vm._v(" "),
          _vm._m(1),
          _vm._v(" "),
          _c("nav", { staticClass: "header-nav ms-auto" }, [
            _c("ul", { staticClass: "d-flex align-items-center" }, [
              _vm._m(2),
              _vm._v(" "),
              _vm._m(3),
              _vm._v(" "),
              _vm._m(4),
              _vm._v(" "),
              _c("li", { staticClass: "nav-item dropdown pe-3" }, [
                _c(
                  "a",
                  {
                    staticClass:
                      "nav-link nav-profile d-flex align-items-center pe-0",
                    attrs: { href: "#", "data-bs-toggle": "dropdown" }
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
                    _c(
                      "span",
                      { staticClass: "d-none d-md-block dropdown-toggle ps-2" },
                      [_vm._v(_vm._s(_vm.user.name))]
                    )
                  ]
                ),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass:
                      "dropdown-menu dropdown-menu-end dropdown-menu-arrow profile"
                  },
                  [
                    _c("li", { staticClass: "dropdown-header" }, [
                      _c("h6", [_vm._v(_vm._s(_vm.user.name))]),
                      _vm._v(" "),
                      _c("span", [_vm._v("Web Designer")])
                    ]),
                    _vm._v(" "),
                    _vm._m(5),
                    _vm._v(" "),
                    _vm._m(6),
                    _vm._v(" "),
                    _vm._m(7),
                    _vm._v(" "),
                    _vm._m(8),
                    _vm._v(" "),
                    _vm._m(9),
                    _vm._v(" "),
                    _vm._m(10),
                    _vm._v(" "),
                    _vm._m(11),
                    _vm._v(" "),
                    _c("li", [
                      _c(
                        "button",
                        {
                          staticClass:
                            "dropdown-item d-flex align-items-center",
                          attrs: { type: "button" },
                          on: {
                            click: function($event) {
                              return _vm.logout()
                            }
                          }
                        },
                        [
                          _c("i", { staticClass: "bi bi-box-arrow-up" }),
                          _vm._v("Sign Out")
                        ]
                      )
                    ])
                  ]
                )
              ])
            ])
          ])
        ]
      ),
      _vm._v(" "),
      _c("aside", { staticClass: "sidebar", attrs: { id: "sidebar" } }, [
        _c("ul", { staticClass: "sidebar-nav", attrs: { id: "sidebar-nav" } }, [
          _vm._m(12),
          _vm._v(" "),
          _vm.$can(_vm.$constants.permissions.viewUserRolePermissionManagement)
            ? _c("li", { staticClass: "nav-item" }, [
                _vm._m(13),
                _vm._v(" "),
                _c(
                  "ul",
                  {
                    staticClass: "nav-content collapse ",
                    attrs: {
                      id: "components-nav",
                      "data-bs-parent": "#sidebar-nav"
                    }
                  },
                  [
                    _c(
                      "li",
                      [
                        _c(
                          "router-link",
                          { attrs: { to: { name: "roles" } } },
                          [
                            _c("i", { staticClass: "bi bi-circle" }),
                            _c("span", [_vm._v("Role")])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c(
                          "router-link",
                          { attrs: { to: { name: "permission" } } },
                          [
                            _c("i", { staticClass: "bi bi-circle" }),
                            _c("span", [_vm._v("Permission")])
                          ]
                        )
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c(
                      "li",
                      [
                        _c(
                          "router-link",
                          { attrs: { to: { name: "users" } } },
                          [
                            _c("i", { staticClass: "bi bi-circle" }),
                            _c("span", [_vm._v("Users")])
                          ]
                        )
                      ],
                      1
                    )
                  ]
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c("li", { staticClass: "nav-heading" }, [_vm._v("Pages")]),
          _vm._v(" "),
          _c(
            "li",
            { staticClass: "nav-item" },
            [
              _c("router-link", { attrs: { to: { name: "profile" } } }, [
                _c(
                  "a",
                  { staticClass: "nav-link collapsed", attrs: { href: "#" } },
                  [
                    _c("i", { staticClass: "bi bi-person" }),
                    _vm._v(" "),
                    _c("span", [_vm._v("Profile")])
                  ]
                )
              ])
            ],
            1
          ),
          _vm._v(" "),
          _vm.$can(_vm.$constants.permissions.viewInviteLink)
            ? _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c("router-link", { attrs: { to: { name: "invitelink" } } }, [
                    _c(
                      "a",
                      {
                        staticClass: "nav-link collapsed",
                        attrs: { href: "#" }
                      },
                      [
                        _c("i", { staticClass: "bi bi-person" }),
                        _vm._v(" "),
                        _c("span", [_vm._v("Invite Link")])
                      ]
                    )
                  ])
                ],
                1
              )
            : _vm._e(),
          _vm._v(" "),
          _c("li", { staticClass: "nav-heading" }, [_vm._v("Master")]),
          _vm._v(" "),
          _vm.$can(_vm.$constants.permissions.viewPmsMaster)
            ? _c(
                "li",
                { staticClass: "nav-item" },
                [
                  _c(
                    "router-link",
                    { attrs: { to: { name: "pmsattribute" } } },
                    [
                      _c(
                        "a",
                        {
                          staticClass: "nav-link collapsed",
                          attrs: { href: "#" }
                        },
                        [
                          _c("i", { staticClass: "bi bi-person" }),
                          _vm._v(" "),
                          _c("span", [_vm._v("PMS Attribute")])
                        ]
                      )
                    ]
                  )
                ],
                1
              )
            : _vm._e()
        ])
      ]),
      _vm._v(" "),
      _c("router-view"),
      _vm._v(" "),
      _vm._m(14),
      _vm._v(" "),
      _vm._m(15)
    ],
    1
  )
}
var staticRenderFns = [
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "div",
      { staticClass: "d-flex align-items-center justify-content-between" },
      [
        _c(
          "a",
          {
            staticClass: "logo d-flex align-items-center",
            attrs: { href: "index.html" }
          },
          [
            _c("img", { attrs: { src: "assets/img/logo.png", alt: "" } }),
            _vm._v(" "),
            _c("span", { staticClass: "d-none d-lg-block" }, [
              _vm._v("NiceAdmin")
            ])
          ]
        ),
        _vm._v(" "),
        _c("i", { staticClass: "bi bi-list toggle-sidebar-btn" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("div", { staticClass: "search-bar" }, [
      _c(
        "form",
        {
          staticClass: "search-form d-flex align-items-center",
          attrs: { method: "POST", action: "#" }
        },
        [
          _c("input", {
            attrs: {
              type: "text",
              name: "query",
              placeholder: "Search",
              title: "Enter search keyword"
            }
          }),
          _vm._v(" "),
          _c("button", { attrs: { type: "submit", title: "Search" } }, [
            _c("i", { staticClass: "bi bi-search" })
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item d-block d-lg-none" }, [
      _c(
        "a",
        {
          staticClass: "nav-link nav-icon search-bar-toggle ",
          attrs: { href: "#" }
        },
        [_c("i", { staticClass: "bi bi-search" })]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item dropdown" }, [
      _c(
        "a",
        {
          staticClass: "nav-link nav-icon",
          attrs: { href: "#", "data-bs-toggle": "dropdown" }
        },
        [
          _c("i", { staticClass: "bi bi-bell" }),
          _vm._v(" "),
          _c("span", { staticClass: "badge bg-primary badge-number" }, [
            _vm._v("4")
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "ul",
        {
          staticClass:
            "dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications"
        },
        [
          _c("li", { staticClass: "dropdown-header" }, [
            _vm._v(
              "\n              You have 4 new notifications\n              "
            ),
            _c("a", { attrs: { href: "#" } }, [
              _c(
                "span",
                { staticClass: "badge rounded-pill bg-primary p-2 ms-2" },
                [_vm._v("View all")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [_c("hr", { staticClass: "dropdown-divider" })]),
          _vm._v(" "),
          _c("li", { staticClass: "notification-item" }, [
            _c("i", { staticClass: "bi bi-exclamation-circle text-warning" }),
            _vm._v(" "),
            _c("div", [
              _c("h4", [_vm._v("Lorem Ipsum")]),
              _vm._v(" "),
              _c("p", [_vm._v("Quae dolorem earum veritatis oditseno")]),
              _vm._v(" "),
              _c("p", [_vm._v("30 min. ago")])
            ])
          ]),
          _vm._v(" "),
          _c("li", [_c("hr", { staticClass: "dropdown-divider" })]),
          _vm._v(" "),
          _c("li", { staticClass: "notification-item" }, [
            _c("i", { staticClass: "bi bi-x-circle text-danger" }),
            _vm._v(" "),
            _c("div", [
              _c("h4", [_vm._v("Atque rerum nesciunt")]),
              _vm._v(" "),
              _c("p", [_vm._v("Quae dolorem earum veritatis oditseno")]),
              _vm._v(" "),
              _c("p", [_vm._v("1 hr. ago")])
            ])
          ]),
          _vm._v(" "),
          _c("li", [_c("hr", { staticClass: "dropdown-divider" })]),
          _vm._v(" "),
          _c("li", { staticClass: "notification-item" }, [
            _c("i", { staticClass: "bi bi-check-circle text-success" }),
            _vm._v(" "),
            _c("div", [
              _c("h4", [_vm._v("Sit rerum fuga")]),
              _vm._v(" "),
              _c("p", [_vm._v("Quae dolorem earum veritatis oditseno")]),
              _vm._v(" "),
              _c("p", [_vm._v("2 hrs. ago")])
            ])
          ]),
          _vm._v(" "),
          _c("li", [_c("hr", { staticClass: "dropdown-divider" })]),
          _vm._v(" "),
          _c("li", { staticClass: "notification-item" }, [
            _c("i", { staticClass: "bi bi-info-circle text-primary" }),
            _vm._v(" "),
            _c("div", [
              _c("h4", [_vm._v("Dicta reprehenderit")]),
              _vm._v(" "),
              _c("p", [_vm._v("Quae dolorem earum veritatis oditseno")]),
              _vm._v(" "),
              _c("p", [_vm._v("4 hrs. ago")])
            ])
          ]),
          _vm._v(" "),
          _c("li", [_c("hr", { staticClass: "dropdown-divider" })]),
          _vm._v(" "),
          _c("li", { staticClass: "dropdown-footer" }, [
            _c("a", { attrs: { href: "#" } }, [
              _vm._v("Show all notifications")
            ])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item dropdown" }, [
      _c(
        "a",
        {
          staticClass: "nav-link nav-icon",
          attrs: { href: "#", "data-bs-toggle": "dropdown" }
        },
        [
          _c("i", { staticClass: "bi bi-chat-left-text" }),
          _vm._v(" "),
          _c("span", { staticClass: "badge bg-success badge-number" }, [
            _vm._v("3")
          ])
        ]
      ),
      _vm._v(" "),
      _c(
        "ul",
        {
          staticClass:
            "dropdown-menu dropdown-menu-end dropdown-menu-arrow messages"
        },
        [
          _c("li", { staticClass: "dropdown-header" }, [
            _vm._v("\n              You have 3 new messages\n              "),
            _c("a", { attrs: { href: "#" } }, [
              _c(
                "span",
                { staticClass: "badge rounded-pill bg-primary p-2 ms-2" },
                [_vm._v("View all")]
              )
            ])
          ]),
          _vm._v(" "),
          _c("li", [_c("hr", { staticClass: "dropdown-divider" })]),
          _vm._v(" "),
          _c("li", { staticClass: "message-item" }, [
            _c("a", { attrs: { href: "#" } }, [
              _c("img", {
                staticClass: "rounded-circle",
                attrs: { src: "assets/img/messages-1.jpg", alt: "" }
              }),
              _vm._v(" "),
              _c("div", [
                _c("h4", [_vm._v("Maria Hudson")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Velit asperiores et ducimus soluta repudiandae labore officia est ut..."
                  )
                ]),
                _vm._v(" "),
                _c("p", [_vm._v("4 hrs. ago")])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", [_c("hr", { staticClass: "dropdown-divider" })]),
          _vm._v(" "),
          _c("li", { staticClass: "message-item" }, [
            _c("a", { attrs: { href: "#" } }, [
              _c("img", {
                staticClass: "rounded-circle",
                attrs: { src: "assets/img/messages-2.jpg", alt: "" }
              }),
              _vm._v(" "),
              _c("div", [
                _c("h4", [_vm._v("Anna Nelson")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Velit asperiores et ducimus soluta repudiandae labore officia est ut..."
                  )
                ]),
                _vm._v(" "),
                _c("p", [_vm._v("6 hrs. ago")])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", [_c("hr", { staticClass: "dropdown-divider" })]),
          _vm._v(" "),
          _c("li", { staticClass: "message-item" }, [
            _c("a", { attrs: { href: "#" } }, [
              _c("img", {
                staticClass: "rounded-circle",
                attrs: { src: "assets/img/messages-3.jpg", alt: "" }
              }),
              _vm._v(" "),
              _c("div", [
                _c("h4", [_vm._v("David Muldon")]),
                _vm._v(" "),
                _c("p", [
                  _vm._v(
                    "Velit asperiores et ducimus soluta repudiandae labore officia est ut..."
                  )
                ]),
                _vm._v(" "),
                _c("p", [_vm._v("8 hrs. ago")])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("li", [_c("hr", { staticClass: "dropdown-divider" })]),
          _vm._v(" "),
          _c("li", { staticClass: "dropdown-footer" }, [
            _c("a", { attrs: { href: "#" } }, [_vm._v("Show all messages")])
          ])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [_c("hr", { staticClass: "dropdown-divider" })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "a",
        {
          staticClass: "dropdown-item d-flex align-items-center",
          attrs: { href: "users-profile.html" }
        },
        [
          _c("i", { staticClass: "bi bi-person" }),
          _vm._v(" "),
          _c("span", [_vm._v("My Profile")])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [_c("hr", { staticClass: "dropdown-divider" })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "a",
        {
          staticClass: "dropdown-item d-flex align-items-center",
          attrs: { href: "users-profile.html" }
        },
        [
          _c("i", { staticClass: "bi bi-gear" }),
          _vm._v(" "),
          _c("span", [_vm._v("Account Settings")])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [_c("hr", { staticClass: "dropdown-divider" })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [
      _c(
        "a",
        {
          staticClass: "dropdown-item d-flex align-items-center",
          attrs: { href: "pages-faq.html" }
        },
        [
          _c("i", { staticClass: "bi bi-question-circle" }),
          _vm._v(" "),
          _c("span", [_vm._v("Need Help?")])
        ]
      )
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", [_c("hr", { staticClass: "dropdown-divider" })])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("li", { staticClass: "nav-item" }, [
      _c("a", { staticClass: "nav-link ", attrs: { href: "index.html" } }, [
        _c("i", { staticClass: "bi bi-grid" }),
        _vm._v(" "),
        _c("span", [_vm._v("Dashboard")])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass: "nav-link collapsed",
        attrs: {
          "data-bs-target": "#components-nav",
          "data-bs-toggle": "collapse",
          href: "#"
        }
      },
      [
        _c("i", { staticClass: "bi bi-person-lines-fill" }),
        _c("span", [_vm._v("User Management")]),
        _c("i", { staticClass: "bi bi-chevron-down ms-auto" })
      ]
    )
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("footer", { staticClass: "footer", attrs: { id: "footer" } }, [
      _c("div", { staticClass: "copyright" }, [
        _vm._v("\n      © Copyright "),
        _c("strong", [_c("span", [_vm._v("NiceAdmin")])]),
        _vm._v(". All Rights Reserved\n    ")
      ]),
      _vm._v(" "),
      _c("div", { staticClass: "credits" }, [
        _vm._v("\n      Designed by "),
        _c("a", { attrs: { href: "https://bootstrapmade.com/" } }, [
          _vm._v("BootstrapMade")
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c(
      "a",
      {
        staticClass:
          "back-to-top d-flex align-items-center justify-content-center",
        attrs: { href: "#" }
      },
      [_c("i", { staticClass: "bi bi-arrow-up-short" })]
    )
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Components/Layouts/Navbar.vue":
/*!****************************************************!*\
  !*** ./resources/js/Components/Layouts/Navbar.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Navbar_vue_vue_type_template_id_dd501afe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Navbar.vue?vue&type=template&id=dd501afe& */ "./resources/js/Components/Layouts/Navbar.vue?vue&type=template&id=dd501afe&");
/* harmony import */ var _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Navbar.vue?vue&type=script&lang=js& */ "./resources/js/Components/Layouts/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Navbar_vue_vue_type_template_id_dd501afe___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Navbar_vue_vue_type_template_id_dd501afe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Layouts/Navbar.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Layouts/Navbar.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Components/Layouts/Navbar.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Layouts/Navbar.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Layouts/Navbar.vue?vue&type=template&id=dd501afe&":
/*!***********************************************************************************!*\
  !*** ./resources/js/Components/Layouts/Navbar.vue?vue&type=template&id=dd501afe& ***!
  \***********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_dd501afe___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../node_modules/vue-loader/lib??vue-loader-options!./Navbar.vue?vue&type=template&id=dd501afe& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Layouts/Navbar.vue?vue&type=template&id=dd501afe&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_dd501afe___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_Navbar_vue_vue_type_template_id_dd501afe___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);