<template>
  <div class="viewprofile">
    <main id="main" class="main">
      <Breadcrumb></Breadcrumb>
      <!-- End Page Title -->

      <section class="section profile">
        <div class="row">
          <!-- Search start -->
          <div class="col-xl-9">
            <div class="card table-responsive">
              <div class="card-body">
                <h5 class="card-title">Pms Attributes List</h5>
                <Alert :data="success" v-if="showTableStatus"></Alert>
                <table
                  class="table table-sm"
                  id="dataTableSearch"
                >
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Title</th>
                      <th scope="col">Max-Rating</th>
                      <th scope="col">Added by</th>
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
                      <td>
                        <span
                          class="badge bg-success m-1"
                          v-for="(per,idx) in rl.permissions"
                          :key="idx"
                        >
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
                <Alert :data="success"></Alert>
                <!-- Vertical Form -->

                <div class="row g-3 col-12">
                  <div class="col-12">
                    <label for="inputNanme4" class="form-label"
                      ><strong>Attribute Name</strong></label
                    >
                    <input
                      type="text"
                      class="form-control form-control-sm"
                      placeholder="Title"
                      v-model="title"
                    />
                    <span
                      role="button"
                      style="float: right"
                      @click="reset"
                      v-if="editpmsAttributeId"
                      >Reset</span
                    >
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
                    @click="updatepmsAttribute"
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
      PmsAttributeList: [],
      title: "",
      showTableStatus: false,
      showStatus: false,
      success: "",
      api: "pmsattribute",
      btnName: "Add PmsAttribute",
      editpmsAttributeId: "",
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
      axios.get(this.api).then((response) => {
        this.PmsAttributeList = response.data;
      });
    },
    addpmsattribute() {
      axios
        .post(this.api, {
          name: this.title,
        })
        .then((response) => {
          this.success = response.data.success;
          this.getPmsAttribute();
          this.reset();
        })
        .catch((err) => {
          this.showStatus = true;
        });
    },
    deletepmsattribute(index) {
      axios
        .delete(this.api + "/" + this.PmsAttributeList[index].id)
        .then((response) => {
          this.success = response.data.success;
          this.showTableStatus = true;
          this.showStatus = false;
          this.getPmsAttribute();
        });
    },
    editpmsattribute(index) {
      this.title = this.PmsAttributeList[index].title;
      this.editpmsAttributeId = this.PmsAttributeList[index].id;
      this.btnName = "Update PmsAttribute";
    },
    updatepmsAttribute() {
      let data = { name: this.title };
      axios
        .put(this.api + "/" + this.editpmsAttributeId, data)
        .then((response) => {
          this.success = response.data.success;
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
    },
  },
  created() {},
};
</script>
