<template>
  <div class="viewprofile">
    <main id="main" class="main">
     <Breadcrumb>
     </Breadcrumb>
      <!-- End Page Title -->

      <section class="section profile">
        <div class="row">
          <div class="col-xl-9">
            <div class="card table-responsive">
              <div class="card-body">
                <h5 class="card-title">Permission List</h5>
                <Alert :data="success" v-if="showTableStatus"></Alert>
                <table class="table table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Permission Name</th>
                      <th scope="col">Added Time</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(per, index) in permissionList" :key="index">
                      <th scope="row">{{ ++index }}</th>
                      <td>{{ per.name }}</td>
                     
                      <td>{{ per.created_at | formatDate }}</td>
                      <td>
                        <span
                          role="button"
                          class="badge bg-primary"
                          @click="editPermission(--index)"
                          ><i class="bi bi-pencil-square me-1"></i> Edit</span
                        >
                        <span
                          role="button"
                          class="badge bg-danger"
                          @click="deletePermission(--index)"
                          ><i class="bi bi-trash me-1"></i> Delete</span
                        >
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
                <Alert :data="success"></Alert>
                <!-- Vertical Form -->

                <div class="row g-3 col-12">
                  <label for="inputNanme4" class="form-label">Permission Name</label>
                  <input
                    type="text"
                    class="form-control form-control-sm"
                    placeholder="Add New Permission"
                    v-model="permission_name"
                  />
                  <span role="button" @click="reset" v-if="editPermissionId"
                    >Reset</span
                  >
                </div>
                <div class="text-center p-2">
                  <button
                    type="submit"
                    class="btn btn-primary btn-sm"
                    v-if="!editPermissionId"
                    @click="addPermission"
                  >
                    Submit
                  </button>

                  <button
                    type="submit"
                    class="btn btn-primary btn-sm"
                    v-if="editPermissionId"
                    @click="updatePermission"
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
import Breadcrumb from '.../../../resources/js/Components/Layouts/Breadcrumb';
import Alert from ".../../../resources/js/Components/Layouts/Alert";
import { mapGetters } from "vuex";
export default {
  name: "list",
  components: {
    Breadcrumb,
    Alert
  },
  data() {
    return {
      permissionList: [],
      permission_name: "",
      showTableStatus: false,
      showStatus: false,
      success: "",
      api: "permission",
      btnName: "Add Permission",
      editPermissionId: "",
    };
  },
  mounted() {
    this.getPermission();
  },
  computed: {
    ...mapGetters({ errors: "getError" }),
  },
  methods: {
    getPermission() {
      axios.get(this.api).then((response) => {
        this.permissionList = response.data;
      });
    },
    addPermission() {
      axios
        .post(this.api, { name: this.permission_name })
        .then((response) => {
          this.success = response.data.success;
          this.showStatus = true;
          this.getPermission();
          this.reset();
          // this.permission_name = "";
        })
        .catch((err) => {
          this.showStatus = true;
        });
    },
    deletePermission(index) {
      axios
        .delete(this.api + "/" + this.permissionList[index].id)
        .then((response) => {
          this.success = response.data.success;
          this.showTableStatus = true;
          this.getPermission();
        });
    },
    editPermission(index) {
      this.permission_name = this.permissionList[index].name;
      this.editPermissionId = this.permissionList[index].id;
      this.btnName = "Update Permission";
    },
    updatePermission() {
      let data = { name: this.permission_name };
      axios
        .put(this.api + "/" + this.editPermissionId, data)
        .then((response) => {
          this.success = response.data.success;
          this.showStatus = true;
          this.getPermission();
          this.reset();
        })
        .catch((err) => {
          this.showStatus = true;
        });
    },
    reset() {
      this.permission_name = "";
      this.editPermissionId = "";
      this.btnName = "Add Permission";
    },
  },
  created() {},
};
</script>
