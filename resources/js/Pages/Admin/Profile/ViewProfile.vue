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
                    <!-- Profile Edit Form -->
                    <form>
                      <div class="row mb-3">
                        <label
                          for="profileImage"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Profile Image</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <img src="backendTheme/assets/img/profile-img.jpg" alt="Profile" />
                          <div class="pt-2">
                            <a
                              href="#"
                              class="btn btn-primary btn-sm"
                              title="Upload new profile image"
                              ><i class="bi bi-upload"></i
                            ></a>
                            <a
                              href="#"
                              class="btn btn-danger btn-sm"
                              title="Remove my profile image"
                              ><i class="bi bi-trash"></i
                            ></a>
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
                            id="fullName"
                            value=""
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="about"
                          class="col-md-4 col-lg-3 col-form-label"
                          >About</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <textarea
                            name="about"
                            class="form-control"
                            id="about"
                            style="height: 100px"
                          >
Sunt est soluta temporibus accusantium neque nam maiores cumque temporibus. Tempora libero non est unde veniam est qui dolor. Ut sunt iure rerum quae quisquam autem eveniet perspiciatis odit. Fuga sequi sed ea saepe at unde.</textarea
                          >
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="company"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Company</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="company"
                            type="text"
                            class="form-control"
                            id="company"
                            value=""
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="Job"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Job</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="job"
                            type="text"
                            class="form-control"
                            id="Job"
                            value=""
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="Country"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Country</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="country"
                            type="text"
                            class="form-control"
                            id="Country"
                            value=""
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="Address"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Address</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="address"
                            type="text"
                            class="form-control"
                            id="Address"
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
                            name="phone"
                            type="text"
                            class="form-control"
                            id="Phone"
                            value=""
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
                            name="email"
                            type="email"
                            class="form-control"
                            id="Email"
                            value=""
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="Twitter"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Twitter Profile</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="twitter"
                            type="text"
                            class="form-control"
                            id="Twitter"
                            value=""
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="Facebook"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Facebook Profile</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="facebook"
                            type="text"
                            class="form-control"
                            id="Facebook"
                            value=""
                          />
                        </div>
                      </div>

                      <div class="row mb-3">
                        <label
                          for="Instagram"
                          class="col-md-4 col-lg-3 col-form-label"
                          >Instagram Profile</label
                        >
                        <div class="col-md-8 col-lg-9">
                          <input
                            name="instagram"
                            type="text"
                            class="form-control"
                            id="Instagram"
                            value=""
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
                            name="linkedin"
                            type="text"
                            class="form-control"
                            id="Linkedin"
                            value=""
                          />
                        </div>
                      </div>

                      <div class="text-center">
                        <button type="submit" class="btn btn-primary">
                          Save Changes
                        </button>
                      </div>
                    </form>
                    <!-- End Profile Edit Form -->
                  </div>

                  <div class="tab-pane fade pt-3" id="profile-change-password">
                    <!-- Change Password Form -->
                  <Alert :data="showError"></Alert>
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
import Breadcrumb from '.../../../resources/js/Components/Layouts/Breadcrumb';
import Alert from ".../../../resources/js/Components/Layouts/Alert";
import { mapGetters, mapActions } from "vuex";
export default {
  name: "viewprofile",
  components: {
    Breadcrumb,
    Alert
  },
  data() {
    return {
      userPass: {
        new_password: "",
        confirm_password: "",
      },
      showError: false,
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
          this.$toast.success(resp.data.success, {});
           this.$store.dispatch("logout");
           this.$router.push("/");
        })
        .catch((err) => {
          // this.showError = true;
        });
    },
  },
};
</script>
