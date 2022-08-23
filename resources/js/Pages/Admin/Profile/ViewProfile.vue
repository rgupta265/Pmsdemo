<template>
  <div class="viewprofile">
    <main id="main" class="main">
      <Breadcrumb></Breadcrumb>
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
                  src="backendTheme/assets/img/profile-img.jpg"
                  alt="Profile"
                  class="rounded-circle"
                />
                <h2>{{ userDetails.name }}</h2>
                <h3>Web Designer</h3>
                <h3>{{ userDetails.email }}</h3>
                <div class="social-links mt-2">
                  <a href="#" class="twitter"><i class="bi bi-twitter"></i></a>
                  <a href="#" class="facebook"
                    ><i class="bi bi-facebook"></i
                  ></a>
                  <a href="#" class="instagram"
                    ><i class="bi bi-instagram"></i
                  ></a>
                  <a href="#" class="linkedin"
                    ><i class="bi bi-linkedin"></i
                  ></a>
                </div>
              </div>
            </div>
          </div>

          <div class="col-xl-8">
            <div class="card">
              <div class="card-body pt-3">
                <!-- Bordered Tabs -->
                <ul class="nav nav-tabs nav-tabs-bordered">
                  <li class="nav-item">
                    <button
                      class="nav-link active"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-overview"
                    >
                      Overview
                    </button>
                  </li>

                  <li class="nav-item">
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-edit"
                    >
                      Edit Profile
                    </button>
                  </li>

                  <li class="nav-item">
                    <button
                      class="nav-link"
                      data-bs-toggle="tab"
                      data-bs-target="#profile-change-password"
                    >
                      Change Password
                    </button>
                  </li>
                </ul>
                <div class="tab-content pt-2">
                  <div
                    class="tab-pane fade show active profile-overview"
                    id="profile-overview"
                  >
                    <h5 class="card-title">About</h5>
                    <p class="small fst-italic">
                      Sunt est soluta temporibus accusantium neque nam maiores
                      cumque temporibus. Tempora libero non est unde veniam est
                      qui dolor. Ut sunt iure rerum quae quisquam autem eveniet
                      perspiciatis odit. Fuga sequi sed ea saepe at unde.
                    </p>

                    <h5 class="card-title">Profile Details</h5>

                    <div class="row">
                      <div class="col-lg-3 col-md-4 label">Full Name</div>
                      <div class="col-lg-9 col-md-8">
                        {{ userDetails.name }}
                      </div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3 col-md-4 label">Company</div>
                      <div class="col-lg-9 col-md-8"></div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3 col-md-4 label">Job</div>
                      <div class="col-lg-9 col-md-8"></div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3 col-md-4 label">Country</div>
                      <div class="col-lg-9 col-md-8"></div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3 col-md-4 label">Address</div>
                      <div class="col-lg-9 col-md-8"></div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3 col-md-4 label">Phone</div>
                      <div class="col-lg-9 col-md-8"></div>
                    </div>

                    <div class="row">
                      <div class="col-lg-3 col-md-4 label">Email</div>
                      <div class="col-lg-9 col-md-8">
                        {{ userDetails.email }}
                      </div>
                    </div>
                  </div>

                  <div
                    class="tab-pane fade profile-edit pt-3"
                    id="profile-edit"
                  >
                    <Alert :data="showError"></Alert>
                    <!-- Profile Edit Form -->
                    <form
                      method="post"
                      @submit.prevent="updateProfile"
                      enctype="multipart/form-data"
                    >
                      <div class="row mb-3">
                        <label
                          for="profileImage"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Profile Image</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <img
                            src="backendTheme/assets/img/profile-img.jpg"
                            alt="Profile"
                          />
                          <div class="pt-2">
                            <input
                              type="file"
                              accept="image/*"
                              class="form-control"
                              @change="onFileChange"
                            />
                          </div>
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="fullName"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Full Name</label
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
                          >Email</label
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
                          >Employee code</label
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
                          >Joining Date</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            type="date"
                            class="form-control"
                            v-model="userProfile.joining_date"
                          />
                        </div>
                      </div>
                      <div class="row mb-3">
                        <label
                          for="designation"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Designation</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            type="text"
                            class="form-control"
                            v-model="userProfile.designation"
                            value=""
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="father name"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Father name</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            type="text"
                            class="form-control"
                            v-model="userProfile.father_name"
                            value=""
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="address"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Address</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            type="text"
                            class="form-control"
                            v-model="userProfile.address"
                            value=""
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="Correspondence Address"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Correspondence Address</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            type="text"
                            class="form-control"
                            v-model="userProfile.correspondence_address"
                            value=""
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="Phone"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Phone</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            type="text"
                            class="form-control"
                            v-model="userProfile.phone"
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="emergency contactno"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Emergency contactno.</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            type="text"
                            class="form-control"
                            v-model="userProfile.emergency_contactno"
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="Linkedin"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Linkedin Profile</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            type="text"
                            class="form-control"
                            value=""
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

                  <div class="tab-pane fade pt-3" id="profile-change-password">
                    <!-- Change Password Form -->
                    <Alert v-if="showError"></Alert>
                    <Alert :data="success"></Alert>
                    <form
                      method="post"
                      action=""
                      @submit.prevent="changePassword"
                    >
                      <div class="row mb-3">
                        <label
                          for="newPassword"
                          class="col-md-4 col-lg-3 col-form-label"
                          >New Password</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            type="password"
                            v-model="userPass.new_password"
                            class="form-control"
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="renewPassword"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Confirm New Password</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            type="password"
                            v-model="userPass.confirm_password"
                            class="form-control"
                          />
                        </div>
                      </div>

                      <div class="text-center">
                        <button type="submit" class="btn btn-primary">
                          Change Password
                        </button>
                      </div>
                    </form>
                    <!-- End Change Password Form -->
                  </div>
                </div>
                <!-- End Bordered Tabs -->
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Breadcrumb from ".../../../resources/js/Components/Layouts/Breadcrumb";
import Alert from ".../../../resources/js/Components/Layouts/Alert";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "viewprofile",
  components: {
    Breadcrumb,
    Alert,
  },
  data() {
    return {
      userProfile: {
        image: "",
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
      userPass: {
        new_password: "",
        confirm_password: "",
      },
      showError: false,
      api: "userProfile",
      success: "",
    };
  },
  computed: {
    ...mapGetters({ userDetails: "getUserDetails", errors: "getError" }),
    isLoggedIn: function () {
      return this.$store.getters.isLoggedIn;
    },
  },
  methods: {
    ...mapActions(["ChangePassword"]),
    changePassword: function () {
      let data = {
        old_password: this.userPass.old_password,
        new_password: this.userPass.new_password,
        confirm_password: this.userPass.confirm_password,
      };
      this.$store
        .dispatch("ChangePassword", data)
        .then((resp) => {
          this.showError = false;
          this.$toast.success(resp.data.success);
          this.$store.dispatch("logout");
          this.$router.push("/");
        })
        .catch((err) => {
          // this.showError = true;
        });
    },
    onFileChange(e) {
      this.userProfile.image = e.target.files[0];
    },
    updateProfile() {
      let formData = new FormData();
      formData.append("image", this.userProfile.image);
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
        .then(function (response) {
          this.success = response.data.success;
        })
        .catch(function (error) {});
    },
  },
};
</script>
