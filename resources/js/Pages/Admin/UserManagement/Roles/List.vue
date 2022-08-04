<template>
  <div class="viewprofile">
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Roles</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active">Roles</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Title -->

      <section class="section profile">
        <div class="row">
          <div class="col-xl-9">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Role List</h5>
                <span v-if="success && showTableStatus">
                  <div
                    class="alert alert-success alert-dismissible fade show"
                    role="alert"
                  >
                    {{ success }}
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="alert"
                      aria-label="Close"
                    ></button>
                  </div>
                </span>
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
                    <tr v-for="(rl, index) in roleList" :key="index">
                      <th scope="row">{{ ++index }}</th>
                      <td>{{ rl.name }}</td>

                      <td>{{ rl.created_at | formatDate }}</td>
                      <td>
                        <span
                          role="button"
                          class="badge bg-primary"
                          @click="editRole(--index)"
                          ><i class="bi bi-pencil-square me-1"></i> Edit</span
                        >
                        <span
                          role="button"
                          class="badge bg-danger"
                          @click="deleteRole(--index)"
                          ><i class="bi bi-trash me-1"></i> Delete</span
                        >
                      </td>
                      <td >
                        <span class="badge bg-success m-1" v-for="per in rl.permissions" :key="per">
                          <i class="fbi bi-star me-1"></i>{{ per.slug }}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <!-- End small tables -->
              </div>
            </div>
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
                <div v-if="showStatus">
                  <span v-if="errors">
                    <div
                      class="alert alert-danger alert-dismissible fade show"
                      role="alert"
                      v-for="error in errors"
                      :key="error"
                    >
                      {{ error[0] }}
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      ></button>
                    </div>
                  </span>
                  <span v-if="success">
                    <div
                      class="alert alert-success alert-dismissible fade show"
                      role="alert"
                    >
                      {{ success }}
                      <button
                        type="button"
                        class="btn-close"
                        data-bs-dismiss="alert"
                        aria-label="Close"
                      ></button>
                    </div>
                  </span>
                </div>
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
                    <span role="button" style="float:right" @click="reset" v-if="editRoleId"
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
                        v-model="assign_permissions"
                        :value="option.id"
                      />
                      <label class="">
                        {{ option.name }}
                      </label>
                    </div>
                  </div>
                </div>
               
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
import { mapGetters } from "vuex";
export default {
  name: "list",
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
      permissions: [],
      assign_permissions: [],
    };
  },
  mounted() {
    this.getRole();
    this.getPermissions();
  },
  computed: {
    ...mapGetters({ errors: "getError" }),
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
    getRole() {
      axios.get(this.api).then((response) => {
        this.roleList = response.data;
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
          this.assign_permissions=[];
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
    editRole(index) {
      this.role = this.roleList[index].name;
      this.editRoleId = this.roleList[index].id;
      this.btnName = "Update Role";
      this.assign_permissions = this.roleList[index].permissions.includes([slug]);
      
    },
    updateRole() {
      let data = { name: this.role };
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
      this.assign_permissions =[]
    },
    
  },
  created() {},
};
</script>
