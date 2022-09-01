(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["resource/js/Pages/Admin/UserInfo"],{

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/ReportInfo.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/ReportInfo.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _resources_js_Components_Layouts_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .../../../resources/js/Components/Layouts/Breadcrumb */ "./resources/js/Components/Layouts/Breadcrumb.vue");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: "reportInfo",
  components: {
    Breadcrumb: _resources_js_Components_Layouts_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      repToken: this.$route.query.token,
      allReportInfo: []
    };
  },
  created: function created() {
    var _this = this;

    axios.get("getReportInfo/" + this.repToken).then(function (response) {
      _this.allReportInfo = response.data;
    })["catch"](function (error) {});
  },
  methods: {
    printReport: function printReport(divName) {
      var printContents = document.getElementById(divName).innerHTML;
      var originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    }
  }
});

/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/UserInfo.vue?vue&type=script&lang=js&":
/*!********************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/UserInfo.vue?vue&type=script&lang=js& ***!
  \********************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vuex__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vuex */ "./node_modules/vuex/dist/vuex.esm.js");

/* harmony default export */ __webpack_exports__["default"] = ({
  name: 'userInfo' // computed: {
  //   ...mapState({
  //     count: state => state.count
  //   }),
  // }

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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/ReportInfo.vue?vue&type=template&id=130da8ea&":
/*!********************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/ReportInfo.vue?vue&type=template&id=130da8ea& ***!
  \********************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "reportInfo"
  }, [_c("main", {
    staticClass: "main",
    attrs: {
      id: "main"
    }
  }, [_c("Breadcrumb"), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-xl-12",
    attrs: {
      id: "printableArea"
    }
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body pt-3"
  }, [_c("a", {
    staticClass: "icon d-print-none"
  }, [_c("i", {
    staticClass: "bi bi-printer-fill",
    on: {
      click: function click($event) {
        return _vm.printReport("printableArea");
      }
    }
  })]), _vm._v(" "), _c("h5", {
    staticClass: "card-title"
  }, [_vm._v("\n              PMS Report Details Of " + _vm._s(_vm.allReportInfo.report_id) + "\n            ")]), _vm._v(" "), _c("p", {
    staticClass: "small fst-italic"
  }, [_vm._v("\n              This Report basically belongs to\n              "), _c("b", [_vm._v(_vm._s(_vm.allReportInfo.user_report_info.name) + ".")])]), _vm._v(" "), _c("h5", {
    staticClass: "card-title text-center"
  }, [_vm._v("User Details")]), _vm._v(" "), _c("div", {
    staticClass: "row container"
  }, [_c("table", {
    staticClass: "table table-bordered table-striped"
  }, [_c("tr", [_c("th", [_vm._v("Full Name :")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.allReportInfo.user_report_info.name))]), _vm._v(" "), _c("th", [_vm._v("Email :")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.allReportInfo.user_report_info.email))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Role:")]), _vm._v(" "), _c("td", [_vm._v("\n                    " + _vm._s(_vm.allReportInfo.user_report_info.roles[0].name) + "\n                  ")]), _vm._v(" "), _c("th", [_vm._v("Employee Code :")]), _vm._v(" "), _c("td", [_vm._v("\n                    " + _vm._s(_vm.allReportInfo.user_report_info.user_more_info.emp_code) + "\n                  ")])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Phone:")]), _vm._v(" "), _c("td", [_vm._v("\n                    " + _vm._s(_vm.allReportInfo.user_report_info.user_more_info.phone) + "\n                  ")]), _vm._v(" "), _c("th", [_vm._v("Designation :")]), _vm._v(" "), _c("td", [_vm._v("\n                    " + _vm._s(_vm.allReportInfo.user_report_info.user_more_info.designation) + "\n                  ")])])])]), _vm._v(" "), _c("h5", {
    staticClass: "card-title text-center"
  }, [_vm._v("Report Details")]), _vm._v(" "), _c("div", {
    staticClass: "row container"
  }, [_c("table", {
    staticClass: "table table-bordered table-striped"
  }, [_c("tr", [_c("th", [_vm._v("Report Code:")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.allReportInfo.report_id))]), _vm._v(" "), _c("th", [_vm._v("Report Cycle")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.allReportInfo.report_cycle))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Report Duration:")]), _vm._v(" "), _c("td", [_vm._v("\n                    " + _vm._s(_vm._f("DateChange")(_vm.allReportInfo.report_duration_from)) + "\n                    - " + _vm._s(_vm._f("DateChange")(_vm.allReportInfo.report_duration_to)) + "\n                  ")]), _vm._v(" "), _c("th", [_vm._v("Added On")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("DateChange")(_vm.allReportInfo.created_at)))])])])]), _vm._v(" "), _c("h5", {
    staticClass: "card-title text-center"
  }, [_vm._v("Performance Details")]), _vm._v(" "), _c("div", {
    staticClass: "row container"
  }, [_c("table", {
    staticClass: "table table-bordered table-striped"
  }, [_vm._m(0), _vm._v(" "), _vm._l(_vm.allReportInfo.report_detail_info, function (detail, index) {
    return _c("tr", {
      key: detail
    }, [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(detail.attributes.title))]), _vm._v(" "), _c("td", [_vm._v("\n                    " + _vm._s(detail.pms_attributes_rating) + " /\n                    " + _vm._s(detail.attributes.max_rating) + "\n                  ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(detail.pms_attributes_comment))])]);
  })], 2)]), _vm._v(" "), _c("h5", {
    staticClass: "card-title text-center"
  }, [_vm._v("Performance Authorization")]), _vm._v(" "), _c("div", {
    staticClass: "row container"
  }, [_c("table", {
    staticClass: "table table-bordered table-striped"
  }, [_c("tr", [_c("th", [_vm._v("Name:")]), _vm._v(" "), _c("td", [_vm._v("\n                    " + _vm._s(_vm.allReportInfo.report_generated_by_user_info.name) + "\n                  ")]), _vm._v(" "), _c("th", [_vm._v("Email")]), _vm._v(" "), _c("td", [_vm._v("\n                    " + _vm._s(_vm.allReportInfo.report_generated_by_user_info.email) + "\n                  ")])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Role:")]), _vm._v(" "), _c("td", [_vm._v("\n                    " + _vm._s(_vm.allReportInfo.report_generated_by_user_info.roles[0].name) + "\n                  ")]), _vm._v(" "), _c("th", [_vm._v("Designation")]), _vm._v(" "), _c("td", [_vm._v("\n                    " + _vm._s(_vm.allReportInfo.report_generated_by_user_info.user_more_info.designation) + "\n                  ")])])])])])])])])], 1)]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("tr", [_c("th", [_vm._v("S.No:")]), _vm._v(" "), _c("th", [_vm._v("Title")]), _vm._v(" "), _c("th", [_vm._v("Rating")]), _vm._v(" "), _c("th", [_vm._v("Comments")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/UserInfo.vue?vue&type=template&id=58ba0362&":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/UserInfo.vue?vue&type=template&id=58ba0362& ***!
  \******************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function render() {
  var _vm = this,
      _c = _vm._self._c;

  return _vm._m(0);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "userInfo"
  }, [_c("h1", [_vm._v("Welcome to Home Page")])]);
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

/***/ "./resources/js/Pages/Admin/ReportInfo.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Admin/ReportInfo.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportInfo_vue_vue_type_template_id_130da8ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportInfo.vue?vue&type=template&id=130da8ea& */ "./resources/js/Pages/Admin/ReportInfo.vue?vue&type=template&id=130da8ea&");
/* harmony import */ var _ReportInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportInfo.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/ReportInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReportInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportInfo_vue_vue_type_template_id_130da8ea___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportInfo_vue_vue_type_template_id_130da8ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/ReportInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/ReportInfo.vue?vue&type=script&lang=js&":
/*!**************************************************************************!*\
  !*** ./resources/js/Pages/Admin/ReportInfo.vue?vue&type=script&lang=js& ***!
  \**************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/ReportInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/ReportInfo.vue?vue&type=template&id=130da8ea&":
/*!********************************************************************************!*\
  !*** ./resources/js/Pages/Admin/ReportInfo.vue?vue&type=template&id=130da8ea& ***!
  \********************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportInfo_vue_vue_type_template_id_130da8ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportInfo.vue?vue&type=template&id=130da8ea& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/ReportInfo.vue?vue&type=template&id=130da8ea&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportInfo_vue_vue_type_template_id_130da8ea___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportInfo_vue_vue_type_template_id_130da8ea___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Admin/UserInfo.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Admin/UserInfo.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserInfo_vue_vue_type_template_id_58ba0362___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserInfo.vue?vue&type=template&id=58ba0362& */ "./resources/js/Pages/Admin/UserInfo.vue?vue&type=template&id=58ba0362&");
/* harmony import */ var _UserInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserInfo.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/UserInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserInfo_vue_vue_type_template_id_58ba0362___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserInfo_vue_vue_type_template_id_58ba0362___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Pages/Admin/UserInfo.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Pages/Admin/UserInfo.vue?vue&type=script&lang=js&":
/*!************************************************************************!*\
  !*** ./resources/js/Pages/Admin/UserInfo.vue?vue&type=script&lang=js& ***!
  \************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserInfo.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/UserInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Pages/Admin/UserInfo.vue?vue&type=template&id=58ba0362&":
/*!******************************************************************************!*\
  !*** ./resources/js/Pages/Admin/UserInfo.vue?vue&type=template&id=58ba0362& ***!
  \******************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInfo_vue_vue_type_template_id_58ba0362___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserInfo.vue?vue&type=template&id=58ba0362& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/UserInfo.vue?vue&type=template&id=58ba0362&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInfo_vue_vue_type_template_id_58ba0362___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInfo_vue_vue_type_template_id_58ba0362___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);