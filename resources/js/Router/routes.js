import Middlewares from '../middlewares/index';


// Guest Component Start
const Home = () => import('../Pages/Home.vue' /* webpackChunkName: "resource/js/Pages/Login" */)
const Login = () => import('../Pages/Login.vue' /* webpackChunkName: "resource/js/Pages/Login" */)
const Register = () => import('../Pages/Register.vue' /* webpackChunkName: "resource/js/Pages/Register" */)
const NotFound = () => import('../Pages/NotFound.vue' /* webpackChunkName: "resource/js/Pages/Register" */)
// Guest Component End

// Navbar Layout Component Start
const Navbar = () => import('../Components/Layouts/Navbar.vue' /* webpackChunkName: "resource/js/Components/Layouts/navbar" */)

// Navbar Layout Component End


// Authenticated Component Start
const DashboardPage = () => import('../Pages/Admin/Dashboard.vue' /* webpackChunkName: "resource/js/Pages/Admin/Dashboard.vue" */)
const AccessDenied = () => import('../Pages/AccessDenied.vue' /* webpackChunkName: "resource/js/Pages/Admin/Dashboard.vue" */)
const ViewProfile = () => import('../Pages/Admin/Profile/ViewProfile.vue' /* webpackChunkName: "resource/js/Pages/About.vue" */)
const PermissionList = () => import('../Pages/Admin/UserManagement/Permissions/List.vue' /* webpackChunkName: "resource/js/Pages/Admin/UserManagement/Permissions/List.vue" */)
const RoleList = () => import('../Pages/Admin/UserManagement/Roles/List.vue' /* webpackChunkName: "resource/js/Pages/Admin/UserManagement/Roles/List.vue" */)
const UserList = () => import('../Pages/Admin/UserManagement/Users/List.vue' /* webpackChunkName: "resource/js/Pages/Admin/UserManagement/Users/List.vue" */)
//PMS Master
const AddPmsAttribute = () => import('../Pages/Admin/PmsMaster/AddPmsAttribute.vue' /* webpackChunkName: "resource/js/Pages/Admin/PmsMaster/AddPmsAttribute.vue" */)
const InviteLink = () => import('../Pages/Admin/InviteLink/List.vue' /* webpackChunkName: "resource/js/Pages/Admin/InviteLink/CreateLink.vue" */)
const ViewMyReport = () => import('../Pages/Admin/Report/ViewMyReport.vue' /* webpackChunkName: "resource/js/Pages/Admin/Report/ViewMyReport.vue" */)
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
            component: DashboardPage,
            meta:{
                title:`Dashboard`,
                text: 'Dashboard',
                middleware :[
                  Middlewares.auth, 
                  
                ],
                
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
            permissions:["view-my-report"],
            breadcrumb: [
              { name: 'Dashboard', link: 'dashboard' },
              { name: 'My Report' }
            ]
        }
      },
      
    ]
}
  // Dashboard layout and their Integrated children component End 
  
  
]

export default routes;
