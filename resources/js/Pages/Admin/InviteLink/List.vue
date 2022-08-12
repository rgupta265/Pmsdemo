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
            <div class="card table-responsive">
              <div class="card-body">
                <h5 class="card-title">Invitation Request List</h5>
                <table class="table table-sm table-responsive-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Invite Email</th>
                      <th scope="col">Role Name</th>
                      <th scope="col">Send Time</th>
                      <th scope="col">Expire Time</th>
                      <th scope="col">Joined Status</th>
                      <th scope="col">Sender Details</th>
                      <th scope="col">View User</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(invite, index) in InviteList" :key="index">
                      <td scope="row">{{ ++index }}</td>
                      <td>{{ invite.email }}</td>
                      <td>{{ invite.inviterole.name }}</td>
                      <td>{{ invite.created_at | formatDate }}</td>
                      <td>{{ invite.valid_till | formatDate }}</td>
                      <td>
                        <span
                          class="badge bg-warning"
                          v-if="invite.status == 'pending'"
                          >{{ invite.status }}</span
                        >
                        <span
                          class="badge bg-success"
                          v-if="invite.status == 'successful'"
                          >{{ invite.status }}</span
                        >
                        <span
                          class="badge bg-danger"
                          v-if="invite.status == 'canceled'"
                          >{{ invite.status }}</span
                        >
                        <span
                          class="badge bg-secondary"
                          v-if="invite.status == 'expired'"
                          >{{ invite.status }}</span
                        >
                      </td>
                      <td>
                        {{ invite.inviteuser.name }} ({{
                          invite.inviteuser.email
                        }})
                      </td>
                      <td>
                        <span
                          class="badge bg-info"
                          role="button"
                          v-if="invite.status == 'successful'"
                          >View</span
                        >
                      </td>
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
    Alert,
  },
  data() {
    return {
      api: "invite",
      form: {
        email: "",
        role_id: "",
      },
      InviteList: [],
      message: "",
      roleList: [],
    };
  },

  mounted() {
    axios.get("roles").then((response) => {
      this.roleList = response.data;
    });
  },

  methods: {
    getInvite() {
      axios.get(this.api).then((response) => {
        this.InviteList = response.data;
      });
    },
    sendInvite() {
      let data = { email: this.form.email, role_id: this.form.role_id };
      axios
        .post(this.api, data)
        .then((response) => {
          if (response.data.success) {
            this.message = response.data.success;
            this.getInvite();
            this.resetData();
          }
        })
        .catch((err) => {});
    },
    resetData() {
      this.form.email = "";
      this.form.role_id = "";
    },
  },
  created() {
    this.getInvite();
    this.roleList();
  },
};
</script>
