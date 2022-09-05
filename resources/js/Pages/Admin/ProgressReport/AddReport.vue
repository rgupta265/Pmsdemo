<template>
  <div class="add-report">
    <main id="main" class="main">
      <Breadcrumb> </Breadcrumb>

      <!-- Send Invite Start -->
      <form action="" @submit.prevent="createReport" method="post">
        <div class="row">
          <Alert v-if="showError"></Alert>
          <div class="col-xl-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">
                  Add New PMS Report
                  <strong class="text-danger"
                    >(All * Fields are mandatory)</strong
                  >
                </h5>

                <!-- user section start -->
                <fieldset class="border p-2">
                  <legend class="float-none w-auto p-2 card-title">
                    User Details
                  </legend>
                  <div class="row container">
                    <table class="table p-1">
                      <tr>
                        <th>Name :</th>
                        <td>{{ userData.user_details.name }}</td>
                        <th>Email :</th>
                        <td>{{ userData.user_details.email }}</td>
                        <th>Role :</th>
                        <td>{{ userData.inviterole.name }}</td>
                      </tr>
                      <tr v-if="userData.user_more_info">
                        <th>Designation :</th>
                        <td>{{ userData.user_more_info.designation }}</td>
                        <th>Emp Code :</th>
                        <td>{{ userData.user_more_info.emp_code }}</td>
                        <th>Phone :</th>
                        <td>{{ userData.user_more_info.phone }}</td>
                      </tr>
                    </table>
                  </div>
                </fieldset>
                <!-- user section end -->
                <!-- report cycle section start -->
                <fieldset class="border p-2">
                  <legend class="float-none w-auto p-2 card-title">
                    Report Duration
                  </legend>
                  <div class="row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label"
                      >Start Date <span class="text-danger"> *</span></label
                    >
                    <div class="col-sm-2">
                      <input
                        type="date"
                        class="form-control"
                        placeholder="Start Report Date"
                        v-model="reportForm.startDate"
                        required
                        id="inputText"
                      />
                    </div>
                    <label for="inputEmail3" class="col-sm-2 col-form-label"
                      >Select Report Cycle
                      <span class="text-danger"> *</span></label
                    >
                    <div class="col-sm-2">
                      <select
                        class="form-control"
                        v-model="reportForm.reportCycle"
                        required
                      >
                        <option disabled value="">Select Any One</option>
                        <option
                          :value="op.value"
                          v-for="(op, item) in options"
                          :key="item"
                        >
                          {{ op.name }}
                        </option>
                      </select>
                    </div>

                    <label
                      for="inputEmail3"
                      class="col-sm-4 col-form-label"
                      v-if="isCalculatedEndDate"
                      >End Date Will be : {{ reportForm.endDate }}</label
                    >
                  </div>
                </fieldset>
                <!-- report cycle section end -->
              </div>
            </div>
            <!-- Attribute PMS section start -->
            <div class="card">
              <div class="card-body py-2">
                <fieldset class="border p-2">
                  <legend class="float-none w-auto p-2 card-title">
                    PMS Attribute
                  </legend>
                  <div class="row container">
                    {{ pmsAttrData }}
                    <table class="table p-1 table-sm border border-2">
                      <thead>
                        <tr>
                          <th>S.No</th>
                          <th>Title <span class="text-danger"> *</span></th>
                          <th>Rating <span class="text-danger"> *</span></th>
                          <th>Comments</th>
                          <th>Add / Remove</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr v-for="(input, k) in pmsAttrData" :key="k">
                          <td>{{ k + 1 }}</td>
                          <td>
                            <select
                              class="form-control"
                              v-model="input.pms_attr_id"
                              required
                            >
                              <option disabled value="">Select Any One</option>
                              <option
                                :value="pms.id"
                                v-for="(pms, ind) in allPmsData"
                                :key="ind"
                              >
                                {{ pms.title }}
                              </option>
                            </select>
                          </td>
                          <td>
                            <input
                              type="number"
                              min="1"
                              max="5"
                              placeholder="Rating"
                              v-model="input.rating"
                              required
                              class="form-control"
                            />
                          </td>
                          <td>
                            <textarea
                              class="form-control"
                              v-model="input.comments"
                              placeholder="Comments"
                            >
                            </textarea>
                          </td>
                          <td class="text-center">
                            <span
                              class="btn btn-sm btn-danger"
                              role="button"
                              @click="remove(k)"
                              v-show="k || (!k && pmsAttrData.length > 1)"
                              >Remove</span
                            >
                            <span
                              class="btn btn-sm btn-success"
                              role="button"
                              @click="add(k)"
                              v-show="k == pmsAttrData.length - 1"
                              >Add</span
                            >
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </fieldset>
              </div>
            </div>
            <!-- Attribute PMS section End -->
          </div>
        </div>
        <!-- End Invite -->
        <!-- table start -->
        <section class="section profile">
          <div class="row">
            <div class="col-xl-12">
              <div class="card">
                <div class="card-body">
                  <fieldset class="border p-2">
                    <legend class="float-none w-auto p-2 card-title">
                      Remarks
                    </legend>
                    <div class="row container">
                      <label for="inputEmail3" class="col-sm-2 col-form-label"
                        >Remarks</label
                      >
                      <div class="col-sm-10">
                        <textarea
                          class="form-control"
                          v-model="reportForm.remarks"
                          placeholder="Remarks Here"
                        >
                        </textarea>
                      </div>
                      <button type="submit" class="btn btn-primary mt-5">
                        Create Report
                      </button>
                    </div>
                  </fieldset>
                </div>
              </div>
            </div>
          </div>
        </section>
      </form>
      <!-- Table end -->
    </main>
  </div>
