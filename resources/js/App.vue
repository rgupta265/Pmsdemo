<template>
  <div class="app">
     <Navbar></Navbar> 
  </div>
</template>

<script>
import './Styles/app.scss'

export default {
  name: 'app',
   data(){
         return{
            
         }
      },
  components: {
    Navbar: () => import('./Components/Layouts/Navbar.vue'),
    
  }
}
</script>

