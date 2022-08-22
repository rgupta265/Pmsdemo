<template>
  <ul class="dropdown-menu dropdown-menu-end dropdown-menu-arrow notifications">
    <li class="dropdown-header">
      You have {{ notifications.length }} new notifications
      <a href="#"
        ><span class="badge rounded-pill bg-primary p-2 ms-2">View all</span></a
      >
    </li>
    <div class="notification" v-for="(notify, index) in notifications" :key="index">
      <li >
        <hr class="dropdown-divider" />
      </li>

      <li class="notification-item">
        <i class="bi bi-check-circle text-success"></i>
        <div>
          <p>{{notify.data.description}}</p>
          <p>{{notify.created_at | humanReadableTime}}</p>
        </div>
      </li>
    </div>

    <li>
      <hr class="dropdown-divider" />
    </li>
    <li class="dropdown-footer">
      <a href="#">Show all notifications</a>
    </li>
  </ul>
  <!-- End Notification Dropdown Items -->
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "notification",
  data() {
    return {
    };
  },
  computed: {
    ...mapGetters({ notifications: "getAllNotification" }),
  },
  created() {
    this.$store.dispatch("getAllNotification");
  },
};
</script>
