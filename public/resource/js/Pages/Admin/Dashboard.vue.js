(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resource/js/Pages/Admin/Dashboard.vue"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AccessDenied.vue?vue&type=script&lang=js&":
/*!******************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/AccessDenied.vue?vue&type=script&lang=js& ***!
  \******************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'accessdenied'
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Dashboard.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Dashboard.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_js_Components_Layouts_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .../../../resources/js/Components/Layouts/Breadcrumb */ "./resources/js/Components/Layouts/Breadcrumb.vue");
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "dashboard",
  components: {
    Breadcrumb: _resources_js_Components_Layouts_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_1__["mapGetters"])({
    allActivity: "getAllActivity",
    userDetails: "getUserDetails"
  })),
  created: function created() {
    if (this.userDetails.userInfo == "" || null || this.userDetails.userInfo.emp_code == "" || null || this.userDetails.userInfo.designation == "" || null) {
      this.$router.push("/update-profile");
    }

    this.$store.dispatch("getAllActivity");
  }
});

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AccessDenied.vue?vue&type=template&id=73f0b0c8&":
/*!****************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/AccessDenied.vue?vue&type=template&id=73f0b0c8& ***!
  \****************************************************************************************************************************************************************************************************************************************/
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
    attrs: {
      id: "accessdenied"
    }
  }, [_c("main", {
    staticClass: "main",
    attrs: {
      id: "main"
    }
  }, [_vm._m(0), _vm._v(" "), _c("section", {
    staticClass: "section"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-12"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body"
  }, [_c("h5", {
    staticClass: "card-title"
  }, [_vm._v("Hello User")]), _vm._v(" "), _c("p", [_vm._v("You Don't have permission to access this page")]), _vm._v(" "), _c("router-link", {
    attrs: {
      to: {
        name: "dashboard"
      }
    }
  }, [_c("a", {
    staticClass: "btn btn-primary"
  }, [_vm._v("Back to Dashboard")])])], 1)])])])])])]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "pagetitle"
  }, [_c("h1", [_vm._v("Access Denied")]), _vm._v(" "), _c("nav", [_c("ol", {
    staticClass: "breadcrumb"
  }, [_c("li", {
    staticClass: "breadcrumb-item"
  }, [_c("a", {
    attrs: {
      href: "index.html"
    }
  }, [_vm._v("Home")])]), _vm._v(" "), _c("li", {
    staticClass: "breadcrumb-item"
  }, [_vm._v("Pages")]), _vm._v(" "), _c("li", {
    staticClass: "breadcrumb-item active"
  }, [_vm._v("Access Denied")])])])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Dashboard.vue?vue&type=template&id=4dff49ca&lang=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Dashboard.vue?vue&type=template&id=4dff49ca&lang=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************/
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
    attrs: {
      id: "dashboard"
    }
  }, [_c("main", {
    staticClass: "main",
    attrs: {
      id: "main"
    }
  }, [_c("Breadcrumb"), _vm._v(" "), _c("section", {
    staticClass: "section dashboard"
  }, [_c("div", {
    staticClass: "row"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "col-lg-4"
  }, [_c("div", {
    staticClass: "card"
  }, [_vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("h5", {
    staticClass: "card-title"
  }, [_vm._v("Recent Activity ")]), _vm._v(" "), _vm.allActivity.length == 0 ? _c("p", {
    staticClass: "text-center"
  }, [_vm._v("No Activity available")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "activity"
  }, _vm._l(_vm.allActivity, function (act, index) {
    return _c("div", {
      key: index,
      staticClass: "activity-item d-flex"
    }, [_c("div", {
      staticClass: "activite-label"
    }, [_vm._v(_vm._s(_vm._f("humanReadableTime")(act.created_at)))]), _vm._v(" "), _c("i", {
      staticClass: "bi bi-circle-fill activity-badge text-success align-self-start"
    }), _vm._v(" "), _c("div", {
      staticClass: "activity-content"
    }, [_vm._v("\n                    " + _vm._s(act.log_name) + " activity " + _vm._s(act.description) + " to " + _vm._s(act.properties.attributes.email) + "\n                  ")])]);
  }), 0)])])])])])], 1)]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "col-lg-8"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xxl-4 col-md-6"
  }, [_c("div", {
    staticClass: "card info-card sales-card"
  }, [_c("div", {
    staticClass: "filter"
  }, [_c("a", {
    staticClass: "icon",
    attrs: {
      href: "#",
      "data-bs-toggle": "dropdown"
    }
  }, [_c("i", {
    staticClass: "bi bi-three-dots"
  })]), _vm._v(" "), _c("ul", {
    staticClass: "dropdown-menu dropdown-menu-end dropdown-menu-arrow"
  }, [_c("li", {
    staticClass: "dropdown-header text-start"
  }, [_c("h6", [_vm._v("Filter")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "dropdown-item",
    attrs: {
      href: "#"
    }
  }, [_vm._v("Today")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "dropdown-item",
    attrs: {
      href: "#"
    }
  }, [_vm._v("This Month")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "dropdown-item",
    attrs: {
      href: "#"
    }
  }, [_vm._v("This Year")])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("h5", {
    staticClass: "card-title"
  }, [_vm._v("Demo 1 "), _c("span", [_vm._v("| Today")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("div", {
    staticClass: "card-icon rounded-circle d-flex align-items-center justify-content-center"
  }, [_c("i", {
    staticClass: "bi bi-cart"
  })]), _vm._v(" "), _c("div", {
    staticClass: "ps-3"
  }, [_c("h6", [_vm._v("145")]), _vm._v(" "), _c("span", {
    staticClass: "text-success small pt-1 fw-bold"
  }, [_vm._v("12%")]), _vm._v(" "), _c("span", {
    staticClass: "text-muted small pt-2 ps-1"
  }, [_vm._v("increase")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xxl-4 col-md-6"
  }, [_c("div", {
    staticClass: "card info-card revenue-card"
  }, [_c("div", {
    staticClass: "filter"
  }, [_c("a", {
    staticClass: "icon",
    attrs: {
      href: "#",
      "data-bs-toggle": "dropdown"
    }
  }, [_c("i", {
    staticClass: "bi bi-three-dots"
  })]), _vm._v(" "), _c("ul", {
    staticClass: "dropdown-menu dropdown-menu-end dropdown-menu-arrow"
  }, [_c("li", {
    staticClass: "dropdown-header text-start"
  }, [_c("h6", [_vm._v("Filter")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "dropdown-item",
    attrs: {
      href: "#"
    }
  }, [_vm._v("Today")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "dropdown-item",
    attrs: {
      href: "#"
    }
  }, [_vm._v("This Month")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "dropdown-item",
    attrs: {
      href: "#"
    }
  }, [_vm._v("This Year")])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("h5", {
    staticClass: "card-title"
  }, [_vm._v("Demo 2 "), _c("span", [_vm._v("| This Month")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("div", {
    staticClass: "card-icon rounded-circle d-flex align-items-center justify-content-center"
  }, [_c("i", {
    staticClass: "bi bi-currency-rupee"
  })]), _vm._v(" "), _c("div", {
    staticClass: "ps-3"
  }, [_c("h6", [_vm._v(" Rs.3,264")]), _vm._v(" "), _c("span", {
    staticClass: "text-success small pt-1 fw-bold"
  }, [_vm._v("8%")]), _vm._v(" "), _c("span", {
    staticClass: "text-muted small pt-2 ps-1"
  }, [_vm._v("increase")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xxl-4 col-xl-12"
  }, [_c("div", {
    staticClass: "card info-card customers-card"
  }, [_c("div", {
    staticClass: "filter"
  }, [_c("a", {
    staticClass: "icon",
    attrs: {
      href: "#",
      "data-bs-toggle": "dropdown"
    }
  }, [_c("i", {
    staticClass: "bi bi-three-dots"
  })]), _vm._v(" "), _c("ul", {
    staticClass: "dropdown-menu dropdown-menu-end dropdown-menu-arrow"
  }, [_c("li", {
    staticClass: "dropdown-header text-start"
  }, [_c("h6", [_vm._v("Filter")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "dropdown-item",
    attrs: {
      href: "#"
    }
  }, [_vm._v("Today")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "dropdown-item",
    attrs: {
      href: "#"
    }
  }, [_vm._v("This Month")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "dropdown-item",
    attrs: {
      href: "#"
    }
  }, [_vm._v("This Year")])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("h5", {
    staticClass: "card-title"
  }, [_vm._v("Demo 3 "), _c("span", [_vm._v("| This Year")])]), _vm._v(" "), _c("div", {
    staticClass: "d-flex align-items-center"
  }, [_c("div", {
    staticClass: "card-icon rounded-circle d-flex align-items-center justify-content-center"
  }, [_c("i", {
    staticClass: "bi bi-people"
  })]), _vm._v(" "), _c("div", {
    staticClass: "ps-3"
  }, [_c("h6", [_vm._v("1244")]), _vm._v(" "), _c("span", {
    staticClass: "text-danger small pt-1 fw-bold"
  }, [_vm._v("12%")]), _vm._v(" "), _c("span", {
    staticClass: "text-muted small pt-2 ps-1"
  }, [_vm._v("decrease")])])])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-12"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "filter"
  }, [_c("a", {
    staticClass: "icon",
    attrs: {
      href: "#",
      "data-bs-toggle": "dropdown"
    }
  }, [_c("i", {
    staticClass: "bi bi-three-dots"
  })]), _vm._v(" "), _c("ul", {
    staticClass: "dropdown-menu dropdown-menu-end dropdown-menu-arrow"
  }, [_c("li", {
    staticClass: "dropdown-header text-start"
  }, [_c("h6", [_vm._v("Filter")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "dropdown-item",
    attrs: {
      href: "#"
    }
  }, [_vm._v("Today")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "dropdown-item",
    attrs: {
      href: "#"
    }
  }, [_vm._v("This Month")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "dropdown-item",
    attrs: {
      href: "#"
    }
  }, [_vm._v("This Year")])])])]), _vm._v(" "), _c("div", {
    staticClass: "card-body"
  }, [_c("h5", {
    staticClass: "card-title"
  }, [_vm._v("Reports "), _c("span", [_vm._v("/Today")])]), _vm._v(" "), _c("div", {
    attrs: {
      id: "reportsChart"
    }
  })])])])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "filter"
  }, [_c("a", {
    staticClass: "icon",
    attrs: {
      href: "#",
      "data-bs-toggle": "dropdown"
    }
  }, [_c("i", {
    staticClass: "bi bi-three-dots"
  })]), _vm._v(" "), _c("ul", {
    staticClass: "dropdown-menu dropdown-menu-end dropdown-menu-arrow"
  }, [_c("li", {
    staticClass: "dropdown-header text-start"
  }, [_c("h6", [_vm._v("Filter")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "dropdown-item",
    attrs: {
      href: "#"
    }
  }, [_vm._v("Today")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "dropdown-item",
    attrs: {
      href: "#"
    }
  }, [_vm._v("This Month")])]), _vm._v(" "), _c("li", [_c("a", {
    staticClass: "dropdown-item",
    attrs: {
      href: "#"
    }
  }, [_vm._v("This Year")])])])]);
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

/***/ "./resources/js/Pages/AccessDenied.vue":
/*!*********************************************!*\
  !*** ./resources/js/Pages/AccessDenied.vue ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _AccessDenied_vue_vue_type_template_id_73f0b0c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./AccessDenied.vue?vue&type=template&id=73f0b0c8& */ "./resources/js/Pages/AccessDenied.vue?vue&type=template&id=73f0b0c8&");
/* harmony import */ var _AccessDenied_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./AccessDenied.vue?vue&type=script&lang=js& */ "./resources/js/Pages/AccessDenied.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _AccessDenied_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _AccessDenied_vue_vue_type_template_id_73f0b0c8___WEBPACK_IMPORTED_MODULE_0__["render"],
  _AccessDenied_vue_vue_type_template_id_73f0b0c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/AccessDenied.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/AccessDenied.vue?vue&type=script&lang=js&":
/*!**********************************************************************!*\
  !*** ./resources/js/Pages/AccessDenied.vue?vue&type=script&lang=js& ***!
  \**********************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccessDenied_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib??vue-loader-options!./AccessDenied.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AccessDenied.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_AccessDenied_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/AccessDenied.vue?vue&type=template&id=73f0b0c8&":
/*!****************************************************************************!*\
  !*** ./resources/js/Pages/AccessDenied.vue?vue&type=template&id=73f0b0c8& ***!
  \****************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AccessDenied_vue_vue_type_template_id_73f0b0c8___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/babel-loader/lib??ref--4-0!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../node_modules/vue-loader/lib??vue-loader-options!./AccessDenied.vue?vue&type=template&id=73f0b0c8& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/AccessDenied.vue?vue&type=template&id=73f0b0c8&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AccessDenied_vue_vue_type_template_id_73f0b0c8___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_AccessDenied_vue_vue_type_template_id_73f0b0c8___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Admin/Dashboard.vue":
/*!************************************************!*\
  !*** ./resources/js/Pages/Admin/Dashboard.vue ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Dashboard_vue_vue_type_template_id_4dff49ca_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=template&id=4dff49ca&lang=true& */ "./resources/js/Pages/Admin/Dashboard.vue?vue&type=template&id=4dff49ca&lang=true&");
/* harmony import */ var _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Dashboard.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Dashboard_vue_vue_type_template_id_4dff49ca_lang_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Dashboard_vue_vue_type_template_id_4dff49ca_lang_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/Dashboard.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/Dashboard.vue?vue&type=script&lang=js&":
/*!*************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Dashboard.vue?vue&type=script&lang=js& ***!
  \*************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Dashboard.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/Dashboard.vue?vue&type=template&id=4dff49ca&lang=true&":
/*!*****************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Dashboard.vue?vue&type=template&id=4dff49ca&lang=true& ***!
  \*****************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_4dff49ca_lang_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Dashboard.vue?vue&type=template&id=4dff49ca&lang=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Dashboard.vue?vue&type=template&id=4dff49ca&lang=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_4dff49ca_lang_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Dashboard_vue_vue_type_template_id_4dff49ca_lang_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);