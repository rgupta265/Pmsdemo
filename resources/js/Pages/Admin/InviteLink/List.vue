<template>
  <div class="viewprofile">
    <main id="main" class="main">
      <Breadcrumb> </Breadcrumb>
      <Alert :data="message"></Alert>
      <!-- Send Invite Start -->
      <div class="row">
  
        <div class="col-xl-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Send Invite Link</h5>
              <form
                class="row g-1"
                method="post"
                action=""
                @submit.prevent="sendInvite"
              >
                <div class="col-md-4">
                  <select
                    class="form-select form-select-sm"
                    v-model="form.role_id"
                    required
                  >
                    <option selected="" disabled="" value="">
                      Invite As a...
                    </option>
                    <option
                      v-for="(rl, item) in roleList"
                      :value="rl.id"
                      :key="item"
                    >
                      {{ rl.name }}
                    </option>
                  </select>
                </div>

                <div class="col-md-4">
                  <input
                    required
                    type="email"
                    class="form-control form-control-sm"
                    placeholder="Enter Email"
                    v-model="form.email"
                  />
                </div>

                <div class="col-4">
                  <button class="btn btn-success btn-sm" type="submit">
                    Send Invite
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <!-- End Invite -->
      <!-- table start -->
      <section class="section profile">
        <div class="row">
          <div class="col-xl-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Invite Users List</h5>
                <table class="table table-sm table-responsive-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Role Name</th>
                      <th scope="col">Added Time</th>
                      <th scope="col">Action</th>
                      <th scope="col">Users Permission</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <th scope="row"></th>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                      <td></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
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

export default {
  name: "list",
  components: {
    Breadcrumb,
    Alert
  },
  data() {
    return {
      api: "invite",
      form: {
        email: "",
        role_id: "",
      },
      roleList: [],
      message: "",
    };
  },

  mounted() {
    axios.get("roles").then((response) => {
      this.roleList = response.data;
    });
  },

  methods: {
    sendInvite() {
      let data = { email: this.form.email, role_id: this.form.role_id };
      axios
        .post(this.api, data)
        .then((response) => {
          if (response.data.success) {
            this.message = response.data.success;
          }
        })
        .catch((err) => {
          
        });
    },
  },
};
</script>
