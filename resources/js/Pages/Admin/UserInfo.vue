<template>
  <div class="userInfo">
    <main id="main" class="main">
      <Breadcrumb> </Breadcrumb>

      <div class="row">
        <div class="col-xl-12" id="printableArea">
          <div class="card">
            <div class="card-body pt-3">
              <!-- Bordered Tabs -->
              <div class="container">
                <div class="row">
                  <div class="col-sm-9">
                    <button class="icon d-print-none">
                      <i
                        class="bi bi-download"
                        @click="printReport"
                        ref="myPrintBtn"
                      ></i>
                    </button>
                    <h5 class="card-title">
                      User Details Of {{ allUserInfo.name }}
                    </h5>
                    <p class="small fst-italic">
                      This details basically belongs to {{ allUserInfo.name }}
                      <b></b>
                    </p>
                  </div>
                  <!-- Profile Image -->
                  <div class="col-sm-3">
                    <img
                      :src="`/storage/ProfileImage/${allUserInfo.user_more_info.image}`"
                      alt="Profile"
                      height="120"
                      width="120"
                      class="rounded border"
                      v-if="
                        allUserInfo.user_more_info &&
                        allUserInfo.user_more_info.image !== null
                      "
                    />
                    <img
                      src="backendTheme/assets/img/default_image/no_image.png"
                      alt="Profile"
                      height="120"
                      width="120"
                      class="rounded border"
                      v-else
                    />
                  </div>
                  <!-- Profile Image -->
                </div>
              </div>

              <!-- Table 1 Start-->
              <h5 class="card-title text-center">User Info</h5>
              <div class="row container">
                <table class="table table-bordered table-striped">
                  <tr>
                    <th>Full Name :</th>
                    <td>{{ allUserInfo.name }}</td>
                    <th>Email :</th>
                    <td>{{ allUserInfo.email }}</td>
                  </tr>
                  <tr>
                    <th>Registration Date:</th>
                    <td>{{ allUserInfo.created_at | DateChange }}</td>
                    <th>Current Status :</th>
                    <td>
                      <span
                        class="badge bg-danger"
                        v-if="allUserInfo.status == 0"
                        >Deactive</span
                      >
                      <span
                        class="badge bg-success"
                        v-if="allUserInfo.status == 1"
                        >Active</span
                      >
                      <span
                        class="badge bg-warning"
                        v-if="allUserInfo.status == 2"
                        >Block /Suspend</span
                      >
                    </td>
                  </tr>
                  <tr>
                    <th>Role:</th>
                    <td>{{ allUserInfo.roles[0].name }}</td>
                    <th>Employee Code :</th>
                    <td>{{ allUserInfo.user_more_info.emp_code ? allUserInfo.user_more_info.emp_code :'-------------'}}</td>
                  </tr>
                  <tr>
                    <th>Phone:</th>
                    <td>{{ allUserInfo.user_more_info.phone ? allUserInfo.user_more_info.phone :'-------------' }}</td>
                    <th>Designation :</th>
                    <td>{{ allUserInfo.user_more_info.designation ? allUserInfo.user_more_info.designation :'-------------'}}</td>
                  </tr>
                  <tr>
                    <th>Father Name:</th>
                    <td>{{ allUserInfo.user_more_info.father_name ? allUserInfo.user_more_info.father_name :'-------------' }}</td>
                    <th>Linkedin Id :</th>
                    <td>{{ allUserInfo.user_more_info.linkedin_id ? allUserInfo.user_more_info.linkedin_id :'-------------' }}</td>
                  </tr>
                  <tr>
                    <th>Permanent Address :</th>
                    <td>{{ allUserInfo.user_more_info.address ? allUserInfo.user_more_info.address :'-------------' }}</td>
                    <th>Joining Date:</th>
                    <td>{{ allUserInfo.user_more_info.joining_date ? allUserInfo.user_more_info.joining_date :'-------------' }}</td>
                  </tr>
                  <tr>
                    <th>Correspondence Address:</th>
                    <td>
                      {{ allUserInfo.user_more_info.correspondence_address ? allUserInfo.user_more_info.correspondence_address :'-------------'}}
                    </td>
                    <th>Working Status :</th>
                    <td>
                      <span
                        class="badge bg-danger"
                        v-if="allUserInfo.user_more_info.status == 0"
                        >Resign</span
                      >
                      <span
                        class="badge bg-success"
                        v-if="allUserInfo.user_more_info.status == 1"
                        >Joined</span
                      >
                    </td>
                  </tr>
                </table>
              </div>
              <!-- Table 1 End-->
              <!-- Table 2 Start-->
              <h5 class="card-title text-center" v-if="allUserInfo.reports">
                Inviter / Report Generated By
              </h5>
              <div class="row container">
                <table class="table table-bordered table-striped">
                  <tr>
                    <th>Name:</th>
                    <td>
                      {{
                        allUserInfo.reports[0].report_generated_by_user_info
                          .name
                      }}
                    </td>
                    <th>Email</th>
                    <td>
                      {{
                        allUserInfo.reports[0].report_generated_by_user_info
                          .email
                      }}
                    </td>
                  </tr>
                  <tr>
                    <th>Role:</th>
                    <td>
                      {{
                        allUserInfo.reports[0].report_generated_by_user_info
                          .roles[0].name
                      }}
                    </td>
                  </tr>
                </table>
              </div>
              <!-- Table 2 End-->
              <!-- Table 3 Start-->
              <h5 class="card-title text-center">Report Generated</h5>
              <div class="row container" v-if="allUserInfo.reports">
                <table class="table table-bordered table-striped">
                  <tr>
                    <th>S.No:</th>
                    <th>Report ID</th>
                    <th>Report Cycle</th>
                    <th>Duration</th>
                    <th>Remarks</th>
                    <th>Action</th>
                  </tr>
                  <tr
                    v-for="(report, index) in allUserInfo.reports"
                    :key="index"
                  >
                    <td>{{ index + 1 }}</td>
                    <td>{{ report.report_id }}</td>
                    <td>{{ report.report_cycle }}</td>
                    <td>
                      {{ report.report_duration_from | DateChange }} -
                      {{ report.report_duration_to | DateChange }}
                    </td>
                    <td>{{ report.remarks }}</td>
                    <td>
                      <span
                        class="badge bg-info"
                        role="button"
                        @click="viewReportDetail(index)"
                      >
                        View</span
                      >
                    </td>
                  </tr>
                </table>
              </div>
              <!-- Table 3 End-->

              <!-- Table 4 Start-->
              <h5 class="card-title text-center" v-if="newIndex != null">
                More Info Of Report Id
              </h5>
              <div class="row container" v-if="newIndex != null">
                <table class="table table-bordered table-striped">
                  <tr>
                    <th>S.No:</th>
                    <th>Report Id</th>
                    <th>Title</th>
                    <th>Rating</th>
                    <th>Comments</th>
                  </tr>
                  <tr
                    v-for="(repDetail, item) in allUserInfo.reports[
                      this.newIndex
                    ].report_detail_info"
                    :key="item"
                  >
                    <td>{{ item + 1 }}</td>
                    <td>{{ repDetail.report_id }}</td>
                    <td>{{ repDetail.attributes.title }}</td>
                    <td>
                      {{ repDetail.pms_attributes_rating }} /
                      {{ repDetail.attributes.max_rating }}
                    </td>
                    <td>{{ repDetail.pms_attributes_comment }}</td>
                  </tr>
                </table>
              </div>
              <!-- Table 4 End-->

              <!-- End Bordered Tabs -->
            </div>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import Breadcrumb from ".../../../resources/js/Components/Layouts/Breadcrumb";
import html2pdf from "html2pdf.js";
export default {
  name: "reportInfo",

  components: {
    Breadcrumb,
  },
  data() {
    return {
      userId: this.$route.query.accessToken,
      allUserInfo: [],
      newIndex: null,
    };
  },
  created() {
    axios
      .get("getUserInfo/" + this.userId)
      .then((response) => {
        this.allUserInfo = response.data;
      })
      .catch((error) => {});
  },
  mounted() {},
  methods: {
    printReport() {
      var element = document.getElementById("printableArea");
      var opt = {
        filename: this.allUserInfo.name + ".pdf",
        html2canvas: { scale: 2 },
        jsPDF: { unit: "in", format: "A4", orientation: "portrait" },
      };
      // New Promise-based usage:
      html2pdf().set(opt).from(element).save();
    },
    viewReportDetail(index) {
      this.newIndex = index;
    },
  },
};
</script>
<style scoped>
</style>