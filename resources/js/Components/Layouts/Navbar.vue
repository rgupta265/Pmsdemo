<template>
  <div id="navbar">
    <!-- ======= Header ======= -->
    <header id="header" class="header fixed-top d-flex align-items-center">
      <div class="d-flex align-items-center justify-content-between">
        <a href="#" class="logo d-flex align-items-center">
          <img src="backendTheme/assets/img/logo.png" alt="" />
          <span class="d-none d-lg-block">{{ webInfo.web_name }}</span>
        </a>
        <i class="bi bi-list toggle-sidebar-btn" @click="toggleSidebar"></i>
      </div>
      <!-- End Logo -->
      <!-- End Search Bar -->

      <nav class="header-nav ms-auto">
        <ul class="d-flex align-items-center">
          <!-- End Search Icon-->

          <li class="nav-item dropdown">
            <a class="nav-link nav-icon" href="#" data-bs-toggle="dropdown">
              <i class="bi bi-bell"></i>
              <span class="badge bg-primary badge-number">
                {{ notifications.length }}</span
              > </a
            ><!-- End Notification Icon -->

            <Notification></Notification>
          </li>
          <!-- End Notification Nav -->

          <li class="nav-item dropdown pe-3">
            <a
              class="nav-link nav-profile d-flex align-items-center pe-0"
              href="#"
              data-bs-toggle="dropdown"
            >
              <img
                :src="`/storage/ProfileImage/${userDetails.userInfo.image}`"
                alt="No Image"
                class="rounded-circle border"
                v-if="userDetails.userInfo.image"
              />
              <img
                src="backendTheme/assets/img/default_image/no_image.png"
                alt="Profile"
                height="120"
                width="120"
                class="rounded border"
                v-else
              />
              <span class="d-none d-md-block dropdown-toggle ps-2">{{
                userDetails.name
              }}</span> </a
            ><!-- End Profile Iamge Icon -->

            <ul
              class="
                dropdown-menu dropdown-menu-end dropdown-menu-arrow
                profile
              "
            >
              <li class="dropdown-header">
                <h6>{{ userDetails.name }}</h6>
                <span v-if="userDetails.userInfo.designation">{{userDetails.userInfo.designation}}</span>
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>

              <li>
                <router-link :to="{ name: 'profile' }">
                  <a class="dropdown-item d-flex align-items-center">
                    <i class="bi bi-person"></i>
                    <span>My Profile</span>
                  </a></router-link
                >
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>

              <li>
                <button
                  class="dropdown-item d-flex align-items-center"
                  type="button"
                  @click="logout()"
                >
                  <i class="bi bi-box-arrow-up"></i>Sign Out
                </button>
              </li>
            </ul>
            <!-- End Profile Dropdown Items -->
          </li>
          <!-- End Profile Nav -->
        </ul>
      </nav>
      <!-- End Icons Navigation -->
    </header>
    <!-- End Header -->

    <!-- ======= Sidebar ======= -->
    <aside id="sidebar" class="sidebar">
      <ul class="sidebar-nav" id="sidebar-nav">
        <li class="nav-item">
          <router-link :to="{ name: 'dashboard' }" class="nav-link">
            <i class="bi bi-grid"></i>
            <span>Dashboard</span>
          </router-link>
        </li>
        <!-- End Dashboard Nav -->

        <li
          class="nav-item"
          v-if="$can($constants.permissions.viewUserRolePermissionManagement)"
        >
          <a
            class="nav-link collapsed"
            data-bs-target="#components-nav"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-person-lines-fill"></i><span>User Management</span
            ><i class="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="components-nav"
            class="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li>
              <router-link :to="{ name: 'roles' }" class="nav-link">
                <i class="bi bi-circle"></i><span>Role</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'permission' }" class="nav-link">
                <i class="bi bi-circle"></i><span>Permission</span>
              </router-link>
            </li>
            <li>
              <router-link :to="{ name: 'users' }" class="nav-link">
                <i class="bi bi-circle"></i><span>Users</span>
              </router-link>
            </li>
          </ul>
        </li>
        <li
          class="nav-item"
          v-if="
            $can(
              $constants.permissions.createPmsReport ||
                $constants.permissions.viewCreatedPmsReport
            )
          "
        >
          <a
            class="nav-link collapsed"
            data-bs-target="#components-report"
            data-bs-toggle="collapse"
            href="#"
          >
            <i class="bi bi-file-earmark-arrow-up"></i><span>PMS Report</span
            ><i class="bi bi-chevron-down ms-auto"></i>
          </a>
          <ul
            id="components-report"
            class="nav-content collapse"
            data-bs-parent="#sidebar-nav"
          >
            <li v-if="$can($constants.permissions.createPmsReport)">
              <router-link :to="{ name: 'createReport' }" class="nav-link">
                <i class="bi bi-circle"></i><span>Create PMS Report</span>
              </router-link>
            </li>
            <li v-if="$can($constants.permissions.viewCreatedPmsReport)">
              <router-link :to="{ name: 'viewCreatedReport' }" class="nav-link">
                <i class="bi bi-circle"></i><span>PMS Report List</span>
              </router-link>
            </li>
          </ul>
        </li>
        <!-- End Components Nav -->

        <!-- <li class="nav-heading">Pages</li> -->

        <li class="nav-item">
          <router-link :to="{ name: 'profile' }" class="nav-link">
            <i class="bi bi-person"></i>
            <span>Profile</span>
          </router-link>
        </li>
        <!-- End Profile Page Nav -->

        <li class="nav-item" v-if="$can($constants.permissions.viewInviteLink)">
          <router-link :to="{ name: 'invitelink' }" class="nav-link">
            <i class="bi bi-link"></i>
            <span>Invite Link</span>
          </router-link>
        </li>

        <li
          class="nav-item"
          v-if="$can($constants.permissions.viewMyPmsReport)"
        >
          <router-link :to="{ name: 'viewMyReport' }" class="nav-link">
            <i class="bi bi-file-earmark-arrow-up"></i>
            <span>My PMS Report</span>
          </router-link>
        </li>

        <li class="nav-heading">Master</li>

        <li class="nav-item" v-if="$can($constants.permissions.viewPmsMaster)">
          <router-link :to="{ name: 'pmsattribute' }" class="nav-link">
            <i class="bi bi-person"></i>
            <span>PMS Attribute</span>
          </router-link>
        </li>
      </ul>
    </aside>
    <!-- End Sidebar-->
    <!-- componente render Here means change here Start-->
    <router-view></router-view>
    <!-- componente render Here means change here End-->
    <!-- ======= Footer ======= -->
    <footer id="footer" class="footer">
      <div class="copyright">
        &copy; Copyright {{ new Date().getFullYear() }}
        <strong
          ><span>{{ webInfo.company_name }}</span></strong
        >. All Rights Reserved
      </div>
      <div class="credits">
        Designed by
        <a :href="webInfo.company_website" target="_blank">{{
          webInfo.company_name
        }}</a>
      </div>
    </footer>
    <!-- End Footer -->
    <a
      href="#"
      class="back-to-top d-flex align-items-center justify-content-center"
      ><i class="bi bi-arrow-up-short"></i
    ></a>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Notification from "./Notification";
export default {
  components: {
    Notification,
  },
  name: "navbar",
  data() {
    return {};
  },
  computed: {
    ...mapGetters({
      userDetails: "getUserDetails",
      webInfo: "getWebDetails",
      notifications: "getAllNotification",
    }),

    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  created() {
    if (this.isLoggedIn) {
      this.$store.dispatch("getWebDetails");
      this.$store.dispatch("getUserDetails");
      this.$store.dispatch("getAllNotification");
    }
  },
  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/");
    },
    toggleSidebar() {
      const getClass = document.getElementById("deMo").className;
      if (getClass == "noclass") {
        document.getElementById("deMo").classList.remove("noclass");
        document.getElementById("deMo").classList.add("toggle-sidebar");
      }
      if (getClass == "toggle-sidebar") {
        document.getElementById("deMo").classList.remove("toggle-sidebar");
        document.getElementById("deMo").classList.add("noclass");
      }
    },
  },
};
</script>

<style>
</style>
