<template>
  <div class="viewprofile">
    <main id="main" class="main">
      <Breadcrumb> </Breadcrumb>

      <!-- Send Invite Start -->
      <div class="row">
        <Alert :data="message"></Alert>
        <div class="col-xl-12">
          <!-- search start -->
          <div class="card">
            <div class="card-body py-2">
              <strong
                >Showing
                <span
                  >{{ resultInfo.from ? resultInfo.from : 0 }} –
                  {{ resultInfo.to ? resultInfo.to : 0 }} of
                  {{ resultInfo.total ? resultInfo.total : 0 }} Joined
                  User.</span
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
                <h5 class="card-title">Successfully Joined User List</h5>
                <table class="table table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Email</th>
                      <th scope="col">Role</th>
                      <th scope="col">Emp Code</th>
                      <th scope="col">Designation</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr
                      v-for="(invite, index) in filteredInviteList"
                      :key="index"
                    >
                      <td scope="row">{{ ++index }}</td>
                      <td>
                        <router-link :to="{ name: 'MUserInfo' }"
                          ><i class="bi bi-info-circle"></i>&nbsp;{{
                            invite.user_details.name
                          }}</router-link
                        >
                      </td>
                      <td>{{ invite.user_details.email }}</td>
                      <td>{{ invite.inviterole.name }}</td>
                      <td v-if="invite.user_more_info">
                        {{ invite.user_more_info.emp_code }}
                      </td>
                      <td v-else>-------------------</td>
                      <td v-if="invite.user_more_info">
                        {{ invite.user_more_info.designation }}
                      </td>
                      <td v-else>-------------------</td>
                      <td>
                        <router-link
                          :to="{
                            name: 'addReport',
                            query: { code: invite.code },
                          }"
                          ><span class="badge bg-success" role="button"
                            >Create Report</span
                          ></router-link
                        >
                        <span class="badge bg-secondary" role="button"
                          ><i class="bi bi-download"></i> Download Report</span
                        >
                      </td>
                    </tr>
                    <tr v-if="filteredInviteList.length == 0">
                      <td colspan="8" class="text-center">
                        There is no data available.
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
                    @pagination-change-page="getJoinedUser"
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
  name: "createReport",
  components: {
    Breadcrumb,
    Alert,
  },
  data() {
    return {
      api: "getJoinedUser",

      InviteList: [],
      message: "",
      inviteSearch: "",
      resultInfo: "",
    };
  },

  mounted() {},
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
    getJoinedUser(page = 1) {
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
  },
  created() {
    this.getJoinedUser();
  },
};
</script>
