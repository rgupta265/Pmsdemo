import Middlewares from '../middlewares/index';


// Guest Component Start
const Home = () => import('../Pages/Home.vue' /* webpackChunkName: "resource/js/Pages/Login" */)
const Login = () => import('../Pages/Login.vue' /* webpackChunkName: "resource/js/Pages/Login" */)
const Register = () => import('../Pages/Register.vue' /* webpackChunkName: "resource/js/Pages/Register" */)
const NotFound = () => import('../Pages/NotFound.vue' /* webpackChunkName: "resource/js/Pages/Register" */)
const UpdateProfile = () => import('../Pages/UpdateProfile.vue' /* webpackChunkName: "resource/js/Pages/UpdateProfile" */)
// Guest Component End

// Navbar Layout Component Start
const Navbar = () => import('../Components/Layouts/Navbar.vue' /* webpackChunkName: "resource/js/Components/Layouts/navbar" */)

// Navbar Layout Component End


// Authenticated Component Start
const MasterDashboardPage = () => import('../Pages/Admin/MasterDashboard.vue' /* webpackChunkName: "resource/js/Pages/Admin/Dashboard.vue" */)
const AccessDenied = () => import('../Pages/AccessDenied.vue' /* webpackChunkName: "resource/js/Pages/Admin/Dashboard.vue" */)
const ViewProfile = () => import('../Pages/Admin/Profile/ViewProfile.vue' /* webpackChunkName: "resource/js/Pages/About.vue" */)
const PermissionList = () => import('../Pages/Admin/UserManagement/Permissions/List.vue' /* webpackChunkName: "resource/js/Pages/Admin/UserManagement/Permissions/List.vue" */)
const RoleList = () => import('../Pages/Admin/UserManagement/Roles/List.vue' /* webpackChunkName: "resource/js/Pages/Admin/UserManagement/Roles/List.vue" */)
const UserList = () => import('../Pages/Admin/UserManagement/Users/List.vue' /* webpackChunkName: "resource/js/Pages/Admin/UserManagement/Users/List.vue" */)
//PMS Master
const AddPmsAttribute = () => import('../Pages/Admin/PmsMaster/AddPmsAttribute.vue' /* webpackChunkName: "resource/js/Pages/Admin/PmsMaster/AddPmsAttribute.vue" */)
const InviteLink = () => import('../Pages/Admin/InviteLink/List.vue' /* webpackChunkName: "resource/js/Pages/Admin/InviteLink/CreateLink.vue" */)
const ViewMyReport = () => import('../Pages/Admin/MyReport/ViewMyReport.vue' /* webpackChunkName: "resource/js/Pages/Admin/MyReport/ViewMyReport.vue" */)
const CreateReport = () => import('../Pages/Admin/ProgressReport/CreateReport.vue' /* webpackChunkName: "resource/js/Pages/Admin/ProgressReport/CreateReport.vue" */)
const ViewCreatedReport = () => import('../Pages/Admin/ProgressReport/ViewCreatedReport.vue' /* webpackChunkName: "resource/js/Pages/Admin/ProgressReport/ViewCreatedReport.vue" */)
const AddReport = () => import('../Pages/Admin/ProgressReport/AddReport.vue' /* webpackChunkName: "resource/js/Pages/Admin/ProgressReport/AddReport.vue" */)
const UserInfoComponent = () => import('../Pages/Admin/UserInfo.vue' /* webpackChunkName: "resource/js/Pages/Admin/UserInfo" */)
const ReportInfoComponent = () => import('../Pages/Admin/ReportInfo.vue' /* webpackChunkName: "resource/js/Pages/Admin/UserInfo" */)
// Authenticated Component End



