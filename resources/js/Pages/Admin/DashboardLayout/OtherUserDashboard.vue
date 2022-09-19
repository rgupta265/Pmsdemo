<template>
  <div id="admindashboard">
    <div class="row">
      <!-- Sales Card -->
      <div class="col-xxl-4 col-md-6" v-if="userDetails.roles[0] != 'employee'">
        <div class="card info-card sales-card">
          <div class="card-body">
            <h5 class="card-title">Total Invite</h5>

            <div class="d-flex align-items-center">
              <div
                class="
                  card-icon
                  rounded-circle
                  d-flex
                  align-items-center
                  justify-content-center
                "
              >
                <i class="bi bi-share"></i>
              </div>
              <div class="ps-3">
                <h6>{{ dashboard.total_invite }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Sales Card -->

      <!-- Revenue Card -->
      <div class="col-xxl-4 col-md-6"  v-if="userDetails.roles[0] != 'employee'">
        <div class="card info-card revenue-card">
          <div class="card-body">
            <h5 class="card-title">Total Joined</h5>

            <div class="d-flex align-items-center">
              <div
                class="
                  card-icon
                  rounded-circle
                  d-flex
                  align-items-center
                  justify-content-center
                "
              >
                <i class="bi bi-share"></i>
              </div>
              <div class="ps-3">
                <h6>{{ dashboard.joined }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Revenue Card -->

      <!-- Customers Card -->
      <div class="col-xxl-4 col-xl-12"  v-if="userDetails.roles[0] != 'employee'">
        <div class="card info-card customers-card">
          <div class="card-body">
            <h5 class="card-title">Total Generate Report</h5>

            <div class="d-flex align-items-center">
              <div
                class="
                  card-icon
                  rounded-circle
                  d-flex
                  align-items-center
                  justify-content-center
                "
              >
                <i class="bi bi-file-earmark-zip"></i>
              </div>
              <div class="ps-3">
                <h6>{{ dashboard.total_create_report }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Customers Card -->
      <!-- Customers Card -->
      <div
        class="col-xxl-4 col-xl-12"
        v-if="userDetails.roles[0] !== 'admin'"
      >
        <div class="card info-card customers-card">
          <div class="card-body">
            <h5 class="card-title">My Report</h5>

            <div class="d-flex align-items-center">
              <div
                class="
                  card-icon
                  rounded-circle
                  d-flex
                  align-items-center
                  justify-content-center
                "
              >
                <i class="bi bi-file-earmark-zip"></i>
              </div>
              <div class="ps-3">
                <h6>{{ dashboard.total_my_report }}</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
      <!-- End Customers Card -->
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "admindashboard",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      dashboard: "getAllDashboard",
      userDetails: "getUserDetails",
    }),
  },
  created() {
    this.$store.dispatch("getAllDashboard");
  },
};
</script>