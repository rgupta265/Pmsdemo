<template>
  <div class="alert">
    <!-- if Success Start -->
    <span v-if="data">
      <div class="alert alert-success alert-dismissible fade show" role="alert">
        {{ data }}
      </div>
    </span>
    <!-- if Success End -->
    <!-- If Error Start -->
    <span v-if="errors">
      <div
        class="alert alert-danger alert-dismissible fade show"
        role="alert"
        v-for="(error, index) in errors"
        :key="index"
      >
        {{ error[0] }}
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
    data: "",
  },
  data() {
    return {elementVisible:true};
  },
  computed: {
    ...mapGetters({ errors: "getError" }),
  },
  
};
</script>