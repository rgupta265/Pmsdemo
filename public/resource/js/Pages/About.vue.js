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
function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); enumerableOnly && (symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; })), keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = null != arguments[i] ? arguments[i] : {}; i % 2 ? ownKeys(Object(source), !0).forEach(function (key) { _defineProperty(target, key, source[key]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)) : ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




/* harmony default export */ __webpack_exports__["default"] = ({
  name: "viewprofile",
  components: {
    Breadcrumb: _resources_js_Components_Layouts_Breadcrumb__WEBPACK_IMPORTED_MODULE_0__["default"],
    Alert: _resources_js_Components_Layouts_Alert__WEBPACK_IMPORTED_MODULE_1__["default"]
  },
  data: function data() {
    return {
      userProfile: {
        emp_code: "",
        designation: "",
        father_name: "",
        address: "",
        correspondence_address: "",
        phone: "",
        emergency_contactno: "",
        linkedin_id: "",
        joining_date: ""
      },
      userPass: {
        new_password: "",
        confirm_password: ""
      },
      showError: false,
      api: "userProfile",
      success: "",
      image: ""
    };
  },
  computed: _objectSpread({}, Object(vuex__WEBPACK_IMPORTED_MODULE_2__["mapGetters"])({
    userDetails: "getUserDetails",
    errors: "getError"
  })),
  mounted: function mounted() {
    this.userProfile.emp_code = this.userDetails.userInfo.emp_code;
    this.image = this.userDetails.userInfo.image;
    this.userProfile.designation = this.userDetails.userInfo.designation;
    this.userProfile.father_name = this.userDetails.userInfo.father_name;
    this.userProfile.address = this.userDetails.userInfo.address;
    this.userProfile.correspondence_address = this.userDetails.userInfo.correspondence_address;
    this.userProfile.phone = this.userDetails.userInfo.phone;
    this.userProfile.emergency_contactno = this.userDetails.userInfo.emergency_contactno;
    this.userProfile.linkedin_id = this.userDetails.userInfo.linkedin_id;
    this.userProfile.joining_date = this.userDetails.userInfo.joining_date;
  },
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

        _this.$toast.success(resp.data.success);

        _this.$store.dispatch("logout");

        _this.$router.push("/");
      })["catch"](function (err) {// this.showError = true;
      });
    },
    onFileChange: function onFileChange(e) {
      this.image = e.target.files[0];

      if (!this.image) {
        e.preventDefault();
        this.$toast.error("No file Choosen");
        return;
      }

      if (this.image.size > 1024 * 1024) {
        e.preventDefault();
        this.$toast.error("File is too big (You can upload maximum upto 1MB)");
        return;
      }

      this.uploadProfileImage();
    },
    uploadProfileImage: function uploadProfileImage() {
      var _this2 = this;

      var formDataImage = new FormData();
      formDataImage.append("image", this.image);
      axios.post("upload-image", formDataImage).then(function (response) {
        _this2.$store.dispatch("getUserDetails");

        _this2.$toast.success(response.data.success);
      })["catch"](function (err) {
        console.log(err);
      });
    },
    updateProfile: function updateProfile() {
      var _this3 = this;

      var formData = new FormData();
      formData.append("emp_code", this.userProfile.emp_code);
      formData.append("designation", this.userProfile.designation);
      formData.append("father_name", this.userProfile.father_name);
      formData.append("address", this.userProfile.address);
      formData.append("correspondence_address", this.userProfile.correspondence_address);
      formData.append("phone", this.userProfile.phone);
      formData.append("emergency_contactno", this.userProfile.emergency_contactno);
      formData.append("linkedin_id", this.userProfile.linkedin_id);
      formData.append("joining_date", this.userProfile.joining_date); // send upload request

      axios.post(this.api, formData).then(function (response) {
        _this3.success = response.data.success;

        _this3.$store.dispatch("getUserDetails");
      })["catch"](function (error) {});
    }
  })
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

