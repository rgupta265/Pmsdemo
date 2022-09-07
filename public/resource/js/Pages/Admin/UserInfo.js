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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Layouts/Loader.vue?vue&type=script&lang=js&":
/*!*************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Layouts/Loader.vue?vue&type=script&lang=js& ***!
  \*************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ({});

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
/* harmony import */ var _resources_js_Components_Layouts_Loader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! .../../../resources/js/Components/Layouts/Loader */ "./resources/js/Components/Layouts/Loader.vue");
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! html2pdf.js */ "./node_modules/html2pdf.js/dist/html2pdf.js");
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(html2pdf_js__WEBPACK_IMPORTED_MODULE_2__);



/* harmony default export */ __webpack_exports__["default"] = ({
  name: "reportInfo",
  components: {
    Breadcrumb: _resources_js_Components_Layouts_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__["default"],
    Loader: _resources_js_Components_Layouts_Loader__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      isLoading: false,
      repToken: this.$route.query.token,
      allReportInfo: [],
      downloadStatus: this.$route.query.downloadPdf
    };
  },
  created: function created() {
    var _this = this;

    axios.get("getReportInfo/" + this.repToken).then(function (response) {
      _this.allReportInfo = response.data;
    })["catch"](function (error) {});
  },
  mounted: function mounted() {
    var _this2 = this;

    if (this.downloadStatus == true) {
      this.isLoading = true;
      setTimeout(function () {
        _this2.$refs.myPrintBtn.click();

        _this2.isLoading = false;

        _this2.$router.go(-1);
      }, 2000);
    }
  },
  methods: {
    printReport: function printReport() {
      var element = document.getElementById("printableArea");
      var opt = {
        filename: this.allReportInfo.report_id + ".pdf",
        html2canvas: {
          scale: 2
        },
        jsPDF: {
          unit: "in",
          format: "A4",
          orientation: "portrait"
        }
      }; // New Promise-based usage:

      html2pdf_js__WEBPACK_IMPORTED_MODULE_2___default()().set(opt).from(element).save();
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
/* harmony import */ var _resources_js_Components_Layouts_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! .../../../resources/js/Components/Layouts/Breadcrumb */ "./resources/js/Components/Layouts/Breadcrumb.vue");
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! html2pdf.js */ "./node_modules/html2pdf.js/dist/html2pdf.js");
/* harmony import */ var html2pdf_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(html2pdf_js__WEBPACK_IMPORTED_MODULE_1__);


/* harmony default export */ __webpack_exports__["default"] = ({
  name: "reportInfo",
  components: {
    Breadcrumb: _resources_js_Components_Layouts_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__["default"]
  },
  data: function data() {
    return {
      userId: this.$route.query.accessToken,
      allUserInfo: [],
      newIndex: null
    };
  },
  created: function created() {
    var _this = this;

    axios.get("getUserInfo/" + this.userId).then(function (response) {
      _this.allUserInfo = response.data;
    })["catch"](function (error) {});
  },
  mounted: function mounted() {},
  methods: {
    printReport: function printReport() {
      var element = document.getElementById("printableArea");
      var opt = {
        filename: this.allUserInfo.name + ".pdf",
        html2canvas: {
          scale: 2
        },
        jsPDF: {
          unit: "in",
          format: "A4",
          orientation: "portrait"
        }
      }; // New Promise-based usage:

      html2pdf_js__WEBPACK_IMPORTED_MODULE_1___default()().set(opt).from(element).save();
    },
    viewReportDetail: function viewReportDetail(index) {
      this.newIndex = index;
    }
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Layouts/Loader.vue?vue&type=template&id=a0ab65f8&scoped=true&":
/*!***********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Layouts/Loader.vue?vue&type=template&id=a0ab65f8&scoped=true& ***!
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
    attrs: {
      id: "loading"
    }
  }, [_vm._v("Please Wait .....")]);
};

var staticRenderFns = [];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/ReportInfo.vue?vue&type=template&id=130da8ea&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/ReportInfo.vue?vue&type=template&id=130da8ea&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************/
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
  }, [_c("Loader", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: _vm.isLoading,
      expression: "isLoading"
    }]
  }), _vm._v(" "), _c("main", {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: !_vm.isLoading,
      expression: "!isLoading"
    }],
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
  }, [_c("button", {
    staticClass: "icon d-print-none"
  }, [_c("i", {
    ref: "myPrintBtn",
    staticClass: "bi bi-download",
    on: {
      click: _vm.printReport
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
  }, [_vm._v("Performance Authorization / Inviter ")]), _vm._v(" "), _c("div", {
    staticClass: "row container"
  }, [_c("table", {
    staticClass: "table table-bordered table-striped"
  }, [_c("tr", [_c("th", [_vm._v("Name:")]), _vm._v(" "), _c("td", [_vm._v("\n                    " + _vm._s(_vm.allReportInfo.report_generated_by_user_info.name) + "\n                  ")]), _vm._v(" "), _c("th", [_vm._v("Email")]), _vm._v(" "), _c("td", [_vm._v("\n                    " + _vm._s(_vm.allReportInfo.report_generated_by_user_info.email) + "\n                  ")])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Role:")]), _vm._v(" "), _c("td", [_vm._v("\n                    " + _vm._s(_vm.allReportInfo.report_generated_by_user_info.roles[0].name) + "\n                  ")]), _vm._v(" "), _c("th", [_vm._v("Designation")]), _vm._v(" "), _c("td", [_vm._v("\n                    " + _vm._s(_vm.allReportInfo.report_generated_by_user_info.user_more_info.designation) + "\n                  ")])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Remarks:")]), _vm._v(" "), _c("td", {
    attrs: {
      colspan: "3"
    }
  }, [_vm._v("\n                    " + _vm._s(_vm.allReportInfo.remarks) + "\n                  ")])])])])])])])])], 1)], 1);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("tr", [_c("th", [_vm._v("S.No:")]), _vm._v(" "), _c("th", [_vm._v("Title")]), _vm._v(" "), _c("th", [_vm._v("Rating")]), _vm._v(" "), _c("th", [_vm._v("Comments")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/UserInfo.vue?vue&type=template&id=58ba0362&scoped=true&":
/*!******************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/UserInfo.vue?vue&type=template&id=58ba0362&scoped=true& ***!
  \******************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "userInfo"
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
  }, [_c("div", {
    staticClass: "container"
  }, [_c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-sm-9"
  }, [_c("button", {
    staticClass: "icon d-print-none"
  }, [_c("i", {
    ref: "myPrintBtn",
    staticClass: "bi bi-download",
    on: {
      click: _vm.printReport
    }
  })]), _vm._v(" "), _c("h5", {
    staticClass: "card-title"
  }, [_vm._v("\n                    User Details Of " + _vm._s(_vm.allUserInfo.name) + "\n                  ")]), _vm._v(" "), _c("p", {
    staticClass: "small fst-italic"
  }, [_vm._v("\n                    This details basically belongs to " + _vm._s(_vm.allUserInfo.name) + "\n                    "), _c("b")])]), _vm._v(" "), _c("div", {
    staticClass: "col-sm-3"
  }, [_vm.allUserInfo.user_more_info && _vm.allUserInfo.user_more_info.image !== null ? _c("img", {
    staticClass: "rounded border",
    attrs: {
      src: "/storage/ProfileImage/".concat(_vm.allUserInfo.user_more_info.image),
      alt: "Profile",
      height: "120",
      width: "120"
    }
  }) : _c("img", {
    staticClass: "rounded border",
    attrs: {
      src: "backendTheme/assets/img/default_image/no_image.png",
      alt: "Profile",
      height: "120",
      width: "120"
    }
  })])])]), _vm._v(" "), _c("h5", {
    staticClass: "card-title text-center"
  }, [_vm._v("User Info")]), _vm._v(" "), _c("div", {
    staticClass: "row container"
  }, [_c("table", {
    staticClass: "table table-bordered table-striped"
  }, [_c("tr", [_c("th", [_vm._v("Full Name :")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.allUserInfo.name))]), _vm._v(" "), _c("th", [_vm._v("Email :")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.allUserInfo.email))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Registration Date:")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm._f("DateChange")(_vm.allUserInfo.created_at)))]), _vm._v(" "), _c("th", [_vm._v("Current Status :")]), _vm._v(" "), _c("td", [_vm.allUserInfo.status == 0 ? _c("span", {
    staticClass: "badge bg-danger"
  }, [_vm._v("Deactive")]) : _vm._e(), _vm._v(" "), _vm.allUserInfo.status == 1 ? _c("span", {
    staticClass: "badge bg-success"
  }, [_vm._v("Active")]) : _vm._e(), _vm._v(" "), _vm.allUserInfo.status == 2 ? _c("span", {
    staticClass: "badge bg-warning"
  }, [_vm._v("Block /Suspend")]) : _vm._e()])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Role:")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.allUserInfo.roles[0].name))]), _vm._v(" "), _c("th", [_vm._v("Employee Code :")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.allUserInfo.user_more_info.emp_code ? _vm.allUserInfo.user_more_info.emp_code : "-------------"))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Phone:")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.allUserInfo.user_more_info.phone ? _vm.allUserInfo.user_more_info.phone : "-------------"))]), _vm._v(" "), _c("th", [_vm._v("Designation :")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.allUserInfo.user_more_info.designation ? _vm.allUserInfo.user_more_info.designation : "-------------"))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Father Name:")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.allUserInfo.user_more_info.father_name ? _vm.allUserInfo.user_more_info.father_name : "-------------"))]), _vm._v(" "), _c("th", [_vm._v("Linkedin Id :")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.allUserInfo.user_more_info.linkedin_id ? _vm.allUserInfo.user_more_info.linkedin_id : "-------------"))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Permanent Address :")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.allUserInfo.user_more_info.address ? _vm.allUserInfo.user_more_info.address : "-------------"))]), _vm._v(" "), _c("th", [_vm._v("Joining Date:")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(_vm.allUserInfo.user_more_info.joining_date ? _vm.allUserInfo.user_more_info.joining_date : "-------------"))])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Correspondence Address:")]), _vm._v(" "), _c("td", [_vm._v("\n                    " + _vm._s(_vm.allUserInfo.user_more_info.correspondence_address ? _vm.allUserInfo.user_more_info.correspondence_address : "-------------") + "\n                  ")]), _vm._v(" "), _c("th", [_vm._v("Working Status :")]), _vm._v(" "), _c("td", [_vm.allUserInfo.user_more_info.status == 0 ? _c("span", {
    staticClass: "badge bg-danger"
  }, [_vm._v("Resign")]) : _vm._e(), _vm._v(" "), _vm.allUserInfo.user_more_info.status == 1 ? _c("span", {
    staticClass: "badge bg-success"
  }, [_vm._v("Joined")]) : _vm._e()])])])]), _vm._v(" "), _vm.allUserInfo.reports ? _c("h5", {
    staticClass: "card-title text-center"
  }, [_vm._v("\n              Inviter / Report Generated By\n            ")]) : _vm._e(), _vm._v(" "), _c("div", {
    staticClass: "row container"
  }, [_c("table", {
    staticClass: "table table-bordered table-striped"
  }, [_c("tr", [_c("th", [_vm._v("Name:")]), _vm._v(" "), _c("td", [_vm._v("\n                    " + _vm._s(_vm.allUserInfo.reports[0].report_generated_by_user_info.name) + "\n                  ")]), _vm._v(" "), _c("th", [_vm._v("Email")]), _vm._v(" "), _c("td", [_vm._v("\n                    " + _vm._s(_vm.allUserInfo.reports[0].report_generated_by_user_info.email) + "\n                  ")])]), _vm._v(" "), _c("tr", [_c("th", [_vm._v("Role:")]), _vm._v(" "), _c("td", [_vm._v("\n                    " + _vm._s(_vm.allUserInfo.reports[0].report_generated_by_user_info.roles[0].name) + "\n                  ")])])])]), _vm._v(" "), _c("h5", {
    staticClass: "card-title text-center"
  }, [_vm._v("Report Generated")]), _vm._v(" "), _vm.allUserInfo.reports ? _c("div", {
    staticClass: "row container"
  }, [_c("table", {
    staticClass: "table table-bordered table-striped"
  }, [_vm._m(0), _vm._v(" "), _vm._l(_vm.allUserInfo.reports, function (report, index) {
    return _c("tr", {
      key: index
    }, [_c("td", [_vm._v(_vm._s(index + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(report.report_id))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(report.report_cycle))]), _vm._v(" "), _c("td", [_vm._v("\n                    " + _vm._s(_vm._f("DateChange")(report.report_duration_from)) + " -\n                    " + _vm._s(_vm._f("DateChange")(report.report_duration_to)) + "\n                  ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(report.remarks))]), _vm._v(" "), _c("td", [_c("span", {
      staticClass: "badge bg-info",
      attrs: {
        role: "button"
      },
      on: {
        click: function click($event) {
          return _vm.viewReportDetail(index);
        }
      }
    }, [_vm._v("\n                      View")])])]);
  })], 2)]) : _vm._e(), _vm._v(" "), _vm.newIndex != null ? _c("h5", {
    staticClass: "card-title text-center"
  }, [_vm._v("\n              More Info Of Report Id\n            ")]) : _vm._e(), _vm._v(" "), _vm.newIndex != null ? _c("div", {
    staticClass: "row container"
  }, [_c("table", {
    staticClass: "table table-bordered table-striped"
  }, [_vm._m(1), _vm._v(" "), _vm._l(_vm.allUserInfo.reports[this.newIndex].report_detail_info, function (repDetail, item) {
    return _c("tr", {
      key: item
    }, [_c("td", [_vm._v(_vm._s(item + 1))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(repDetail.report_id))]), _vm._v(" "), _c("td", [_vm._v(_vm._s(repDetail.attributes.title))]), _vm._v(" "), _c("td", [_vm._v("\n                    " + _vm._s(repDetail.pms_attributes_rating) + " /\n                    " + _vm._s(repDetail.attributes.max_rating) + "\n                  ")]), _vm._v(" "), _c("td", [_vm._v(_vm._s(repDetail.pms_attributes_comment))])]);
  })], 2)]) : _vm._e()])])])])], 1)]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("tr", [_c("th", [_vm._v("S.No:")]), _vm._v(" "), _c("th", [_vm._v("Report ID")]), _vm._v(" "), _c("th", [_vm._v("Report Cycle")]), _vm._v(" "), _c("th", [_vm._v("Duration")]), _vm._v(" "), _c("th", [_vm._v("Remarks")]), _vm._v(" "), _c("th", [_vm._v("Action")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("tr", [_c("th", [_vm._v("S.No:")]), _vm._v(" "), _c("th", [_vm._v("Report Id")]), _vm._v(" "), _c("th", [_vm._v("Title")]), _vm._v(" "), _c("th", [_vm._v("Rating")]), _vm._v(" "), _c("th", [_vm._v("Comments")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Layouts/Loader.vue?vue&type=style&index=0&id=a0ab65f8&scoped=true&lang=css&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Layouts/Loader.vue?vue&type=style&index=0&id=a0ab65f8&scoped=true&lang=css& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n#loading[data-v-a0ab65f8] {\n  /* opacity: 0.1; */\n  background-color: aliceblue;\n  color: blue;\n  font-size: 50px;\n  padding-top: 10vh;\n  height: 100vh;\n  text-align: center;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Layouts/Loader.vue?vue&type=style&index=0&id=a0ab65f8&scoped=true&lang=css&":
/*!************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Components/Layouts/Loader.vue?vue&type=style&index=0&id=a0ab65f8&scoped=true&lang=css& ***!
  \************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=style&index=0&id=a0ab65f8&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Layouts/Loader.vue?vue&type=style&index=0&id=a0ab65f8&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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

/***/ "./resources/js/Components/Layouts/Loader.vue":
/*!****************************************************!*\
  !*** ./resources/js/Components/Layouts/Loader.vue ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Loader_vue_vue_type_template_id_a0ab65f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Loader.vue?vue&type=template&id=a0ab65f8&scoped=true& */ "./resources/js/Components/Layouts/Loader.vue?vue&type=template&id=a0ab65f8&scoped=true&");
/* harmony import */ var _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Loader.vue?vue&type=script&lang=js& */ "./resources/js/Components/Layouts/Loader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Loader_vue_vue_type_style_index_0_id_a0ab65f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Loader.vue?vue&type=style&index=0&id=a0ab65f8&scoped=true&lang=css& */ "./resources/js/Components/Layouts/Loader.vue?vue&type=style&index=0&id=a0ab65f8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Loader_vue_vue_type_template_id_a0ab65f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Loader_vue_vue_type_template_id_a0ab65f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "a0ab65f8",
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "resources/js/Components/Layouts/Loader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./resources/js/Components/Layouts/Loader.vue?vue&type=script&lang=js&":
/*!*****************************************************************************!*\
  !*** ./resources/js/Components/Layouts/Loader.vue?vue&type=script&lang=js& ***!
  \*****************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=script&lang=js& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Layouts/Loader.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./resources/js/Components/Layouts/Loader.vue?vue&type=style&index=0&id=a0ab65f8&scoped=true&lang=css&":
/*!*************************************************************************************************************!*\
  !*** ./resources/js/Components/Layouts/Loader.vue?vue&type=style&index=0&id=a0ab65f8&scoped=true&lang=css& ***!
  \*************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_a0ab65f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/style-loader!../../../../node_modules/css-loader??ref--6-1!../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../node_modules/postcss-loader/src??ref--6-2!../../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=style&index=0&id=a0ab65f8&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Layouts/Loader.vue?vue&type=style&index=0&id=a0ab65f8&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_a0ab65f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_a0ab65f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_a0ab65f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_style_index_0_id_a0ab65f8_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/Components/Layouts/Loader.vue?vue&type=template&id=a0ab65f8&scoped=true&":
/*!***********************************************************************************************!*\
  !*** ./resources/js/Components/Layouts/Loader.vue?vue&type=template&id=a0ab65f8&scoped=true& ***!
  \***********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_a0ab65f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./Loader.vue?vue&type=template&id=a0ab65f8&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Components/Layouts/Loader.vue?vue&type=template&id=a0ab65f8&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_a0ab65f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_Loader_vue_vue_type_template_id_a0ab65f8_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Admin/ReportInfo.vue":
/*!*************************************************!*\
  !*** ./resources/js/Pages/Admin/ReportInfo.vue ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ReportInfo_vue_vue_type_template_id_130da8ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ReportInfo.vue?vue&type=template&id=130da8ea&scoped=true& */ "./resources/js/Pages/Admin/ReportInfo.vue?vue&type=template&id=130da8ea&scoped=true&");
/* harmony import */ var _ReportInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ReportInfo.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/ReportInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _ReportInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ReportInfo_vue_vue_type_template_id_130da8ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ReportInfo_vue_vue_type_template_id_130da8ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "130da8ea",
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

/***/ "./resources/js/Pages/Admin/ReportInfo.vue?vue&type=template&id=130da8ea&scoped=true&":
/*!********************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/ReportInfo.vue?vue&type=template&id=130da8ea&scoped=true& ***!
  \********************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportInfo_vue_vue_type_template_id_130da8ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./ReportInfo.vue?vue&type=template&id=130da8ea&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/ReportInfo.vue?vue&type=template&id=130da8ea&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportInfo_vue_vue_type_template_id_130da8ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ReportInfo_vue_vue_type_template_id_130da8ea_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./resources/js/Pages/Admin/UserInfo.vue":
/*!***********************************************!*\
  !*** ./resources/js/Pages/Admin/UserInfo.vue ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _UserInfo_vue_vue_type_template_id_58ba0362_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./UserInfo.vue?vue&type=template&id=58ba0362&scoped=true& */ "./resources/js/Pages/Admin/UserInfo.vue?vue&type=template&id=58ba0362&scoped=true&");
/* harmony import */ var _UserInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./UserInfo.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/UserInfo.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _UserInfo_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _UserInfo_vue_vue_type_template_id_58ba0362_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _UserInfo_vue_vue_type_template_id_58ba0362_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "58ba0362",
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

/***/ "./resources/js/Pages/Admin/UserInfo.vue?vue&type=template&id=58ba0362&scoped=true&":
/*!******************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/UserInfo.vue?vue&type=template&id=58ba0362&scoped=true& ***!
  \******************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInfo_vue_vue_type_template_id_58ba0362_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/babel-loader/lib??ref--4-0!../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../node_modules/vue-loader/lib??vue-loader-options!./UserInfo.vue?vue&type=template&id=58ba0362&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/UserInfo.vue?vue&type=template&id=58ba0362&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInfo_vue_vue_type_template_id_58ba0362_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_UserInfo_vue_vue_type_template_id_58ba0362_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);