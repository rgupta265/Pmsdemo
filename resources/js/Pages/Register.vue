<template>
  <div class="about">
    <!-- Warning Message Start -->
    <div
      class="
        container-fluid
        min-vh-100
        d-flex
        flex-column
        align-items-center
        justify-content-center
        py-4
      "
      v-if="tokenStatus.status != 'pending'"
    >
      <div :class="alertClass" role="alert">
        <h4 class="alert-heading">{{ this.alertTitle }}</h4>
        <p>
          {{ alertDescription }}
        </p>
        <hr />
      </div>
    </div>
    <!-- Warning Message End -->
    <section
      class="
        section
        register
        min-vh-100
        d-flex
        flex-column
        align-items-center
        justify-content-center
        py-4
      "
      v-if="tokenStatus.status == 'pending'"
    >
      <div class="container">
        <div class="row justify-content-center">
          <div
            class="
              col-lg-6 col-md-6
              d-flex
              flex-column
              align-items-center
              justify-content-center
            "
          >
            <div class="d-flex justify-content-center py-4">
              <a class="logo d-flex align-items-center w-auto">
                <img src="backendTheme/assets/img/logo.png" alt="" />
                <span class="d-none d-lg-block"
                  >Welcome To PMS Register Form</span
                >
              </a>
              
            </div>
            <Alert :data="success"></Alert>
            <!-- End Logo -->
            <div class="card mb-3">
              <div class="card-body">
                <div class="pt-4 pb-2">
                  <h5 class="card-title text-center pb-0 fs-4">
                    Create an Account
                  </h5>
                  <p class="text-center small">
                    Enter your personal details to create account
                  </p>
                </div>

                <form
                  class="row g-3 needs-validation"
                  method="post"
                  action=""
                  @submit.prevent="submit"
                  autocomplete="off"
                >
                  <div class="col-12">
                    <label for="yourName" class="form-label">Your Name</label>
                    <input
                      type="text"
                      v-model="form.name"
                      class="form-control"
                    />
                  </div>

                  <div class="col-12">
                    <label for="yourEmail" class="form-label">Your Email</label>
                    <input
                      type="email"
                      v-model="form.email"
                      class="form-control"
                      :disabled="isDisabled"
                    />
                  </div>

                  <div class="col-12">
                    <label for="yourUsername" class="form-label"
                      >Password</label
                    >
                    <div class="input-group has-validation">
                      <input
                        type="password"
                        v-model="form.password"
                        class="form-control"
                      />
                    </div>
                  </div>

                  <div class="col-12">
                    <label for="yourPassword" class="form-label"
                      >Confirm Password</label
                    >
                    <input
                      type="password"
                      name="password"
                      class="form-control"
                      v-model="form.password_confirmation"
                    />
                  </div>

                  <div class="col-12">
                    <div class="form-check">
                      <input
                        class="form-check-input"
                        name="terms"
                        type="checkbox"
                        id="acceptTerms"
                        v-model="terms"
                        required
                      />
                      <label class="form-check-label" for="acceptTerms"
                        >I agree and accept the
                        <a href="#">terms and conditions</a></label
                      >
                    </div>
                  </div>
                  <div class="col-12">
                    <button
                      class="btn btn-primary w-100"
                      type="submit"
                      :disabled="!isComplete"
                    >
                      Create Account
                    </button>
                  </div>
                  <div class="col-12">
                    <p class="small mb-0">
                      Already have an account?
                      <router-link :to="{ name: 'login' }">Login</router-link>
                    </p>
                  </div>
                </form>
              </div>
            </div>

            <div class="credits">
              Designed © {{ new Date().getFullYear() }}
              <strong
                ><span>{{ webInfo.company_name }}</span></strong
              >. All Rights Reserved <br />
              Designed by
              <a :href="webInfo.company_website" target="_blank">{{
                webInfo.company_name
              }}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import Alert from ".../../../resources/js/Components/Layouts/Alert";
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Register",
  components: {
    Alert,
  },
  data() {
    return {
      invitetoken: this.$route.query.token,
      form: {
        name: "",
        email: "",
        password: "",
        password_confirmation: "",
      },
      terms: "",
      success: "",
      api: "invite-token",
      tokenStatus: "",
      isDisabled: true,
      alertClass: "",
      alertTitle: "",
      alertDescription: "",
    };
  },
  mounted() {
    axios.get(this.api + "/" + this.invitetoken).then((response) => {
      this.tokenStatus = response.data[0];
      this.form.email = response.data[0].email;
      if (response.data[0].status == "successful") {
        this.alertClass = "alert alert-success alert-dismissible fade show";
        this.alertTitle = "Already used this Link";
        this.alertDescription =
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ";
      }
      if (response.data[0].status == "expired") {
        this.alertClass = "alert alert-danger alert-dismissible fade show";
        this.alertTitle = "Link is Expired";
        this.alertDescription =
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ";
      }
      if (response.data[0].status == "canceled") {
        this.alertClass = "alert alert-secondary alert-dismissible fade show";
        this.alertTitle = "Link is Canceled";
        this.alertDescription =
          "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s. ";
      } 
    });
  },
  computed: {
    isComplete() {
      return (
        this.form.name != "" &&
        this.form.email != "" &&
        this.form.password != "" &&
        this.form.password_confirmation != "" &&
        this.terms != false
      );
    },
    ...mapGetters({ errors: "getError", webInfo: "getWebDetails" }),
  },
  methods: {
    ...mapActions(["Register"]),
    submit: function () {
      let data = {
        name: this.form.name,
        email: this.form.email,
        password: this.form.password,
        password_confirmation: this.form.password_confirmation,
        invitetoken: this.invitetoken,
      };

      this.$store
        .dispatch("Register", data)
        .then((response) => {
          this.success = response.data.success;
          this.reset();
          this.$router.push("/register");
        })
        .catch((err) => {
          this.showError = true;
        });
    },
    reset() {
      (this.form.name = ""),
        (this.form.email = ""),
        (this.form.password = ""),
        (this.form.password_confirmation = ""),
        (this.terms = false);
    },
  },
  created() {
    this.$store.dispatch("getWebDetails");
  },
};
</script>



