(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resource/js/Pages/Admin/UserManagement/Permissions/List.vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/UserManagement/Permissions/List.vue?vue&type=script&lang=js&":
/*!*******************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/UserManagement/Permissions/List.vue?vue&type=script&lang=js& ***!
  \*******************************************************************************************************************************************************************************************/
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
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
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
  name: "list",
  data: function data() {
    return {
      permissionList: [],
      permission_name: "",
      showTableStatus: false,
      showStatus: false,
      success: "",
      api: "permission",
      btnName: "Add Permission",
      editPermissionId: ""
    };
  },
  mounted: function mounted() {
    this.getPermission();
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_0__["mapGetters"])({
    errors: "getError"
  })),
  methods: {
    getPermission: function getPermission() {
      var _this = this;

      axios.get(this.api).then(function (response) {
        _this.permissionList = response.data;
      });
    },
    addPermission: function addPermission() {
      var _this2 = this;

      axios.post(this.api, {
        name: this.permission_name
      }).then(function (response) {
        _this2.success = response.data.success;
        _this2.showStatus = true;

        _this2.getPermission();

        _this2.reset(); // this.permission_name = "";

      })["catch"](function (err) {
        _this2.showStatus = true;
      });
    },
    deletePermission: function deletePermission(index) {
      var _this3 = this;

      axios["delete"](this.api + "/" + this.permissionList[index].id).then(function (response) {
        _this3.success = response.data.success;
        _this3.showTableStatus = true;

        _this3.getPermission();
      });
    },
    editPermission: function editPermission(index) {
      this.permission_name = this.permissionList[index].name;
      this.editPermissionId = this.permissionList[index].id;
      this.btnName = "Update Permission";
    },
    updatePermission: function updatePermission() {
      var _this4 = this;

      var data = {
        name: this.permission_name
      };
      axios.put(this.api + "/" + this.editPermissionId, data).then(function (response) {
        _this4.success = response.data.success;
        _this4.showStatus = true;

        _this4.getPermission();

        _this4.reset();
      })["catch"](function (err) {
        _this4.showStatus = true;
      });
    },
    reset: function reset() {
      this.permission_name = "";
      this.editPermissionId = "";
      this.btnName = "Add Permission";
    }
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/UserManagement/Permissions/List.vue?vue&type=template&id=34057d51&":
/*!***********************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/UserManagement/Permissions/List.vue?vue&type=template&id=34057d51& ***!
  \***********************************************************************************************************************************************************************************************************************************/
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
    _c("main", { staticClass: "main", attrs: { id: "main" } }, [
      _vm._m(0),
      _vm._v(" "),
      _c("section", { staticClass: "section profile" }, [
        _c("div", { staticClass: "row" }, [
          _c("div", { staticClass: "col-xl-9" }, [
            _c("div", { staticClass: "card" }, [
              _c("div", { staticClass: "card-body" }, [
                _c("h5", { staticClass: "card-title" }, [
                  _vm._v("Permission List")
                ]),
                _vm._v(" "),
                _vm.success && _vm.showTableStatus
                  ? _c("span", [
                      _c(
                        "div",
                        {
                          staticClass:
                            "alert alert-success alert-dismissible fade show",
                          attrs: { role: "alert" }
                        },
                        [
                          _vm._v(
                            "\n                  " +
                              _vm._s(_vm.success) +
                              "\n                  "
                          ),
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
                _c("table", { staticClass: "table table-sm" }, [
                  _vm._m(1),
                  _vm._v(" "),
                  _c(
                    "tbody",
                    _vm._l(_vm.permissionList, function(per, index) {
                      return _c("tr", { key: index }, [
                        _c("th", { attrs: { scope: "row" } }, [
                          _vm._v(_vm._s(++index))
                        ]),
                        _vm._v(" "),
                        _c("td", [_vm._v(_vm._s(per.name))]),
                        _vm._v(" "),
                        _c("td", [
                          _vm._v(_vm._s(_vm._f("formatDate")(per.created_at)))
                        ]),
                        _vm._v(" "),
                        _c("td", [
                          _c(
                            "span",
                            {
                              staticClass: "badge bg-primary",
                              attrs: { role: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.editPermission(--index)
                                }
                              }
                            },
                            [
                              _c("i", {
                                staticClass: "bi bi-pencil-square me-1"
                              }),
                              _vm._v(" Edit")
                            ]
                          ),
                          _vm._v(" "),
                          _c(
                            "span",
                            {
                              staticClass: "badge bg-danger",
                              attrs: { role: "button" },
                              on: {
                                click: function($event) {
                                  return _vm.deletePermission(--index)
                                }
                              }
                            },
                            [
                              _c("i", { staticClass: "bi bi-trash me-1" }),
                              _vm._v(" Delete")
                            ]
                          )
                        ])
                      ])
                    }),
                    0
                  )
                ])
              ])
            ])
          ]),
          _vm._v(" "),
          _c("div", { staticClass: "col-lg-3" }, [
            _c("div", { staticClass: "card" }, [
              _c(
                "div",
                {
                  staticClass:
                    "\n                card-body\n                role-card\n                pt-4\n                d-flex\n                flex-column\n                align-items-center\n              "
                },
                [
                  _c("h5", { staticClass: "card-title" }, [
                    _vm._v(_vm._s(this.btnName))
                  ]),
                  _vm._v(" "),
                  _vm.showStatus
                    ? _c("div", [
                        _vm.errors
                          ? _c(
                              "span",
                              _vm._l(_vm.errors, function(error) {
                                return _c(
                                  "div",
                                  {
                                    key: error,
                                    staticClass:
                                      "alert alert-danger alert-dismissible fade show",
                                    attrs: { role: "alert" }
                                  },
                                  [
                                    _vm._v(
                                      "\n                    " +
                                        _vm._s(error[0]) +
                                        "\n                    "
                                    ),
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
                          : _vm._e(),
                        _vm._v(" "),
                        _vm.success
                          ? _c("span", [
                              _c(
                                "div",
                                {
                                  staticClass:
                                    "alert alert-success alert-dismissible fade show",
                                  attrs: { role: "alert" }
                                },
                                [
                                  _vm._v(
                                    "\n                    " +
                                      _vm._s(_vm.success) +
                                      "\n                    "
                                  ),
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
                          : _vm._e()
                      ])
                    : _vm._e(),
                  _vm._v(" "),
                  _c("div", { staticClass: "row g-3 col-12" }, [
                    _c(
                      "label",
                      {
                        staticClass: "form-label",
                        attrs: { for: "inputNanme4" }
                      },
                      [_vm._v("Permission Name")]
                    ),
                    _vm._v(" "),
                    _c("input", {
                      directives: [
                        {
                          name: "model",
                          rawName: "v-model",
                          value: _vm.permission_name,
                          expression: "permission_name"
                        }
                      ],
                      staticClass: "form-control form-control-sm",
                      attrs: {
                        type: "text",
                        placeholder: "Add New Permission"
                      },
                      domProps: { value: _vm.permission_name },
                      on: {
                        input: function($event) {
                          if ($event.target.composing) {
                            return
                          }
                          _vm.permission_name = $event.target.value
                        }
                      }
                    }),
                    _vm._v(" "),
                    _vm.editPermissionId
                      ? _c(
                          "span",
                          {
                            attrs: { role: "button" },
                            on: { click: _vm.reset }
                          },
                          [_vm._v("Reset")]
                        )
                      : _vm._e()
                  ]),
                  _vm._v(" "),
                  _c("div", { staticClass: "text-center p-2" }, [
                    !_vm.editPermissionId
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-primary btn-sm",
                            attrs: { type: "submit" },
                            on: { click: _vm.addPermission }
                          },
                          [
                            _vm._v(
                              "\n                  Submit\n                "
                            )
                          ]
                        )
                      : _vm._e(),
                    _vm._v(" "),
                    _vm.editPermissionId
                      ? _c(
                          "button",
                          {
                            staticClass: "btn btn-primary btn-sm",
                            attrs: { type: "submit" },
                            on: { click: _vm.updatePermission }
                          },
                          [
                            _vm._v(
                              "\n                  Update\n                "
                            )
                          ]
                        )
                      : _vm._e()
                  ])
                ]
              )
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
    return _c("div", { staticClass: "pagetitle" }, [
      _c("h1", [_vm._v("Permission")]),
      _vm._v(" "),
      _c("nav", [
        _c("ol", { staticClass: "breadcrumb" }, [
          _c("li", { staticClass: "breadcrumb-item" }, [
            _c("a", { attrs: { href: "" } }, [_vm._v("Home")])
          ]),
          _vm._v(" "),
          _c("li", { staticClass: "breadcrumb-item active" }, [
            _vm._v("Permission")
          ])
        ])
      ])
    ])
  },
  function() {
    var _vm = this
    var _h = _vm.$createElement
    var _c = _vm._self._c || _h
    return _c("thead", [
      _c("tr", [
        _c("th", { attrs: { scope: "col" } }, [_vm._v("#")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Permission Name")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Added Time")]),
        _vm._v(" "),
        _c("th", { attrs: { scope: "col" } }, [_vm._v("Action")])
      ])
    ])
  }
]
render._withStripped = true



/***/ }),

/***/ "./resources/js/Pages/Admin/UserManagement/Permissions/List.vue":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/Admin/UserManagement/Permissions/List.vue ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_34057d51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=34057d51& */ "./resources/js/Pages/Admin/UserManagement/Permissions/List.vue?vue&type=template&id=34057d51&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/UserManagement/Permissions/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_34057d51___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_34057d51___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/UserManagement/Permissions/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/UserManagement/Permissions/List.vue?vue&type=script&lang=js&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/UserManagement/Permissions/List.vue?vue&type=script&lang=js& ***!
  \***********************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/UserManagement/Permissions/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/UserManagement/Permissions/List.vue?vue&type=template&id=34057d51&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/UserManagement/Permissions/List.vue?vue&type=template&id=34057d51& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_34057d51___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=34057d51& */ "./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/UserManagement/Permissions/List.vue?vue&type=template&id=34057d51&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_34057d51___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_34057d51___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);