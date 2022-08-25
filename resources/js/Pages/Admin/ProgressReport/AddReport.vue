<template>
  <div class="add-report">
    <main id="main" class="main">
      <Breadcrumb> </Breadcrumb>

      <!-- Send Invite Start -->
      <div class="row">
        <Alert :data="message"></Alert>
        <div class="col-xl-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Add New PMS Report</h5>

              <!-- report section start -->
              <fieldset class="border p-2">
                <legend class="float-none w-auto p-2">Report</legend>
                <div class="row">
                  <label for="inputEmail3" class="col-sm-2 col-form-label"
                    >Report ID</label
                  >
                  <div class="col-sm-4">
                    <input
                      type="text"
                      class="form-control"
                      placeholder="Report ID"
                      v-model="reportForm.reportId"
                      id="inputText"
                    />
                  </div>
                </div>
              </fieldset>
              <!-- report section end -->
              <!-- user section start -->
              <fieldset class="border p-2">
                <legend class="float-none w-auto p-2">User Details</legend>
                <div class="row container">
                  <table class="table p-1">
                    <tr>
                      <th>Name</th>
                      <td>{{ userData.user_details.name }}</td>
                      <th>Email</th>
                      <td>{{ userData.user_details.email }}</td>
                      <th>Role</th>
                      <td>{{ userData.inviterole.name }}</td>
                    </tr>
                    <tr v-if="userData.user_more_info">
                      <th>Designation</th>
                      <td>{{ userData.user_more_info.designation }}</td>
                      <th>Emp Code</th>
                      <td>{{ userData.user_more_info.emp_code }}</td>
                      <th>Phone</th>
                      <td>{{ userData.user_more_info.phone }}</td>
                    </tr>
                  </table>
                </div>
              </fieldset>
              <!-- user section end -->
              <!-- report cycle section start -->
              <fieldset class="border p-2">
                <legend class="float-none w-auto p-2">Report Duration</legend>
                <div class="row">
                    <label for="inputEmail3" class="col-sm-2 col-form-label"
                    >Start Date</label
                  >
                  <div class="col-sm-2">
                    <input
                      type="date"
                      class="form-control"
                      placeholder="Start Report Date"
                      v-model="reportForm.startDate"
                      id="inputText"
                    />
                  </div>
                  <label for="inputEmail3" class="col-sm-2 col-form-label"
                    >Select Report Cycle</label
                  >
                  <div class="col-sm-2">
                    <Multiselect
                      v-model="reportForm.reportCycle"
                      :options="options"
                      placeholder="Select Any One"
                      label="name"
                      track-by="name"
                    ></Multiselect>
                  </div>
                  
                  <label for="inputEmail3" class="col-sm-4 col-form-label"
                    >End Date Will be : {{ reportForm.endDate }}</label
                  >
                </div>
              </fieldset>
              <!-- report cycle section end -->
            </div>
          </div>
          <!-- search start -->
          <div class="card">
            <div class="card-body py-2"></div>
          </div>
          <!-- search End -->
        </div>
      </div>
      <!-- End Invite -->
      <!-- table start -->
      <section class="section profile">
        <div class="row">
          <div class="col-xl-12">
            <div class="card table-responsive">
              <div class="card-body">
                <h5 class="card-title">Invitation Request List</h5>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- Table end -->
    </main>
  </div>
</template>

<script>
import Breadcrumb from ".../../../resources/js/Components/Layouts/Breadcrumb";
import Alert from ".../../../resources/js/Components/Layouts/Alert";
import Multiselect from "vue-multiselect";
export default {
  name: "addReport",
  components: {
    Breadcrumb,
    Alert,
    Multiselect,
  },
  data() {
    return {
      token: this.$route.query.code,
      options: [
        { name: "3 Months", value: "3M" },
        { name: "6 Months", value: "6M" },
        { name: "12 Months (1 Year )", value: "12M" },
      ],
      userData: "",
      message: "",
      reportForm: {
        reportId: "",
        startDate: "",
        reportCycle: "",
        endDate: "",
      },
    };
  },
  mounted() {
    this.getUserData();
  },
  methods: {
    getUserData() {
      axios.get("getUserData/" + this.token).then((response) => {
        this.userData = response.data;
      });
    },
  },

  created() {},
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>