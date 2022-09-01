<template>
  <div class="reportInfo">
    <main id="main" class="main">
      <Breadcrumb> </Breadcrumb>

      <div class="row">
        <div class="col-xl-12" id="printableArea">
          <div class="card">
            <div class="card-body pt-3">
              <!-- Bordered Tabs -->
              <a class="icon d-print-none"
                ><i
                  class="bi bi-printer-fill"
                  @click="printReport('printableArea')"
                ></i
              ></a>
              <h5 class="card-title">
                PMS Report Details Of {{ allReportInfo.report_id }}
              </h5>
              <p class="small fst-italic">
                This Report basically belongs to
                <b>{{ allReportInfo.user_report_info.name }}.</b>
              </p>
              <!-- Table 1 Start-->
              <h5 class="card-title text-center">User Details</h5>
              <div class="row container">
                <table class="table table-bordered table-striped">
                  <tr>
                    <th>Full Name :</th>
                    <td>{{ allReportInfo.user_report_info.name }}</td>
                    <th>Email :</th>
                    <td>{{ allReportInfo.user_report_info.email }}</td>
                  </tr>
                  <tr>
                    <th>Role:</th>
                    <td>
                      {{ allReportInfo.user_report_info.roles[0].name }}
                    </td>
                    <th>Employee Code :</th>
                    <td>
                      {{
                        allReportInfo.user_report_info.user_more_info.emp_code
                      }}
                    </td>
                  </tr>
                  <tr>
                    <th>Phone:</th>
                    <td>
                      {{ allReportInfo.user_report_info.user_more_info.phone }}
                    </td>
                    <th>Designation :</th>
                    <td>
                      {{
                        allReportInfo.user_report_info.user_more_info
                          .designation
                      }}
                    </td>
                  </tr>
                </table>
              </div>
              <!-- Table 1 End-->
              <!-- Table 2 Start-->
              <h5 class="card-title text-center">Report Details</h5>
              <div class="row container">
                <table class="table table-bordered table-striped">
                  <tr>
                    <th>Report Code:</th>
                    <td>{{ allReportInfo.report_id }}</td>
                    <th>Report Cycle</th>
                    <td>{{ allReportInfo.report_cycle }}</td>
                  </tr>
                  <tr>
                    <th>Report Duration:</th>
                    <td>
                      {{ allReportInfo.report_duration_from | DateChange }}
                      - {{ allReportInfo.report_duration_to | DateChange }}
                    </td>
                    <th>Added On</th>
                    <td>{{ allReportInfo.created_at | DateChange }}</td>
                  </tr>
                </table>
              </div>
              <!-- Table 2 End-->
              <!-- Table 3 Start-->
              <h5 class="card-title text-center">Performance Details</h5>
              <div class="row container">
                <table class="table table-bordered table-striped">
                  <tr>
                    <th>S.No:</th>
                    <th>Title</th>
                    <th>Rating</th>
                    <th>Comments</th>
                  </tr>
                  <tr
                    v-for="(detail, index) in allReportInfo.report_detail_info"
                    :key="detail"
                  >
                    <td>{{ index + 1 }}</td>
                    <td>{{ detail.attributes.title }}</td>
                    <td>
                      {{ detail.pms_attributes_rating }} /
                      {{ detail.attributes.max_rating }}
                    </td>
                    <td>{{ detail.pms_attributes_comment }}</td>
                  </tr>
                </table>
              </div>
              <!-- Table 3 End-->

              <!-- Table 4 Start-->
              <h5 class="card-title text-center">Performance Authorization</h5>
              <div class="row container">
                <table class="table table-bordered table-striped">
                  <tr>
                    <th>Name:</th>
                    <td>
                      {{ allReportInfo.report_generated_by_user_info.name }}
                    </td>
                    <th>Email</th>
                    <td>
                      {{ allReportInfo.report_generated_by_user_info.email }}
                    </td>
                  </tr>
                  <tr>
                    <th>Role:</th>
                    <td>
                      {{
                        allReportInfo.report_generated_by_user_info.roles[0]
                          .name
                      }}
                    </td>
                    <th>Designation</th>
                    <td>
                      {{
                        allReportInfo.report_generated_by_user_info
                          .user_more_info.designation
                      }}
                    </td>
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

export default {
  name: "reportInfo",
  components: {
    Breadcrumb,
  },
  data() {
    return {
      repToken: this.$route.query.token,
      allReportInfo: [],
    };
  },
  created() {
    axios
      .get("getReportInfo/" + this.repToken)
      .then((response) => {
        this.allReportInfo = response.data;
      })
      .catch((error) => {});
  },
  methods: {
    printReport(divName) {
      var printContents = document.getElementById(divName).innerHTML;
      var originalContents = document.body.innerHTML;
      document.body.innerHTML = printContents;
      window.print();
      document.body.innerHTML = originalContents;
    },
  },
};
</script>