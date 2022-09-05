<template>
  <div class="view-my-report"></div>
</template>
<script>
import Breadcrumb from ".../../../resources/js/Components/Layouts/Breadcrumb";
import Alert from ".../../../resources/js/Components/Layouts/Alert";

export default {
  name: "view-my-report",
  components: {
    Breadcrumb,
    Alert,
  },
  data() {
    return {
      api: "get-my-progress-report",
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
        if (report.emp_code != null) {
          return report.emp_code
            .toLowerCase()
            .includes(this.reportSearch.toLowerCase());
        }
        return (
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
  },
  created() {
    this.getAllReport();
  },
};
</script>
