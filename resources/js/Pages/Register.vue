<template>
  <div class="about">
<section class="section register min-vh-100 d-flex flex-column align-items-center justify-content-center py-4">
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 d-flex flex-column align-items-center justify-content-center">

              <div class="d-flex justify-content-center py-4">
                <a href="index.html" class="logo d-flex align-items-center w-auto">
                  <img src="assets/img/logo.png" alt="">
                  <span class="d-none d-lg-block">NiceAdmin</span>
                </a>
              </div><!-- End Logo -->

              <div class="card mb-3">

                <div class="card-body">

                  <div class="pt-4 pb-2">
                    <h5 class="card-title text-center pb-0 fs-4">Create an Account</h5>
                    <p class="text-center small">Enter your personal details to create account</p>
                  </div>
                                    <div v-if="showError">
                                        <span v-if="errors">
                                        <small v-for="error in errors" :key="error" class="text-danger d-block">{{ error[0] }}</small>
                                        </span>
                                    </div>
                  <form class="row g-3 needs-validation" method="post" action=""  @submit.prevent="submit" novalidate>
                    <div class="col-12">
                      <label for="yourName" class="form-label">Your Name</label>
                      <input type="text" name="" v-model="form.name" class="form-control">
                      <div class="invalid-feedback">Please, enter your name!</div>
                    </div>

                    <div class="col-12">
                      <label for="yourEmail" class="form-label">Your Email</label>
                      <input type="email" name="" v-model="form.email" class="form-control">
                      <div class="invalid-feedback">Please enter a valid Email adddress!</div>
                    </div>

                    <div class="col-12">
                      <label for="yourUsername" class="form-label">Password</label>
                      <div class="input-group has-validation"> 
                        <input type="password" name="" v-model="form.password" class="form-control">
                        <div class="invalid-feedback">Please choose a username.</div>
                      </div>
                    </div>

                    <div class="col-12">
                      <label for="yourPassword" class="form-label">Confirm Password</label>
                      <input type="password" name="password" class="form-control" v-model="form.password_confirmation" >
                      <div class="invalid-feedback">Please enter your password!</div>
                    </div>

                    <div class="col-12">
                      <div class="form-check">
                        <input class="form-check-input" name="terms" type="checkbox" value="" id="acceptTerms" required>
                        <label class="form-check-label" for="acceptTerms">I agree and accept the <a href="#">terms and conditions</a></label>
                        <div class="invalid-feedback">You must agree before submitting.</div>
                      </div>
                    </div>
                    <div class="col-12">
                      <button class="btn btn-primary w-100" type="submit">Create Account</button>
                    </div>
                    <div class="col-12">
                      <p class="small mb-0">Already have an account? <router-link :to="{name:'login'}">Login</router-link></p>
                    </div>
                  </form>

                </div>
              </div>

              <div class="credits">
                <!-- All the links in the footer should remain intact. -->
                <!-- You can delete the links only if you purchased the pro version. -->
                <!-- Licensing information: https://bootstrapmade.com/license/ -->
                <!-- Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/nice-admin-bootstrap-admin-html-template/ -->
                Designed © {{new Date().getFullYear() }} 
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
    	name:'Register',
    	data(){
    		return{
    			form:{
    				name:'',
		      		email:'',
		      		password:'',
		      		password_confirmation:''
		      	},
		      	showError: false,
    		}
    	},
    	computed: {
	      ...mapGetters({ errors: "getError"}),
	   },
    	methods: {
	    	...mapActions(["Register"]),
			submit: function () {
		        let data = {
		          name: this.form.name,
		          email: this.form.email,
		          password: this.form.password,
		          password_confirmation: this.form.password_confirmation,
		        };

		        this.$store.dispatch('Register', data)
		         .then(() => this.$router.push('/dashboard'))
		         .catch(err =>{
		            this.showError = true;
		         })
		    }
		},

   }
</script>



