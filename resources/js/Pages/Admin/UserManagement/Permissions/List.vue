<template>
  <div class="viewprofile">
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>Permission</h1>
        <nav>
          <ol class="breadcrumb">
            <li class="breadcrumb-item"><a href="index.html">Home</a></li>
            <li class="breadcrumb-item active">Permission</li>
          </ol>
        </nav>
      </div>
      <!-- End Page Title -->

      <section class="section profile">
        <div class="row">
          <div class="col-xl-9">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Permission List</h5>
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
                <table class="table table-sm">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Permission Name</th>
                      <th scope="col">Added Time</th>
                      <th scope="col">Updated Time</th>
                      <th scope="col">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(rl, index) in PermissionList" :key="index">
                      <th scope="row">{{ ++index }}</th>
                      <td>{{ rl.name }}</td>
                      <td>{{ rl.created_at | formatDate }}</td>
                      <td>{{ rl.updated_at | formatDate }}</td>
                      <td>
                        <span role="button" class="badge bg-primary" @click="editPermission(--index)"
                          ><i class="bi bi-pencil-square me-1"></i> Edit</span
                        >
                        <span role="button" class="badge bg-danger" @click="deletePermission(--index)"
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
                <h5 class="card-title">{{this.btnName}}</h5>
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
                    <label for="inputNanme4" class="form-label"
                      >Permission name</label
                    >
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Add New Permission"
                      v-model="permission"
                    />
                     <span role="button" @click="reset" v-if="editPermissionId">Reset</span>
                  </div>
                  <div class="text-center p-2">
                    <button type="submit" class="btn btn-primary btn-sm" v-if="!editPermissionId" @click="addPermission">
                      Submit
                    </button>
                       
                    <button type="submit" class="btn btn-primary btn-sm" v-if="editPermissionId" @click="updatePermission">
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
      PermissionList: [],
      permission: "",
      showTableStatus: false,
      showStatus: false,
      success: "",
      api: "permission",
      btnName :"Add Permission",
      editPermissionId:""
    };
  },
  mounted() {
    this.getRole();
  },
  computed: {
    ...mapGetters({ errors: "getError" }),
  },
  methods: {
    getRole() {
      axios.get(this.api).then((response) => {
        this.PermissionList = response.data;
      });
    },
    addPermission() {
      axios
        .post(this.api, { name: this.permission })
        .then((response) => {
          this.success = response.data.success;
          this.showStatus = true;
          this.getRole();
          this.permission = "";
        })
        .catch((err) => {
          this.showStatus = true;
        });
    },
    deletePermission(index) {
      axios.delete(this.api + "/" + this.PermissionList[index].id).then((response) => {
        this.success = response.data.success;
        this.showTableStatus = true;
        this.getRole();
      });
    },
    editPermission(index)
    {
        this.permission = this.PermissionList[index].name;
        this.editPermissionId =this.PermissionList[index].id;
        this.btnName ="Update Permission";
    },
    updatePermission(){
      let data = { name: this.permission };   
      axios
        .put(this.api + "/" + this.editPermissionId, data)
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
    reset()
    {
      this.permission = "";
      this.editPermission ='';
      this.btnName ="Add Permission";
    }
  },
  created() {},
};
</script>