/***/ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=template&id=cfb24ef6&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/babel-loader/lib??ref--4-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=template&id=cfb24ef6&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************/
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
    staticClass: "col-xl-4"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body profile-card pt-4 d-flex flex-column align-items-center"
  }, [_vm.userDetails.userInfo.image ? _c("img", {
    staticClass: "rounded-circle border",
    attrs: {
      src: "/storage/ProfileImage/".concat(_vm.userDetails.userInfo.image),
      alt: "Profile"
    }
  }) : _c("img", {
    staticClass: "rounded border",
    attrs: {
      src: "backendTheme/assets/img/default_image/no_image.png",
      alt: "Profile",
      height: "120",
      width: "120"
    }
  }), _vm._v(" "), _c("label", {
    staticClass: "in-file mt-2",
    attrs: {
      role: "button"
    }
  }, [_c("i", {
    staticClass: "bi bi-upload"
  }), _vm._v("\n                Upload Photo\n                "), _c("input", {
    staticClass: "form-control",
    attrs: {
      type: "file",
      accept: "image/*"
    },
    on: {
      change: _vm.onFileChange
    }
  })]), _vm._v(" "), _c("h2", [_vm._v(_vm._s(_vm.userDetails.name))]), _vm._v(" "), _c("h3", [_vm._v(_vm._s(_vm.userDetails.userInfo.designation))]), _vm._v(" "), _c("h3", [_vm._v(_vm._s(_vm.userDetails.email))]), _vm._v(" "), _c("div", {
    staticClass: "social-links mt-2"
  }, [_vm.userDetails.userInfo.linkedin_id ? _c("a", {
    staticClass: "linkedin",
    attrs: {
      href: _vm.userDetails.userInfo.linkedin_id,
      target: "_blank"
    }
  }, [_c("i", {
    staticClass: "bi bi-linkedin"
  })]) : _vm._e()])])])]), _vm._v(" "), _c("div", {
    staticClass: "col-xl-8"
  }, [_c("div", {
    staticClass: "card"
  }, [_c("div", {
    staticClass: "card-body pt-3"
  }, [_vm._m(0), _vm._v(" "), _c("div", {
    staticClass: "tab-content pt-2"
  }, [_c("div", {
    staticClass: "tab-pane fade show active profile-overview",
    attrs: {
      id: "profile-overview"
    }
  }, [_c("h5", {
    staticClass: "card-title"
  }, [_vm._v("Profile Details")]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-3 col-md-4 label"
  }, [_vm._v("Full Name")]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-9 col-md-8"
  }, [_vm._v("\n                      " + _vm._s(_vm.userDetails.name) + "\n                    ")])]), _vm._v(" "), _vm._m(1), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-3 col-md-4 label"
  }, [_vm._v("Job")]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-9 col-md-8"
  }, [_vm._v("\n                      " + _vm._s(_vm.userDetails.userInfo.designation) + "\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-3 col-md-4 label"
  }, [_vm._v("Address")]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-9 col-md-8"
  }, [_vm._v("\n                      " + _vm._s(_vm.userDetails.userInfo.address) + "\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-3 col-md-4 label"
  }, [_vm._v("Phone")]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-9 col-md-8"
  }, [_vm._v("\n                      " + _vm._s(_vm.userDetails.userInfo.phone) + "\n                    ")])]), _vm._v(" "), _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-3 col-md-4 label"
  }, [_vm._v("Email")]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-9 col-md-8"
  }, [_vm._v("\n                      " + _vm._s(_vm.userDetails.email) + "\n                    ")])])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane fade profile-edit pt-3",
    attrs: {
      id: "profile-edit"
    }
  }, [_c("div", {
    attrs: {
      id: "msg"
    }
  }, [_c("Alert", {
    attrs: {
      data: _vm.success
    }
  })], 1), _vm._v(" "), _c("form", {
    attrs: {
      method: "post",
      enctype: "multipart/form-data"
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.updateProfile.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "row mb-3"
  }, [_c("label", {
    staticClass: "col-md-4 col-lg-3 col-form-label",
    attrs: {
      "for": "fullName"
    }
  }, [_vm._v("Full Name")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8 col-lg-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.userDetails.name,
      expression: "userDetails.name"
    }],
    staticClass: "form-control",
    attrs: {
      name: "fullName",
      type: "text",
      disabled: ""
    },
    domProps: {
      value: _vm.userDetails.name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.userDetails, "name", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row mb-3"
  }, [_c("label", {
    staticClass: "col-md-4 col-lg-3 col-form-label",
    attrs: {
      "for": "Email"
    }
  }, [_vm._v("Email")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8 col-lg-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.userDetails.email,
      expression: "userDetails.email"
    }],
    staticClass: "form-control",
    attrs: {
      type: "email",
      disabled: ""
    },
    domProps: {
      value: _vm.userDetails.email
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.userDetails, "email", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row mb-3"
  }, [_c("label", {
    staticClass: "col-md-4 col-lg-3 col-form-label",
    attrs: {
      "for": "empcode"
    }
  }, [_vm._v("Employee code")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8 col-lg-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.userProfile.emp_code,
      expression: "userProfile.emp_code"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      required: ""
    },
    domProps: {
      value: _vm.userProfile.emp_code
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.userProfile, "emp_code", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row mb-3"
  }, [_c("label", {
    staticClass: "col-md-4 col-lg-3 col-form-label",
    attrs: {
      "for": "empcode"
    }
  }, [_vm._v("Joining Date")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8 col-lg-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.userProfile.joining_date,
      expression: "userProfile.joining_date"
    }],
    staticClass: "form-control",
    attrs: {
      type: "date"
    },
    domProps: {
      value: _vm.userProfile.joining_date
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.userProfile, "joining_date", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row mb-3"
  }, [_c("label", {
    staticClass: "col-md-4 col-lg-3 col-form-label",
    attrs: {
      "for": "designation"
    }
  }, [_vm._v("Designation")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8 col-lg-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.userProfile.designation,
      expression: "userProfile.designation"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.userProfile.designation
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.userProfile, "designation", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row mb-3"
  }, [_c("label", {
    staticClass: "col-md-4 col-lg-3 col-form-label",
    attrs: {
      "for": "father name"
    }
  }, [_vm._v("Father name")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8 col-lg-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.userProfile.father_name,
      expression: "userProfile.father_name"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.userProfile.father_name
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.userProfile, "father_name", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row mb-3"
  }, [_c("label", {
    staticClass: "col-md-4 col-lg-3 col-form-label",
    attrs: {
      "for": "address"
    }
  }, [_vm._v("Address")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8 col-lg-9"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.userProfile.address,
      expression: "userProfile.address"
    }],
    staticClass: "form-control",
    domProps: {
      value: _vm.userProfile.address
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.userProfile, "address", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row mb-3"
  }, [_c("label", {
    staticClass: "col-md-4 col-lg-3 col-form-label",
    attrs: {
      "for": "Correspondence Address"
    }
  }, [_vm._v("Correspondence Address")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8 col-lg-9"
  }, [_c("textarea", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.userProfile.correspondence_address,
      expression: "userProfile.correspondence_address"
    }],
    staticClass: "form-control",
    domProps: {
      value: _vm.userProfile.correspondence_address
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.userProfile, "correspondence_address", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row mb-3"
  }, [_c("label", {
    staticClass: "col-md-4 col-lg-3 col-form-label",
    attrs: {
      "for": "Phone"
    }
  }, [_vm._v("Phone")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8 col-lg-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.userProfile.phone,
      expression: "userProfile.phone"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "13",
      onkeyup: "if (/\\D/g.test(this.value)) this.value = this.value.replace(/\\D/g,'')"
    },
    domProps: {
      value: _vm.userProfile.phone
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.userProfile, "phone", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row mb-3"
  }, [_c("label", {
    staticClass: "col-md-4 col-lg-3 col-form-label",
    attrs: {
      "for": "emergency contactno"
    }
  }, [_vm._v("Emergency contactno.")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8 col-lg-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.userProfile.emergency_contactno,
      expression: "userProfile.emergency_contactno"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text",
      maxlength: "13",
      onkeyup: "if (/\\D/g.test(this.value)) this.value = this.value.replace(/\\D/g,'')"
    },
    domProps: {
      value: _vm.userProfile.emergency_contactno
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.userProfile, "emergency_contactno", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row mb-3"
  }, [_c("label", {
    staticClass: "col-md-4 col-lg-3 col-form-label",
    attrs: {
      "for": "Linkedin"
    }
  }, [_vm._v("Linkedin Profile")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8 col-lg-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.userProfile.linkedin_id,
      expression: "userProfile.linkedin_id"
    }],
    staticClass: "form-control",
    attrs: {
      type: "text"
    },
    domProps: {
      value: _vm.userProfile.linkedin_id
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.userProfile, "linkedin_id", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _vm._m(2)])]), _vm._v(" "), _c("div", {
    staticClass: "tab-pane fade pt-3",
    attrs: {
      id: "profile-change-password"
    }
  }, [_c("Alert", {
    attrs: {
      data: _vm.success
    }
  }), _vm._v(" "), _c("form", {
    attrs: {
      method: "post",
      action: ""
    },
    on: {
      submit: function submit($event) {
        $event.preventDefault();
        return _vm.changePassword.apply(null, arguments);
      }
    }
  }, [_c("div", {
    staticClass: "row mb-3"
  }, [_c("label", {
    staticClass: "col-md-4 col-lg-3 col-form-label",
    attrs: {
      "for": "newPassword"
    }
  }, [_vm._v("New Password")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8 col-lg-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.userPass.new_password,
      expression: "userPass.new_password"
    }],
    staticClass: "form-control",
    attrs: {
      type: "password"
    },
    domProps: {
      value: _vm.userPass.new_password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.userPass, "new_password", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _c("div", {
    staticClass: "row mb-3"
  }, [_c("label", {
    staticClass: "col-md-4 col-lg-3 col-form-label",
    attrs: {
      "for": "renewPassword"
    }
  }, [_vm._v("Confirm New Password")]), _vm._v(" "), _c("div", {
    staticClass: "col-md-8 col-lg-9"
  }, [_c("input", {
    directives: [{
      name: "model",
      rawName: "v-model",
      value: _vm.userPass.confirm_password,
      expression: "userPass.confirm_password"
    }],
    staticClass: "form-control",
    attrs: {
      type: "password"
    },
    domProps: {
      value: _vm.userPass.confirm_password
    },
    on: {
      input: function input($event) {
        if ($event.target.composing) return;

        _vm.$set(_vm.userPass, "confirm_password", $event.target.value);
      }
    }
  })])]), _vm._v(" "), _vm._m(3)])], 1)])])])])])])], 1)]);
};

var staticRenderFns = [function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("ul", {
    staticClass: "nav nav-tabs nav-tabs-bordered"
  }, [_c("li", {
    staticClass: "nav-item"
  }, [_c("button", {
    staticClass: "nav-link active",
    attrs: {
      "data-bs-toggle": "tab",
      "data-bs-target": "#profile-overview"
    }
  }, [_vm._v("\n                    Overview\n                  ")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("button", {
    staticClass: "nav-link",
    attrs: {
      "data-bs-toggle": "tab",
      "data-bs-target": "#profile-edit"
    }
  }, [_vm._v("\n                    Edit Profile\n                  ")])]), _vm._v(" "), _c("li", {
    staticClass: "nav-item"
  }, [_c("button", {
    staticClass: "nav-link",
    attrs: {
      "data-bs-toggle": "tab",
      "data-bs-target": "#profile-change-password"
    }
  }, [_vm._v("\n                    Change Password\n                  ")])])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "row"
  }, [_c("div", {
    staticClass: "col-lg-3 col-md-4 label"
  }, [_vm._v("Company")]), _vm._v(" "), _c("div", {
    staticClass: "col-lg-9 col-md-8"
  }, [_vm._v("Galaxy Weblinks")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("\n                        Update Profile\n                      ")])]);
}, function () {
  var _vm = this,
      _c = _vm._self._c;

  return _c("div", {
    staticClass: "text-center"
  }, [_c("button", {
    staticClass: "btn btn-primary",
    attrs: {
      type: "submit"
    }
  }, [_vm._v("\n                        Change Password\n                      ")])]);
}];
render._withStripped = true;


/***/ }),

/***/ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=style&index=0&id=cfb24ef6&scoped=true&lang=css&":
/*!**************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=style&index=0&id=cfb24ef6&scoped=true&lang=css& ***!
  \**************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\n.in-file[data-v-cfb24ef6] {\n  padding: 10px;\n  background: lightseagreen;\n  display: table;\n  color: blanchedalmond;\n  text-decoration: none;\n  font-size: 15px;\n  font-weight: 600;\n  transition: 0.3;\n  border-radius: 4px;\n}\ninput[type=\"file\"][data-v-cfb24ef6] {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=style&index=0&id=cfb24ef6&scoped=true&lang=css&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/style-loader!./node_modules/css-loader??ref--6-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--6-2!./node_modules/vue-loader/lib??vue-loader-options!./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=style&index=0&id=cfb24ef6&scoped=true&lang=css& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


var content = __webpack_require__(/*! !../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ViewProfile.vue?vue&type=style&index=0&id=cfb24ef6&scoped=true&lang=css& */ "./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=style&index=0&id=cfb24ef6&scoped=true&lang=css&");

if(typeof content === 'string') content = [[module.i, content, '']];

var transform;
var insertInto;



var options = {"hmr":true}

options.transform = transform
options.insertInto = undefined;

var update = __webpack_require__(/*! ../../../../../node_modules/style-loader/lib/addStyles.js */ "./node_modules/style-loader/lib/addStyles.js")(content, options);

if(content.locals) module.exports = content.locals;

if(false) {}

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

/***/ "./resources/js/Pages/Admin/Profile/ViewProfile.vue":
/*!**********************************************************!*\
  !*** ./resources/js/Pages/Admin/Profile/ViewProfile.vue ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _ViewProfile_vue_vue_type_template_id_cfb24ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./ViewProfile.vue?vue&type=template&id=cfb24ef6&scoped=true& */ "./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=template&id=cfb24ef6&scoped=true&");
