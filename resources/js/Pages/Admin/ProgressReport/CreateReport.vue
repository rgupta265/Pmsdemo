<template>
  <div class="viewprofile">
    <main id="main" class="main">
      <Breadcrumb> </Breadcrumb>

      <!-- Send Invite Start -->
      <div class="row">
        <Alert :data="message"></Alert>
        <div class="col-xl-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Send Invitation Request</h5>
              <multiselect v-model="value" :options="options" :custom-label="nameWithLang" placeholder="Select one" label="name" track-by="name"></multiselect>
                <pre class="language-json"><code>{{ value  }}</code></pre>
            </div>
          </div>
          <!-- search start -->
          <div class="card">
            <div class="card-body py-2">
              
            </div>
          </div>
          <!-- search End -->
        </div>
      </div>
      <!-- End Invite -->
      <!-- table start -->
      <section class="section profile">
        <div class="row">
          <div class="col-xl-12">
            <div class="card table-responsive">
              <div class="card-body">
                <h5 class="card-title">Successfully Joined User List</h5>
                
              </div>
            </div>
            <!-- Pagination start -->
            
            <!-- Pagination End -->
          </div>
        </div>
      </section>
      <!-- Table end -->
    </main>
  </div>
</template>
<script>
import Breadcrumb from ".../../../resources/js/Components/Layouts/Breadcrumb";
import Alert from ".../../../resources/js/Components/Layouts/Alert";
import Multiselect from 'vue-multiselect';
export default {
  name: "list",
  components: {
    Breadcrumb,
    Alert,
    Multiselect
  },
  data() {
    return {
        message:'',
        value: { name: 'Vue.js', language: 'JavaScript' },
      options: [
        { name: 'Vue.js', language: 'JavaScript' },
        { name: 'Rails', language: 'Ruby' },
        { name: 'Sinatra', language: 'Ruby' },
        { name: 'Laravel', language: 'PHP' },
        { name: 'Phoenix', language: 'Elixir' }
      ]
    };
  },

  mounted() {
   
  },
  computed: {
   
  },
  methods: {
   nameWithLang ({ name, language }) {
      return `${name} — [${language}]`
    }
  },
  created() {
    
  },
};
</script>
<style src="vue-multiselect/dist/vue-multiselect.min.css"></style>