</template>

<script>
import Breadcrumb from ".../../../resources/js/Components/Layouts/Breadcrumb";
import moment from "moment";
export default {
  name: "addReport",
  components: {
    Breadcrumb,
  },
  data() {
    return {
      showError: false,
      token: this.$route.query.code,
      options: [
        { name: "3 Months", value: "3M" },
        { name: "6 Months", value: "6M" },
        { name: "12 Months (1 Year )", value: "12M" },
      ],
      userData: "",
      allPmsData: [],
      reportForm: {
        // reportId: "",
        startDate: "",
        reportCycle: "",
        endDate: "",
        remarks: "",
        userId: "",
        emp_code: "",
      },
      pmsAttrData: [{ pms_attr_id: "", rating: "", comments: "" }],
    };
  },
  computed: {
    isCalculatedEndDate() {
      if (
        this.reportForm.startDate != "" &&
        this.reportForm.reportCycle != ""
      ) {
        var cMonth = this.reportForm.reportCycle.replace("M", "");
        return (this.reportForm.endDate = moment(this.reportForm.startDate)
          .add(cMonth, "months")
          .format("DD-MM-YYYY"));
      }
    },
  },
  mounted() {
    this.getUserData();
    this.getPmsData();
  },
  methods: {
    getUserData() {
      axios.get("getUserData/" + this.token).then((response) => {
        this.userData = response.data;
        this.reportForm.userId = this.userData.user_id;
        this.reportForm.emp_code = this.userData.user_more_info.emp_code;
      });
    },
    getPmsData() {
      axios.get("pms").then((response) => {
        this.allPmsData = response.data;
      });
    },
    add(index) {
      this.pmsAttrData.push({ pms_attr_id: "", rating: "", comments: "" });
    },
    remove(index) {
      this.pmsAttrData.splice(index, 1);
    },
    createReport() {
      let data = {
        reportData: this.reportForm,
        pmsData: this.pmsAttrData,
      };

      axios
        .post("new-report", data)
        .then((response) => {
          this.$toast.success(response.data.success);
          this.$router.push("/view-created-report");
        })
        .catch((error) => {
          this.showError = true;
        });
    },
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>