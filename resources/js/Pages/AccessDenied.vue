<template>
<div id="accessdenied">
    <main id="main" class="main">

    <div class="pagetitle">
      <h1>Access Denied</h1>
      <nav>
        <ol class="breadcrumb">
          <li class="breadcrumb-item"><a href="index.html">Home</a></li>
          <li class="breadcrumb-item">Pages</li>
          <li class="breadcrumb-item active">Access Denied</li>
        </ol>
      </nav>
    </div><!-- End Page Title -->

    <section class="section">
      <div class="row">
        <div class="col-lg-12">

          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Hello User</h5>
              <p>You Don't have permission to access this page</p>
               <router-link :to="{name:'dashboard'}"><a class="btn btn-primary">Back to Dashboard</a></router-link>

            </div>
          </div>

        </div>

    
      </div>
    </section>

  </main><!-- End #main -->
</div>
</template>
<script>
export default {
    name :'accessdenied',
    
}
</script>
<style lang="">
    
</style>