const routes = [
  {
    path: '/home',
    component: Home,
    name: 'home',
    meta:{
      title:'Home'
      // middleware :[Middlewares.guest]
    }
  },
  {
    path: '',
    component: Login,
    name: 'login',
    meta:{
      middleware :[Middlewares.guest]
    }
  },

  {
    path: '*',
    component: NotFound,
    name: 'notfound',
    meta:{
      middleware :[Middlewares.guest]
      
    }
  },
  {
    path: '/register/',
    component: Register,
    name: 'register',
    meta:{
      middleware :[Middlewares.guest]
     
    }
  },
   //redirect before update profile
   {
    path: '/update-profile',
    component: UpdateProfile,
    name: 'updateProfile',
    meta:{
      title:'Update Profile',
      middleware :[
        Middlewares.auth,
      ],
      breadcrumb: [
        { name: 'Home', link: 'dashboard' },
        { name: 'Update Profile' }
      ]
    }
  },
  //close redirect 
  // Dashboard layout and their Integrated children component Start

  //Initilise only one permission which can access routes permission object inside meta
  {
    path:"",
    component: Navbar,
    name:'dashboard',

    children:[
      {
        path: '/accessdenied',
        component: AccessDenied,
        name: 'accessdenied',
        meta:{
          title:'accessdenied',
          middleware :[
            Middlewares.auth,
          ],
        }
      },
     
        {
            name:"dashboard",
            path: '/dashboard',
            component: MasterDashboardPage,
            meta:{
                title:`Dashboard`,
                text: 'Dashboard',
                middleware :[
                  Middlewares.auth,   
                ],
                breadcrumb: [
                  { name: 'Home', link: 'dashboard' },
                  { name: 'Dashboard' }
                ]
                
            }
        },
        {
          name:"profile",
          path: '/profile',
          component: ViewProfile,
          meta:{
              title:`My Profile`,
              middleware :[
                Middlewares.auth,
                 
              ],
              breadcrumb: [
                { name: 'Dashboard', link: 'dashboard' },
                { name: 'Profile' }
              ]
              
          }
      },
      {
        name:"permission",
        path: '/permission',
        component: PermissionList,
        meta:{
            title:`Permission List`, 
            middleware :[
              Middlewares.auth,
              Middlewares.checkPermissions
            ],
            permissions:["view-user-role-permission-management"],
            breadcrumb: [
              { name: 'Dashboard', link: 'dashboard' },
              { name: 'Permission' }
            ]
        }
      },
      {
        name:"roles",
        path: '/roles',
        component: RoleList,
        meta:{
            title:`Roles List`,
            middleware :[
              Middlewares.auth,
              Middlewares.checkPermissions
            ],
            permissions:["view-user-role-permission-management"],
            breadcrumb: [
              { name: 'Dashboard', link: 'dashboard' },
              { name: 'Roles' }
            ]
         
        }
      },
      {
        name:"users",
        path: '/users',
        component: UserList,
        meta:{
            title:`Users List`,
            middleware :[
              Middlewares.auth,
              Middlewares.checkPermissions
            ],
            permissions:["view-user-role-permission-management"],
            breadcrumb: [
              { name: 'Dashboard', link: 'dashboard' },
              { name: 'Users' }
            ]
        }
      },
      {
        name:"pmsattribute",
        path: '/pmsattribute',
        component: AddPmsAttribute,
        meta:{
            title:`PMS Attribute`, 
            middleware :[
              Middlewares.auth,
              Middlewares.checkPermissions 
            ],
            permissions:["view-pms-master"],
            breadcrumb: [
              { name: 'Dashboard', link: 'dashboard' },
              { name: 'PMS Attribute' }
            ]
        }
      },
      {
        name:"invitelink",
        path: '/invitelink',
        component: InviteLink,
        meta:{
            title:`Invite Link`, 
            middleware :[
              Middlewares.auth,
              Middlewares.checkPermissions 
            ],
            permissions:["view-invite-link"],
            breadcrumb: [
              { name: 'Dashboard', link: 'dashboard' },
              { name: 'Invite Link' }
            ]
        }
      },
      {
        name:"viewMyReport",
        path: '/view-my-report',
        component: ViewMyReport,
        meta:{
            title:`My Report`, 
            middleware :[
              Middlewares.auth,
              Middlewares.checkPermissions 
            ],
            permissions:["view-my-pms-report"],
            breadcrumb: [
              { name: 'Dashboard', link: 'dashboard' },
              { name: 'My Report' }
            ]
        }
      },
      {
        name:"createReport",
        path: '/create-report',
        component: CreateReport,
        meta:{
            title:`Create PMS Report`, 
            middleware :[
              Middlewares.auth,
              Middlewares.checkPermissions 
            ],
            permissions:["create-pms-report"],
            breadcrumb: [
              { name: 'Dashboard', link: 'dashboard' },
              { name: 'Create PMS Report' }
            ]
        }
      },
      {
        name:"viewCreatedReport",
        path: '/view-created-report',
        component: ViewCreatedReport,
        meta:{
            title:`View PMS Created Report`, 
            middleware :[
              Middlewares.auth,
              Middlewares.checkPermissions 
            ],
            permissions:["view-created-pms-report"],
            breadcrumb: [
              { name: 'Dashboard', link: 'dashboard' },
              { name: 'View PMS Created Report' }
            ]
        }
      },
      {
        name:"addReport",
        path: '/add-report',
        component: AddReport,
        meta:{
            title:`Add PMS Report`, 
            middleware :[
              Middlewares.auth,
              Middlewares.checkPermissions 
            ],
            permissions:["create-pms-report"],
            breadcrumb: [
              { name: 'Dashboard', link: 'dashboard' },
              { name: 'Add PMS Report' }
            ]
        }
      },
      {
        name:"MUserInfo",
        path: '/m-user-info',
        component: UserInfoComponent,
        props: true,
        meta:{
            title:`User Info`, 
            middleware :[
              Middlewares.auth,
              // Middlewares.checkPermissions 
            ],
            breadcrumb: [
              { name: 'Dashboard', link: 'dashboard' },
              { name: 'UserInfo' }
            ]
        }
      },
      {
        name:"MReportInfo",
        path: '/m-report-info',
        component: ReportInfoComponent,
        meta:{
            title:`PMS Report Info`, 
            middleware :[
              Middlewares.auth,
              // Middlewares.checkPermissions 
            ],
            breadcrumb: [
              { name: 'Dashboard', link: 'dashboard' },
              { name: 'PMS Report Info' }
            ]
        }
      },
      
    ]
}
  // Dashboard layout and their Integrated children component End 
  
  
]

export default routes;
