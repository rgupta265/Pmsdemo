<template>
  <div class="viewprofile">
    <main id="main" class="main">
      <Breadcrumb> </Breadcrumb>
      <!-- End Page Title -->

      <section class="section profile">
        <div class="row">
          <!-- search start -->
          <div class="card">
            <div class="card-body py-2">
              <strong
                >Showing
                <span
                  >{{ resultInfo.from ? resultInfo.from : 0 }} –
                  {{ resultInfo.to ? resultInfo.to : 0 }} of
                  {{ resultInfo.total ? resultInfo.total : 0 }} Role and their
                  Permission .</span
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
          <div class="col-xl-9">
            <div class="card table-responsive">
              <div class="card-body">
                <h5 class="card-title">Role List</h5>
                <Alert :data="success" v-if="showTableStatus"></Alert>
                <table class="table table-sm table-responsive-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Role Name</th>
                      <th scope="col">Added Time</th>
                      <th scope="col">Action</th>
                      <th scope="col">Permission Name</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(rl, index) in filteredRoleList" :key="index">
                      <th scope="row">{{ ++index }}</th>
                      <td>{{ rl.name }}</td>

                      <td>{{ rl.created_at | formatDate }}</td>
                      <td>
                        <span
                          role="button"
                          class="badge bg-primary"
                          @click="editRole(rl.id)"
                          ><i class="bi bi-pencil-square me-1"></i> Edit</span
                        >
                        <span
                          role="button"
                          class="badge bg-danger"
                          @click="deleteRole(--index)"
                          ><i class="bi bi-trash me-1"></i> Delete</span
                        >
                      </td>
                      <td>
                        <span
                          class="badge bg-success m-1"
                          v-for="(per, idx) in rl.permissions"
                          :key="idx"
                        >
                          <i class="fbi bi-star me-1"></i>{{ per.slug }}
                        </span>
                      </td>
                    </tr>
                    <tr v-if="filteredRoleList.length == 0">
                      <td colspan="8" class="text-center">
                        There is no data available.
                      </td>
                    </tr>
                  </tbody>
                </table>
                <!-- End small tables -->
              </div>
            </div>
            <!-- Pagination start -->
            <div class="card">
              <div class="card-body py-1">
                <div style="float: right">
                  <pagination
                    :data="resultInfo"
                    @pagination-change-page="getRole"
                    :limit="0"
                    size="small"
                  ></pagination>
                </div>
              </div>
            </div>
            <!-- Pagination End -->
          </div>
          <div class="col-lg-3">
            <div class="card">
              <div
                class="
                  card-body
                  role-card
                  pt-4
                  d-flex
                  flex-column
                  align-items-center
                "
              >
                <h5 class="card-title">{{ this.btnName }}</h5>
                <Alert :data="success"></Alert>
                <!-- Vertical Form -->

                <div class="row g-3 col-12">
                  <div class="col-12">
                    <label for="inputNanme4" class="form-label"
                      ><strong>Role Name</strong></label
                    >
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Add New Role"
                      v-model="role"
                    />
                    <span
                      role="button"
                      style="float: right"
                      @click="reset"
                      v-if="editRoleId"
                      >Reset</span
                    >
                  </div>
                  <label for="inputNanme4" class="form-label"
                    ><strong>Assign Role</strong></label
                  >
                  <div class="col-12">
                    <div
                      class="form-check"
                      v-for="(option, item) in permissions"
                      :key="item"
                    >
                      <input
                        class="form-check-input"
                        type="checkbox"
                        :id="option.id"
                        :value="option.id"
                        v-model="assign_permissions"
                        
                      />
                      <label class="">
                        {{ option.name }}
                      </label>
                    </div>
                  </div>
                </div>
                {{ assign_permissions }}
                <div class="text-center p-2">
                  <button
                    type="submit"
                    class="btn btn-primary btn-sm"
                    v-if="!editRoleId"
                    @click="addRole"
                  >
                    Submit
                  </button>

                  <button
                    type="submit"
                    class="btn btn-primary btn-sm"
                    v-if="editRoleId"
                    @click="updateRole"
                  >
                    Update
                  </button>
                </div>
                <!-- Vertical Form -->
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
export default {
  name: "list",
  components: {
    Breadcrumb,
    Alert,
  },
  data() {
    return {
      roleList: [],
      role: "",
      showTableStatus: false,
      showStatus: false,
      success: "",
      api: "roles",
      btnName: "Add Role",
      editRoleId: "",
      permissions: [], //master Permission
      assign_permissions: [], //add assign permissions
      editPermissionId: [], //get edit permission
      inviteSearch: "",
      resultInfo: "",
    };
  },
  mounted() {
    this.getRole();
    this.getPermissions();
  },
  computed: {
    filteredRoleList() {
      return this.roleList.filter((invite) => {
        return invite.name
          .toLowerCase()
          .includes(this.inviteSearch.toLowerCase());
        // invite.permissions.forEach((item) =>
        //   item.slug.toLowerCase().includes(this.inviteSearch.toLowerCase())
        // )
      });
    },
  },

  methods: {
    getPermissions() {
      axios
        .get("/getAllPermission")
        .then((response) => {
          this.permissions = response.data.permissions;
        })
        .catch(() => {});
    },
    getRole(page = 1) {
      axios
        .get(this.api, {
          params: {
            page: page,
          },
        })
        .then((response) => {
          this.roleList = response.data.data;
          this.resultInfo = response.data;
        });
    },
    addRole() {
      axios
        .post(this.api, {
          name: this.role,
          permission: this.assign_permissions,
        })
        .then((response) => {
          this.success = response.data.success;
          this.showStatus = true;
          this.getRole();
          this.role = "";
          this.assign_permissions = [];
        })
        .catch((err) => {
          this.showStatus = true;
        });
    },
    deleteRole(index) {
      axios
        .delete(this.api + "/" + this.roleList[index].id)
        .then((response) => {
          this.success = response.data.success;
          this.showTableStatus = true;
          this.getRole();
        });
    },
    editRole(id) {
      axios.get(this.api + "/" + id).then((response) => {
        this.role = response.data.name;
        this.editRoleId = id;
        this.btnName = "Update Role";
        this.editPermissionId = response.data.permissions;
      });
    },
    updateRole() {
      let data = { name: this.role, permission: this.assign_permissions };
      axios
        .put(this.api + "/" + this.editRoleId, data)
        .then((response) => {
          this.success = response.data.success;
          this.showStatus = true;
          this.getRole();
          this.reset();
        })
        .catch((err) => {
          this.showStatus = true;
        });
    },
    reset() {
      this.role = "";
      this.editRoleId = "";
      this.btnName = "Add Role";
      this.assign_permissions = [];
    },
    isChecked(id) {
      return this.editPermissionId.some((item) => item.id === id);
    },
  
  },
  created() {},
};
</script>
