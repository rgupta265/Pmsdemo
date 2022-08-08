<template>
  <div class="alert">
    <!-- if Success Start -->
    <span v-if="data">
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        {{ data }}
        <button
          type="button"
          class="btn-close"
          data-bs-dismiss="alert"
          aria-label="Close"
        ></button>
      </div>
    </span>
    <!-- if Success End -->
    <!-- If Error Start -->
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
    <!-- If Error End -->
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "alert",
  props: {
    data: Object,
  },
  data() {
    return {  };
  },
  computed: {
    ...mapGetters({ errors: "getError"}),
  },
};
</script>