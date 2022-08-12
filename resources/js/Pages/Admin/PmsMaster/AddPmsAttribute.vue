<template>
  <div class="viewprofile">
    <main id="main" class="main">
      <div class="pagetitle">
        <h1>PMS ATTRIBUTES</h1>
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
                <h5 class="card-title">Pms Attributes List</h5>
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
                      <th scope="col">Title</th> 
                      <th scope="col">Max-rating</th>
                      <th scope="col">Addedby</th>
                      <th scope="col">Status</th>
                      <th scope="col">Action</th>
                
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(rl, index) in PmsAttributeList" :key="index">
                      <th scope="row">{{ ++index }}</th>
                      <td>{{ rl.title }}</td>
                        <td>{{ rl.max_rating }}</td>
                        <td>{{ rl.user_info.name }}</td>
                         <td>{{ rl.status }}</td>
                      <td>
                        <span
                          role="button"
                          class="badge bg-primary"
                          @click="editpmsattribute(--index)"
                          ><i class="bi bi-pencil-square me-1"></i> Edit</span
                        >
                        <span
                          role="button"
                          class="badge bg-danger"
                          @click="deletepmsattribute(--index)"
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
                      ><strong>PMS RATING</strong></label
                    >
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Title"
                      v-model="title"
                    />
                    <span role="button" style="float:right" @click="reset" v-if="editpmsAttributeId"
                      >Reset</span>
                   </div>
                </div>
               
                <div class="text-center p-2">
                  <button
                    type="submit"
                    class="btn btn-primary btn-sm"
                    v-if="!editpmsAttributeId"
                    @click="addpmsattribute"
                  >
                    Submit
                  </button>

                  <button
                    type="submit"
                    class="btn btn-primary btn-sm"
                    v-if="editpmsAttributeId"
                    @click=" updatepmsAttribute"
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
      PmsAttributeList: [],
      title: "",
      showTableStatus: false,
      showStatus: false,
      success: "",
      api: "pmsattribute",
      btnName: "Add PmsAttribute",
      editpmsAttributeId: "",
      permissions: [],
      assign_permissions: [],
    };
  },
  mounted() {
    this.getPmsAttribute();
  },
  computed: {
    ...mapGetters({ errors: "getError" }),
  },
  methods: {
    getPmsAttribute() {
      axios
        .get("/getAllPermission")
        .then((response) => {
          this.permissions = response.data.permissions;
        })
        .catch(() => {});
    },
    getPmsAttribute() {
      axios.get(this.api).then((response) => {
        this.PmsAttributeList = response.data;
      });
    },
    addpmsattribute() {
      axios
        .post(this.api, {
          name  : this.title,
          
        })
        .then((response) => {
          this.success = response.data.success;
          this.showStatus = true;
          this.getPmsAttribute();
          this.title = "";
        
        })
        .catch((err) => {
          this.showStatus = true;
        });
    },
    // addpmsattribute() {
    //         axios
    //             .post(this.api, { title: this.title })
    //             .then((response) => {
    //                 this.success = response.data.success;
    //                 this.showStatus = true;
    //                 this.getPmsattribute();
    //                 this.reset();
    //                 this.title = "";
    //             })
    //             .catch((err) => {
    //                 this.showStatus = true;
    //             });
    //     },
    deletepmsattribute(index) {
      axios
        .delete(this.api + "/" + this.PmsAttributeList[index].id)
        .then((response) => {
          this.success = response.data.success;
          this.showTableStatus = true;
          this.getPmsAttribute();
        });
    },
 editpmsattribute(index) {
      this.title = this.PmsAttributeList[index].title;
      this.editpmsAttributeId = this.PmsAttributeList[index].id;
      this.btnName = "update PmsAttribute";
      this.assign_permissions = this.PmsAttributeList[index].permissions.includes([slug]);
      
    },
    updatepmsAttribute() {
      let data = { name: this.title };
      axios
        .put(this.api + "/" + this.editpmsAttributeId, data)
        .then((response) => {
          this.success = response.data.success;
          this.showStatus = true;
          this.getPmsAttribute();
          this.reset();
        })
        .catch((err) => {
          this.showStatus = true;
        });
    },
    reset() {
      this.title = "";
      this.editpmsAttributeId = "";
      this.btnName = "Add PmsAttribute ";
      this.assign_permissions =[]
    },
    
  },
  created() {},
};
</script>
