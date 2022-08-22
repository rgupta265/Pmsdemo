<template>
  <div class="list">
    <main id="main" class="main"> 
        <!-- Start Page Title -->
        <Breadcrumb></Breadcrumb>
      <!-- End Page Title -->

      <section class="section profile">
        <div class="row">
          <div class="col-xl-12 ">
            <div class="card table-responsive">
              <div class="card-body">
                <h5 class="card-title">Users List</h5>
                <table class="table table-sm">
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
                    <tr v-for="(user, index) in userRolePermissions" :key="index">
                      <th scope="row">{{ ++index }}</th>
                      <td>{{ user.name }}</td>
                       <td>{{ user.email }}</td>
                    <td><span v-for="(role,we) in user.roles" :key="we" class="badge bg-success m-1"><i class="bi bi-person-badge"></i>&nbsp;{{role.slug}}</span></td>
                      <td>{{ user.created_at | formatDate }}</td>
                      <td>
                        <span
                          role="button"
                          class="badge bg-primary"
                          ><i class="bi bi-pencil-square me-1"></i> Edit</span
                        >
                        <span
                          role="button"
                          class="badge bg-danger"
                          ><i class="bi bi-trash me-1"></i> Block / Un-block</span
                        >
                      </td>
                      <td >
                        <span class="badge bg-secondary m-1" v-for="(per,idx) in user.permissions" :key="idx">
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
        </div>
      </section>
    </main>
  </div>
</template>

<script>
import Breadcrumb from '.../../../resources/js/Components/Layouts/Breadcrumb';
export default {
  name: "list",
  components: {
    Breadcrumb
  },
  data() {
    return {
      showTableStatus: false,
      showStatus: false,
      success: "",
      btnName: "Add User",
      userRolePermissions: [],
    };
  },
  mounted() {
    this.getUserRolePermissions();
  },
  computed: {
  },
  methods: {
    getUserRolePermissions() {
      axios
        .get("/getUserRolePermission")
        .then((response) => {
          this.userRolePermissions = response.data.data;
        })
        .catch(() => {});
    },
    
  },
  created() {},
};
</script>
