<template>
  <div class="viewprofile">
    <main id="main" class="main">
      <Breadcrumb> </Breadcrumb>

      <!-- Send Invite Start -->
      <div class="row">
        <Alert :data="message"></Alert>
        <div class="col-xl-12">
          <!-- search start -->
          <div class="card">
            <div class="card-body py-2">
              <strong
                >Showing
                <span
                  >{{ resultInfo.from ? resultInfo.from : 0 }} –
                  {{ resultInfo.to ? resultInfo.to : 0 }} of
                  {{ resultInfo.total ? resultInfo.total : 0 }} Report .</span
                >
              </strong>
              <div style="float: right">
                <input
                  class="form-control-sm"
                  placeholder="Search..."
                  type="text"
                  v-model="reportSearch"
                />
              </div>
            </div>
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
                <h5 class="card-title">Report List</h5>
                <table class="table table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Report Id</th>
                      <th scope="col">User Info</th>
                      <th scope="col">Emp Code</th>
                      <th scope="col">Report Cycle</th>
                      <th scope="col">Report Range</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(report, index) in filteredReportList"
                      :key="index"
                    >
                      <td scope="row">{{ ++index }}</td>
                      <td>
                        <router-link
                          :to="{
                            name: 'MReportInfo',
                            query: { token: report.token },
                          }"
                          ><i class="bi bi-info-circle"></i>&nbsp;{{
                            report.report_id
                          }}</router-link
                        >
                      </td>
                      <td>
                        <router-link :to="{ name: 'MUserInfo',query: {
                              accessToken: report.pms_rating_to_user_id,
                            }, }"
                          ><i class="bi bi-info-circle"></i>&nbsp;{{
                            report.user_report_info.name
                          }}
                          ({{ report.user_report_info.email }})</router-link
                        >
                      </td>
                      <td>
                        {{ report.emp_code ? report.emp_code : "-----------" }}
                      </td>
                      <td>{{ report.report_cycle }}</td>
                      <td>
                        {{ report.report_duration_from | DateChange }} -
                        {{ report.report_duration_to | DateChange }}
                      </td>

                      <td>
                        <span
                          class="badge bg-secondary"
                          role="button"
                          @click="goTodownload(report.token)"
                          ><i class="bi bi-download"></i> Download Report</span
                        >
                      </td>
                    </tr>
                    <tr v-if="filteredReportList.length == 0">
                      <td colspan="8" class="text-center">
                        There is no data available.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
            <!-- Pagination start -->
            <div class="card">
              <div class="card-body py-1">
                <div style="float: right">
                  <pagination
                    :data="resultInfo"
                    @pagination-change-page="getAllReport"
                    :limit="0"
                    size="small"
                  ></pagination>
                </div>
              </div>
            </div>
            <!-- Pagination End -->
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

export default {
  name: "ViewCreatedReport",
  components: {
    Breadcrumb,
    Alert,
  },
  data() {
    return {
      api: "getReportList",
      reportList: [],
      message: "",
      reportSearch: "",
      resultInfo: "",
      repId: "",
    };
  },

  mounted() {},
  computed: {
    filteredReportList() {
      return this.reportList.filter((report) => {
        return (
          report.emp_code
            .toLowerCase()
            .includes(this.reportSearch.toLowerCase()) ||
          report.report_id
            .toLowerCase()
            .includes(this.reportSearch.toLowerCase()) ||
          report.report_cycle
            .toLowerCase()
            .includes(this.reportSearch.toLowerCase()) ||
          report.report_duration_from
            .toLowerCase()
            .includes(this.reportSearch.toLowerCase()) ||
          report.report_duration_to
            .toLowerCase()
            .includes(this.reportSearch.toLowerCase()) ||
          report.user_report_info.email
            .toLowerCase()
            .includes(this.reportSearch.toLowerCase()) ||
          report.user_report_info.name
            .toLowerCase()
            .includes(this.reportSearch.toLowerCase())
        );
      });
    },
  },
  methods: {
    getAllReport(page = 1) {
      axios
        .get(this.api, {
          params: {
            page: page,
          },
        })
        .then((response) => {
          this.reportList = response.data.data;
          this.resultInfo = response.data;
        });
    },
    goTodownload(index) {
      console.log(index);
      this.$router.push({
        name: "MReportInfo",
        query: { token: index, downloadPdf: true },
      });
    },
  },
  created() {
    this.getAllReport();
  },
};
</script>
