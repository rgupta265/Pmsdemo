<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <link rel="shortcut icon" href="logo.png" type="image/x-icon">
    <link href="{{asset('backendTheme/assets/img/favicon.png')}}" rel="icon">
  <link href="{{asset('backendTheme/assets/img/apple-touch-icon.png')}}" rel="apple-touch-icon">

  <!-- Google Fonts -->
  <link href="https://fonts.gstatic.com" rel="preconnect">
  <link href="https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i|Nunito:300,300i,400,400i,600,600i,700,700i|Poppins:300,300i,400,400i,500,500i,600,600i,700,700i" rel="stylesheet">

  <!-- Vendor CSS Files -->
  <link href="{{asset('backendTheme/assets/vendor/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">
  <link href="{{asset('backendTheme/assets/vendor/bootstrap/css/bootstrap.min.css')}}" rel="stylesheet">
  <link href="{{asset('backendTheme/assets/vendor/bootstrap-icons/bootstrap-icons.css')}}" rel="stylesheet">
  <link href="{{asset('backendTheme/assets/vendor/boxicons/css/boxicons.min.css')}}" rel="stylesheet">
  <link href="{{asset('backendTheme/assets/vendor/quill/quill.snow.css')}}" rel="stylesheet">
  <link href="{{asset('backendTheme/assets/vendor/quill/quill.bubble.css')}}" rel="stylesheet">
  <link href="{{asset('backendTheme/assets/vendor/remixicon/remixicon.css')}}" rel="stylesheet">
  <link href="{{asset('backendTheme/assets/vendor/simple-datatables/style.css')}}" rel="stylesheet">

  <!-- Template Main CSS File -->
  <link href="{{asset('backendTheme/assets/css/style.css')}}" rel="stylesheet">

        <!-- App css -->
       
        <link rel="stylesheet" href="{{ mix('css/app.css') }}" />

    <title>{{env('APP_NAME')}}</title>
</head>
<body class="noclass" id="deMo">
    <div id="app">
        <router-view></router-view>
        <!-- <App></App> -->
    </div>

    
   <!-- jQuery  -->
   
   <script src="{{asset('backendTheme/assets/vendor/apexcharts/apexcharts.min.js') }}"></script>
   <script src="{{asset('backendTheme/assets/vendor/bootstrap/js/bootstrap.bundle.min.js') }}"></script>
   <script src="{{asset('backendTheme/assets/vendor/chart.js/chart.min.js') }}"></script>
   <script src="{{asset('backendTheme/assets/vendor/echarts/echarts.min.js') }}"></script>
   <script src="{{asset('backendTheme/assets/vendor/quill/quill.min.js') }}"></script>
   <script src="{{asset('backendTheme/assets/vendor/simple-datatables/simple-datatables.js') }}"></script>
   <script src="{{asset('backendTheme/assets/vendor/tinymce/tinymce.min.js') }}"></script>
   <script src="{{asset('backendTheme/assets/vendor/php-email-form/validate.js') }}"></script>
 
   <!-- Template Main JS File -->
   <script src="{{asset('backendTheme/assets/js/main.js') }}"></script>
        <script src="{{ mix('js/app.js') }}"></script>
</body>
</html>
