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
                <!-- <div class="col-md-4">
                  <select
                    class="form-select form-select-sm"
                    v-model="form.role_id"
                    required
                  >
                    <option selected="" disabled="" value="">
                      Invite As a...
                    </option>
                    <option
                      :value="roleList.invite_to_role_id"
                    >
                      {{ roleList.invite_to_role_id }}
                    </option>
                  </select>
                </div> -->
                <input
                  type="hidden"
                  class="form-control form-control-sm"
                  placeholder="Enter Role"
                  v-model="form.role_id"
                />
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
          <!-- search start -->
          <div class="card">
            <div class="card-body py-2">
              <strong
                >Showing
                <span
                  >{{ resultInfo.from ? resultInfo.from : 0 }} –
                  {{ resultInfo.to ? resultInfo.to : 0 }} of
                  {{ resultInfo.total ? resultInfo.total : 0 }} Invitation
                  Request.</span
                >
              </strong>
              <div style="float: right">
                <input
                  class="form-control-sm"
                  placeholder="Search..."
                  type="text"
                  v-model="inviteSearch"
                />
              </div>
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
                    <tr
                      v-for="(invite, index) in filteredInviteList"
                      :key="index"
                    >
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
            <!-- Pagination start -->
            <div class="card">
              <div class="card-body py-1">
                <div style="float: right">
                  <pagination
                    :data="resultInfo"
                    @pagination-change-page="getInvite"
                    :limit="0"
                    size="small"
                  ></pagination>
                </div>
              </div>
            </div>
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
      roleList: "",
      inviteSearch: "",
      resultInfo: "",
    };
  },

  mounted() {
    axios.get("getInviteRoles").then((response) => {
      this.roleList = response.data;
      this.form.role_id = this.roleList.invite_to_role_id;
    });
  },
  computed: {
    filteredInviteList() {
      return this.InviteList.filter((invite) => {
        return (
          invite.email
            .toLowerCase()
            .includes(this.inviteSearch.toLowerCase()) ||
          invite.status
            .toLowerCase()
            .includes(this.inviteSearch.toLowerCase()) ||
          invite.inviterole.name
            .toLowerCase()
            .includes(this.inviteSearch.toLowerCase())
        );
      });
    },
  },
  methods: {
    getInvite(page = 1) {
      axios
        .get(this.api, {
          params: {
            page: page,
          },
        })
        .then((response) => {
          this.InviteList = response.data.data;
          this.resultInfo = response.data;
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
  },
};
</script>
