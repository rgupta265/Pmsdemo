<template>
  <div class="about">
<section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div class="d-flex justify-content-center py-4">
                <a role="button" class="logo d-flex align-items-center w-auto">
                  <img src="assets/img/logo.png" alt="">
                  <span class="d-none d-lg-block">PMS</span>
                </a>
              </div><!-- End Logo -->

              <div class="card mb-3">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Login to Your Account</h5>
                    <p class="text-center small">Enter your username & password to login</p>
                  </div>
                    <p v-if="showError" class="text-danger">Username or Password is incorrect</p>
                  <form class="row g-3 needs-validation" method="post" action="" novalidate @submit.prevent="submit">

                    <div class="col-12">
                      <label for="yourUsername" class="form-label">Username</label>
                      <div class="input-group has-validation">
                        <span class="input-group-text" id="inputGroupPrepend">@</span>
                        <input type="text" name="" v-model="form.email" class="form-control">  
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Password</label>
                      <input type="password" name="" v-model="form.password" class="form-control" >
                    </div>

                    <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" type="checkbox" name="remember" value="true" id="rememberMe">
                        <label class="form-check-label" for="rememberMe">Remember me</label>
                      </div>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary w-100" type="submit">Login</button>
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
import { mapActions,mapGetters } from 'vuex'
   export default{
    name:'Login',
    data(){
      return{
      	form:{
      		email:'',
      		password:''
      	},
      	showError: false,
      }
    },
computed: {
    ...mapGetters({ errors: "getError", webInfo: "getWebDetails" }),
  },
    methods:{
    	...mapActions(["login"]),

        submit: function () {
           this.$store.dispatch('login', this.form)
          .then(() => this.$router.push('/dashboard'))
          .catch(err => {
            this.showError = true;
            console.log(err)
          })
          
        }
    },
created() {
    this.$store.dispatch("getWebDetails");
  },

   }
</script>



<style>


</style>
