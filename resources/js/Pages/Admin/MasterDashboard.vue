<template lang="">
<div id="dashboard">
    <main id="main" class="main">

    <Breadcrumb></Breadcrumb>
    <!-- End Page Title -->

    <section class="section dashboard">
      <div class="row">

        <!-- Left side columns -->
        <div class="col-lg-8">
            <AdminDashboard v-if="userDetails.roles[0]=='admin'"></AdminDashboard>
            <NotAdminDashboard v-else></NotAdminDashboard>
            <!-- Reports -->
            <!-- End Reports -->
 

        </div><!-- End Left side columns -->

        <!-- Right side columns -->
        <div class="col-lg-4">

          <!-- Recent Activity -->
          <div class="card">
            <div class="card-body">
              <h5 class="card-title ">Recent Activity </h5>
              <p class="text-center" v-if="allActivity.length==0">No Activity available</p>
              <div class="activity" :class="{activitymessage:allActivity.length>10}" >
                <div class="activity-item d-flex" v-for="(act,index) in allActivity" :key="index" >
                  <div class="activite-label">{{act.created_at | humanReadableTime}}</div>
                  <i class='bi bi-circle-fill activity-badge  align-self-start' :class="act.description=='deleted' ? 'text-danger' : 'text-success'"></i>
                  <div class="activity-content">
                    <!-- {{ act.log_name}} activity {{act.description}} to {{act.properties.attributes.email}} -->
                   You {{act.description}} {{act.log_name}} on {{act.created_at | DateChange}}
                  </div>
                </div><!-- End activity item-->


              </div>

            </div>
          </div><!-- End Recent Activity -->


        </div><!-- End Right side columns -->

      </div>
    </section>

  </main><!-- End #main -->
    </div>
</template>
<script>
import Breadcrumb from ".../../../resources/js/Components/Layouts/Breadcrumb";
import AdminDashboard from "./DashboardLayout/AdminDashboard";
import NotAdminDashboard from "./DashboardLayout/OtherUserDashboard";
import { mapGetters } from "vuex";
export default {
  name: "dashboard",
  components: {
    Breadcrumb,
    AdminDashboard,
    NotAdminDashboard,
  },
  computed: {
    ...mapGetters({
      allActivity: "getAllActivity",
      userDetails: "getUserDetails",
    }),
  },
  created() {
    if (
      this.userDetails.userInfo == "" ||
      null ||
      this.userDetails.userInfo.emp_code == "" ||
      null ||
      this.userDetails.userInfo.designation == "" ||
      null
    ) {
      this.$router.push("/update-profile");
    }

    this.$store.dispatch("getAllActivity");
  },
};
</script>
<style >
.activitymessage {
  height: 400px;
  overflow-y: auto;
}
.danger {
  color: red;
}
</style>