/* harmony import */ var _ViewProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./ViewProfile.vue?vue&type=script&lang=js& */ "./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _ViewProfile_vue_vue_type_style_index_0_id_cfb24ef6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./ViewProfile.vue?vue&type=style&index=0&id=cfb24ef6&scoped=true&lang=css& */ "./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=style&index=0&id=cfb24ef6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _ViewProfile_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _ViewProfile_vue_vue_type_template_id_cfb24ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _ViewProfile_vue_vue_type_template_id_cfb24ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "cfb24ef6",
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

/***/ "./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=style&index=0&id=cfb24ef6&scoped=true&lang=css&":
/*!*******************************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=style&index=0&id=cfb24ef6&scoped=true&lang=css& ***!
  \*******************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewProfile_vue_vue_type_style_index_0_id_cfb24ef6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/style-loader!../../../../../node_modules/css-loader??ref--6-1!../../../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../../../node_modules/postcss-loader/src??ref--6-2!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ViewProfile.vue?vue&type=style&index=0&id=cfb24ef6&scoped=true&lang=css& */ "./node_modules/style-loader/index.js!./node_modules/css-loader/index.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=style&index=0&id=cfb24ef6&scoped=true&lang=css&");
/* harmony import */ var _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewProfile_vue_vue_type_style_index_0_id_cfb24ef6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewProfile_vue_vue_type_style_index_0_id_cfb24ef6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewProfile_vue_vue_type_style_index_0_id_cfb24ef6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_style_loader_index_js_node_modules_css_loader_index_js_ref_6_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_6_2_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewProfile_vue_vue_type_style_index_0_id_cfb24ef6_scoped_true_lang_css___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ "./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=template&id=cfb24ef6&scoped=true&":
/*!*****************************************************************************************************!*\
  !*** ./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=template&id=cfb24ef6&scoped=true& ***!
  \*****************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewProfile_vue_vue_type_template_id_cfb24ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../../node_modules/babel-loader/lib??ref--4-0!../../../../../node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!../../../../../node_modules/vue-loader/lib??vue-loader-options!./ViewProfile.vue?vue&type=template&id=cfb24ef6&scoped=true& */ "./node_modules/babel-loader/lib/index.js?!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/vue-loader/lib/index.js?!./resources/js/Pages/Admin/Profile/ViewProfile.vue?vue&type=template&id=cfb24ef6&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewProfile_vue_vue_type_template_id_cfb24ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _node_modules_babel_loader_lib_index_js_ref_4_0_node_modules_vue_loader_lib_loaders_templateLoader_js_ref_6_node_modules_vue_loader_lib_index_js_vue_loader_options_ViewProfile_vue_vue_type_template_id_cfb24ef6_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);