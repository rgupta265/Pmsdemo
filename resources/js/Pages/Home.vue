<template>
  <div class="home">
     <h1>Welcome to Home Page</h1>
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  name: 'home',
  // computed: {
  //   ...mapState({
  //     count: state => state.count
  //   }),
  // }
}
</script>
    <div class="credits">
    &copy; Copyright © {{ new Date().getFullYear() }}
        <strong
          ><span>{{ webInfo.company_name }}</span></strong
        >. All Rights Reserved</div>
        </div>
    Designed by
        <a :href="webInfo.company_website" target="_blank">{{
          webInfo.company_name
        }}</a>
      </div>