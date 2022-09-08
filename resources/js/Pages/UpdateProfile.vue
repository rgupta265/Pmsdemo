<template>
  <div class="updateprofile">
    <main id="main" class="main">
      <!-- End Page Title -->

      <section class="section profile">
        <div class="row">
          <div class="col-xl-4">
            <div class="card">
              <div
                class="
                  card-body
                  profile-card
                  pt-4
                  d-flex
                  flex-column
                  align-items-center
                "
              >
                <img
                  :src="`/storage/ProfileImage/${userDetails.userInfo.image}`"
                  alt="Profile"
                  class="rounded-circle border"
                  height="120"
                  width="120"
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
                <label class="in-file mt-2" role="button">
                  <i class="bi bi-upload"></i>
                  Upload Photo
                  <input
                    type="file"
                    accept="image/*"
                    class="form-control"
                    @change="onFileChange"
                  />
                </label>
              </div>
            </div>
          </div>

          <div class="col-xl-8">
            <div class="card">
              <div class="card-body pt-3">
                <!-- Bordered Tabs -->
                <div class="tab-content pt-2">
                  <div class="row">
                    <div class="col-md-6">
                      <button
                        class="dropdown-item d-flex align-items-center"
                        type="button"
                        @click="goToDashboard"
                        v-if="
                          userDetails.userInfo.emp_code &&
                          userDetails.userInfo.designation &&
                          userDetails.userInfo.image
                        "
                      >
                        <i class="bi bi-grid"></i> &nbsp;Go to Dashboard
                      </button>
                    </div>
                    <div class="col-md-6">
                      <button
                        class="dropdown-item d-flex align-items-center"
                        type="button"
                        @click="logout()"
                      >
                        <i class="bi bi-box-arrow-up"></i>&nbsp;Sign Out
                      </button>
                    </div>
                  </div>
                  <div class="tab-pane active pt-3">
                    <div id="msg"><Alert :data="success" v-if="success"></Alert></div>
                    <!-- Profile Edit Form -->
                    <form
                      method="post"
                      @submit.prevent="updateProfile"
                      enctype="multipart/form-data"
                    >
                    <strong class="text-danger"
                    >(All * Fields are mandatory)</strong
                  >
                      <div class="row mb-3">
                        <label
                          for="fullName"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Full Name <span class="text-danger"> *</span></label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="fullName"
                            type="text"
                            class="form-control"
                            disabled
                            v-model="userDetails.name"
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="Email"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Email <span class="text-danger"> *</span></label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            type="email"
                            class="form-control"
                            disabled
                            v-model="userDetails.email"
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="empcode"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Employee code <span class="text-danger"> *</span></label
                        >

                        <div class="col-md-8 col-lg-9">
                          <input
                            type="text"
                            required
                            class="form-control"
                            v-model="userProfile.emp_code"
                          />
                        </div>
                      </div>
                      <div class="row mb-3">
                        <label
                          for="empcode"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Joining Date <span class="text-danger"> *</span></label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            type="date"
                            class="form-control"
                            required
                            v-model="userProfile.joining_date"
                          />
                        </div>
                      </div>
                      <div class="row mb-3">
                        <label
                          for="designation"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Designation <span class="text-danger"> *</span></label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            type="text"
                            class="form-control"
                            required
                            v-model="userProfile.designation"
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="father name"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Father name <span class="text-danger"> *</span></label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            type="text"
                            required
                            class="form-control"
                            v-model="userProfile.father_name"
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="address"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Address <span class="text-danger"> *</span></label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            type="text"
                            required
                            class="form-control"
                            v-model="userProfile.address"
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="Correspondence Address"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Correspondence Address <span class="text-danger"> *</span></label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            type="text"
                            class="form-control"
                            required
                            v-model="userProfile.correspondence_address"
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="Phone"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Phone <span class="text-danger"> *</span></label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            type="text"
                            required
                            class="form-control"
                            v-model="userProfile.phone"
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="emergency contactno"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Emergency contactno. <span class="text-danger"> *</span></label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            type="text"
                            required
                            class="form-control"
                            v-model="userProfile.emergency_contactno"
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="Linkedin"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Linkedin Profile <span class="text-danger"> *</span></label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            type="text"
                            class="form-control"
                            required
                            v-model="userProfile.linkedin_id"
                          />
                        </div>
                      </div>

                      <div class="text-center">
                        <button type="submit" class="btn btn-primary">
                          Update Profile
                        </button>
                      </div>
                    </form>
                    <!-- End Profile Edit Form -->
                  </div>
                </div>
                <!-- End Bordered Tabs -->
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
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
  </div>
</template>

<script>
import Alert from ".../../../resources/js/Components/Layouts/Alert";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "updateprofile",
  components: {
    Alert,
  },
  data() {
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
        joining_date: "",
      },

      showError: false,
      api: "userProfile",
      success: "",
      image: "",
    };
  },
  computed: {
    ...mapGetters({ userDetails: "getUserDetails", errors: "getError", webInfo: "getWebDetails" }),
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  created() {
    if (this.isLoggedIn) {
      this.$store.dispatch("getUserDetails");
      this.$store.dispatch('getWebDetails');
    }
  },

  methods: {
    async logout() {
      await this.$store.dispatch("logout");
      this.$router.push("/");
    },
    onFileChange(e) {
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
    uploadProfileImage() {
      let formDataImage = new FormData();
      formDataImage.append("image", this.image);
      axios
        .post("upload-image", formDataImage)
        .then((response) => {
          this.$store.dispatch("getUserDetails");
          this.$toast.success(response.data.success);
        })
        .catch((err) => {
          console.log(err);
        });
    },
    updateProfile() {
      let formData = new FormData();
      formData.append("emp_code", this.userProfile.emp_code);
      formData.append("designation", this.userProfile.designation);
      formData.append("father_name", this.userProfile.father_name);
      formData.append("address", this.userProfile.address);
      formData.append(
        "correspondence_address",
        this.userProfile.correspondence_address
      );
      formData.append("phone", this.userProfile.phone);
      formData.append(
        "emergency_contactno",
        this.userProfile.emergency_contactno
      );
      formData.append("linkedin_id", this.userProfile.linkedin_id);
      formData.append("joining_date", this.userProfile.joining_date);
      // send upload request
      axios
        .post(this.api, formData)
        .then((response) => {
          this.success = response.data.success;
          this.$store.dispatch("getUserDetails");
        })
        .catch(function (error) {});
    },
    goToDashboard() {
      this.$router.push({ name: "dashboard" });
    },
  },
};
</script>
<style scoped>
.in-file {
  padding: 10px;
  background: lightseagreen;
  display: table;
  color: blanchedalmond;
  text-decoration: none;
  font-size: 15px;
  font-weight: 600;
  transition: 0.3;
  border-radius: 4px;
}

input[type="file"] {
  display: none;
}
</style>