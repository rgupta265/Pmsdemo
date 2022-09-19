(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resource/js/Pages/Admin/UserManagement/Roles/List.vue"],{

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Layouts/Alert.vue?vue&type=script&lang=js&":
/*!************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Layouts/Alert.vue?vue&type=script&lang=js& ***!
  \************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "alert",
  props: {
    data: ""
  },
  data: function data() {
    return {
      elementVisible: true
    };
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/UserManagement/Roles/List.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/UserManagement/Roles/List.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_js_Components_Layouts_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .../../../resources/js/Components/Layouts/Breadcrumb */ "./resources/js/Components/Layouts/Breadcrumb.vue");
/* harmony import */ var _resources_js_Components_Layouts_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .../../../resources/js/Components/Layouts/Alert */ "./resources/js/Components/Layouts/Alert.vue");


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "list",
  components: {
    Breadcrumb: _resources_js_Components_Layouts_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__["default"],
    Alert: _resources_js_Components_Layouts_Alert__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      roleList: [],
      role: "",
      showTableStatus: false,
      showStatus: false,
      success: "",
      api: "roles",
      btnName: "Add Role",
      editRoleId: "",
      permissions: [],
      //master Permission
      assign_permissions: [],
      //add assign permissions
      editPermissionId: [],
      //get edit permission
      inviteSearch: "",
      resultInfo: ""
    };
  },
  mounted: function mounted() {
    this.getRole();
    this.getPermissions();
  },
  computed: {
    filteredRoleList: function filteredRoleList() {
      var _this = this;

      return this.roleList.filter(function (invite) {
        return invite.name.toLowerCase().includes(_this.inviteSearch.toLowerCase()); // invite.permissions.forEach((item) =>
        //   item.slug.toLowerCase().includes(this.inviteSearch.toLowerCase())
        // )
      });
    }
  },
  methods: {
    getPermissions: function getPermissions() {
      var _this2 = this;

      axios.get("/getAllPermission").then(function (response) {
        _this2.permissions = response.data.permissions;
      })["catch"](function () {});
    },
    getRole: function getRole() {
      var _this3 = this;

      var page = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
      axios.get(this.api, {
        params: {
          page: page
        }
      }).then(function (response) {
        _this3.roleList = response.data.data;
        _this3.resultInfo = response.data;
      });
    },
    addRole: function addRole() {
      var _this4 = this;

      axios.post(this.api, {
        name: this.role,
        permission: this.assign_permissions
      }).then(function (response) {
        _this4.success = response.data.success;
        _this4.showStatus = true;

        _this4.getRole();

        _this4.role = "";
        _this4.assign_permissions = [];
      })["catch"](function (err) {
        _this4.showStatus = true;
      });
    },
    deleteRole: function deleteRole(index) {
      var _this5 = this;

      axios["delete"](this.api + "/" + this.roleList[index].id).then(function (response) {
        _this5.success = response.data.success;
        _this5.showTableStatus = true;

        _this5.getRole();
      });
    },
    editRole: function editRole(id) {
      var _this6 = this;

      axios.get(this.api + "/" + id).then(function (response) {
        _this6.role = response.data.name;
        _this6.editRoleId = id;
        _this6.btnName = "Update Role";
        _this6.editPermissionId = response.data.permissions;
      });
    },
    updateRole: function updateRole() {
      var _this7 = this;

      var data = {
        name: this.role,
        permission: this.assign_permissions
      };
      axios.put(this.api + "/" + this.editRoleId, data).then(function (response) {
        _this7.success = response.data.success;
        _this7.showStatus = true;

        _this7.getRole();

        _this7.reset();
      })["catch"](function (err) {
        _this7.showStatus = true;
      });
    },
    reset: function reset() {
      this.role = "";
      this.editRoleId = "";
      this.btnName = "Add Role";
      this.assign_permissions = [];
    },
    isChecked: function isChecked(id) {
      return this.editPermissionId.some(function (item) {
        return item.id === id;
      });
    }
  },
  created: function created() {}
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Layouts/Alert.vue?vue&type=template&id=193822fb&":
/*!**********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Layouts/Alert.vue?vue&type=template&id=193822fb& ***!
  \**********************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "alert"
  }, [_vm.data ? _c("span", [_c("div", {
    staticClass: "alert alert-success alert-dismissible fade show",
    attrs: {
      role: "alert"
    }
  }, [_vm._v("\n      " + _vm._s(_vm.data) + "\n    ")])]) : _vm._e(), _vm._v(" "), _vm.errors ? _c("span", _vm._l(_vm.errors, function (error, index) {
    return _c("div", {
      key: index,
      staticClass: "alert alert-danger alert-dismissible fade show",
      attrs: {
        role: "alert"
      }
    }, [_vm._v("\n      " + _vm._s(error[0]) + "\n    ")]);
  }), 0) : _vm._e()]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Layouts/Breadcrumb.vue?vue&type=template&id=11cf4074&":
/*!***************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Layouts/Breadcrumb.vue?vue&type=template&id=11cf4074& ***!
  \***************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "pagetitle"
  }, [_c("h1", [_vm._v(_vm._s(this.pageTitle))]), _vm._v(" "), _c("nav", [_c("ol", {
    staticClass: "breadcrumb"
  }, _vm._l(_vm.breadcrumbList, function (item, index) {
    return _c("li", {
      key: index,
      staticClass: "breadcrumb-item"
    }, [item.link ? _c("span", {
      attrs: {
        role: "button"
      },
      on: {
        click: function click($event) {
          return _vm.to(item);
        }
      }
    }, [_vm._v(_vm._s(item.name))]) : _c("strong", {
      staticClass: "breadcrumb-item active"
    }, [_vm._v(_vm._s(item.name))])]);
  }), 0)])]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/UserManagement/Roles/List.vue?vue&type=template&id=ea472190&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/UserManagement/Roles/List.vue?vue&type=template&id=ea472190& ***!
  \***********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "viewprofile"
  }, [_c("main", {
    staticClass: "main",
    attrs: {
      id: "main"
    }
  }, [_c("Breadcrumb"), _vm._v(" "), _c("section", {
    staticClass: "section profile"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body py-2"
  }, [_c("strong", [_vm._v("Showing\n              "), _c("span", [_vm._v(_vm._s(_vm.resultInfo.from ? _vm.resultInfo.from : 0) + " –\n                " + _vm._s(_vm.resultInfo.to ? _vm.resultInfo.to : 0) + " of\n                " + _vm._s(_vm.resultInfo.total ? _vm.resultInfo.total : 0) + " Role and their\n                Permission .")])]), _vm._v(" "), _c("div", {
    staticStyle: {
      "float": "right"
    }
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.inviteSearch,
      expression: "inviteSearch"
    }],
    staticClass: "form-control-sm",
    attrs: {
      placeholder: "Search...",
      type: "text"
    },
    domProps: {
      value: _vm.inviteSearch
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.inviteSearch = $event.target.value;
      }
    }
  })])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-9"
  }, [_c("div", {
    staticClass: "card table-responsive"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h5", {
    staticClass: "card-title"
  }, [_vm._v("Role List")]), _vm._v(" "), _vm.showTableStatus ? _c("Alert", {
    attrs: {
      data: _vm.success
    }
  }) : _vm._e(), _vm._v(" "), _c("table", {
    staticClass: "table table-sm table-responsive-sm"
  }, [_vm._m(0), _vm._v(" "), _c("tbody", [_vm._l(_vm.filteredRoleList, function (rl, index) {
    return _c("tr", {
      key: index
    }, [_c("th", {
      attrs: {
        scope: "row"
      }
    }, [_vm._v(_vm._s(++index))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(rl.name))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("formatDate")(rl.created_at)))]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "badge bg-primary",
      attrs: {
        role: "button"
      },
      on: {
        click: function click($event) {
          return _vm.editRole(rl.id);
        }
      }
    }, [_c("i", {
      staticClass: "bi bi-pencil-square me-1"
    }), _vm._v(" Edit")]), _vm._v(" "), _c("span", {
      staticClass: "badge bg-danger",
      attrs: {
        role: "button"
      },
      on: {
        click: function click($event) {
          return _vm.deleteRole(--index);
        }
      }
    }, [_c("i", {
      staticClass: "bi bi-trash me-1"
    }), _vm._v(" Delete")])]), _vm._v(" "), _c("td", _vm._l(rl.permissions, function (per, idx) {
      return _c("span", {
        key: idx,
        staticClass: "badge bg-success m-1"
      }, [_c("i", {
        staticClass: "fbi bi-star me-1"
      }), _vm._v(_vm._s(per.slug) + "\n                      ")]);
    }), 0)]);
  }), _vm._v(" "), _vm.filteredRoleList.length == 0 ? _c("tr", [_c("td", {
    staticClass: "text-center",
    attrs: {
      colspan: "8"
    }
  }, [_vm._v("\n                      There is no data available.\n                    ")])]) : _vm._e()], 2)])], 1)]), _vm._v(" "), _c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body py-1"
  }, [_c("div", {
    staticStyle: {
      "float": "right"
    }
  }, [_c("pagination", {
    attrs: {
      data: _vm.resultInfo,
      limit: 0,
      size: "small"
    },
    on: {
      "pagination-change-page": _vm.getRole
    }
  })], 1)])])]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-3"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body role-card pt-4 d-flex flex-column align-items-center"
  }, [_c("h5", {
    staticClass: "card-title"
  }, [_vm._v(_vm._s(this.btnName))]), _vm._v(" "), _c("Alert", {
    attrs: {
      data: _vm.success
    }
  }), _vm._v(" "), _c("div", {
    staticClass: "row g-3 col-12"
  }, [_c("div", {
    staticClass: "col-12"
  }, [_vm._m(1), _vm._v(" "), _c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.role,
      expression: "role"
    }],
    staticClass: "form-control form-control-sm",
    attrs: {
      type: "text",
      placeholder: "Add New Role"
    },
    domProps: {
      value: _vm.role
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;
        _vm.role = $event.target.value;
      }
    }
  }), _vm._v(" "), _vm.editRoleId ? _c("span", {
    staticStyle: {
      "float": "right"
    },
    attrs: {
      role: "button"
    },
    on: {
      click: _vm.reset
    }
  }, [_vm._v("Reset")]) : _vm._e()]), _vm._v(" "), _vm._m(2), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, _vm._l(_vm.permissions, function (option, item) {
    return _c("div", {
      key: item,
      staticClass: "form-check"
    }, [_c("input", {
      directives: [{
        name: "model",
        rawName: "v-model",
        value: _vm.assign_permissions,
        expression: "assign_permissions"
      }],
      staticClass: "form-check-input",
      attrs: {
        type: "checkbox",
        id: option.id
      },
      domProps: {
        value: option.id,
        checked: Array.isArray(_vm.assign_permissions) ? _vm._i(_vm.assign_permissions, option.id) > -1 : _vm.assign_permissions
      },
      on: {
        change: function change($event) {
          var $$a = _vm.assign_permissions,
              $$el = $event.target,
              $$c = $$el.checked ? true : false;

          if (Array.isArray($$a)) {
            var $$v = option.id,
                $$i = _vm._i($$a, $$v);

            if ($$el.checked) {
              $$i < 0 && (_vm.assign_permissions = $$a.concat([$$v]));
            } else {
              $$i > -1 && (_vm.assign_permissions = $$a.slice(0, $$i).concat($$a.slice($$i + 1)));
            }
          } else {
            _vm.assign_permissions = $$c;
          }
        }
      }
    }), _vm._v(" "), _c("label", {}, [_vm._v("\n                      " + _vm._s(option.name) + "\n                    ")])]);
  }), 0)]), _vm._v("\n              " + _vm._s(_vm.assign_permissions) + "\n              "), _c("div", {
    staticClass: "text-center p-2"
  }, [!_vm.editRoleId ? _c("button", {
    staticClass: "btn btn-primary btn-sm",
    attrs: {
      type: "submit"
    },
    on: {
      click: _vm.addRole
    }
  }, [_vm._v("\n                  Submit\n                ")]) : _vm._e(), _vm._v(" "), _vm.editRoleId ? _c("button", {
    staticClass: "btn btn-primary btn-sm",
    attrs: {
      type: "submit"
    },
    on: {
      click: _vm.updateRole
    }
  }, [_vm._v("\n                  Update\n                ")]) : _vm._e()])], 1)])])])])], 1)]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("thead", [_c("tr", [_c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("#")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Role Name")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Added Time")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Action")]), _vm._v(" "), _c("th", {
    attrs: {
      scope: "col"
    }
  }, [_vm._v("Permission Name")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "inputNanme4"
    }
  }, [_c("strong", [_vm._v("Role Name")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("label", {
    staticClass: "form-label",
    attrs: {
      "for": "inputNanme4"
    }
  }, [_c("strong", [_vm._v("Assign Role")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js":
/*!********************************************************************!*\
  !*** ./node_modules/vue-loader/lib/runtime/componentNormalizer.js ***!
  \********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent(
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier /* server only */,
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options =
    typeof scriptExports === 'function' ? scriptExports.options : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) {
    // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () {
          injectStyles.call(
            this,
            (options.functional ? this.parent : this).$root.$options.shadowRoot
          )
        }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functional component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection(h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing ? [].concat(existing, hook) : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_193822fb___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Alert.vue?vue&type=template&id=193822fb& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Layouts/Alert.vue?vue&type=template&id=193822fb&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_193822fb___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Alert_vue_vue_type_template_id_193822fb___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



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
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_template_id_11cf4074___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Breadcrumb.vue?vue&type=template&id=11cf4074& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Layouts/Breadcrumb.vue?vue&type=template&id=11cf4074&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_template_id_11cf4074___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Breadcrumb_vue_vue_type_template_id_11cf4074___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Admin/UserManagement/Roles/List.vue":
/*!****************************************************************!*\
  !*** ./resources/js/Pages/Admin/UserManagement/Roles/List.vue ***!
  \****************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _List_vue_vue_type_template_id_ea472190___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./List.vue?vue&type=template&id=ea472190& */ "./resources/js/Pages/Admin/UserManagement/Roles/List.vue?vue&type=template&id=ea472190&");
/* harmony import */ var _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./List.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/UserManagement/Roles/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _List_vue_vue_type_template_id_ea472190___WEBPACK_IMPORTED_MODULE_0__["render"],
  _List_vue_vue_type_template_id_ea472190___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/UserManagement/Roles/List.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/UserManagement/Roles/List.vue?vue&type=script&lang=js&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/UserManagement/Roles/List.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/UserManagement/Roles/List.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/UserManagement/Roles/List.vue?vue&type=template&id=ea472190&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/UserManagement/Roles/List.vue?vue&type=template&id=ea472190& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_ea472190___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../../node_modules/vue-loader/lib??vue-loader-options!./List.vue?vue&type=template&id=ea472190& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/UserManagement/Roles/List.vue?vue&type=template&id=ea472190&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_ea472190___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_List_vue_vue_type_template_id_ea472190___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);