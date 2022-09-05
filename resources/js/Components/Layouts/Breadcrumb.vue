<template>
  <div class="pagetitle">
    <h1>{{this.pageTitle}}</h1>
    <nav>
      <ol class="breadcrumb">
        <li
          class="breadcrumb-item"
          v-for="(item, index) in breadcrumbList"
          :key="index"
        >
          <span role="button" @click="to(item)" v-if="item.link">{{ item.name }}</span>
           <strong class="breadcrumb-item active" v-else>{{item.name}}</strong>
        </li>
      </ol>
    </nav>
    <!-- <div class="content text-right">
      <a @click="$router.back()"><button class="btn btn-info">Back</button></a>
    </div> -->
  </div>
</template>
<script>
export default {
  name: "breadcrumb",
  data() {
    return {
      breadcrumbList: [],
      pageTitle:''
    };
  },
  mounted() {
    this.breadcrumbList = this.$route.meta.breadcrumb;
    this.pageTitle =this.$route.meta.title;
  },
  watch: {
    $route() {
      this.breadcrumbList = this.$route.meta.breadcrumb;
    },
  },
  methods: {
    to(item) {
      if (item.link) {
        this.$router.push({ name: item.link });
      }
    },
  },
};
</script>
