import Middlewares from '../middlewares/index';
import store from '../Store/index';
import axios from 'axios';

axios.get('api/constants').then((response)=>{
  let allData = response.data.permissions;
  
  console.log(allData);
})

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
const InviteLink = () => import('../Pages/Admin/InviteLink/CreateLink.vue' /* webpackChunkName: "resource/js/Pages/Admin/InviteLink/CreateLink.vue" */)
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
    path: '/register',
    component: Register,
    name: 'register',
    meta:{
      middleware :[Middlewares.guest]
     
    }
  },
  // Dashboard layout and their Integrated children component Start
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
            // Middlewares.checkPermissions
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
              title:`profile`,
              middleware :[Middlewares.auth],
          }
      },
      {
        name:"permission",
        path: '/permission',
        component: PermissionList,
        meta:{
            title:`permission`, 
            middleware :[
              Middlewares.auth,
              Middlewares.checkPermissions 
            ],
            // permissions:['view-dashboard','view-user-management','create-roles','create-permissions']
        }
      },
      {
        name:"roles",
        path: '/roles',
        component: RoleList,
        meta:{
            title:`roles`,
         
        }
      },
      {
        name:"users",
        path: '/users',
        component: UserList,
        meta:{
            title:`users`,
        }
      },
      {
        name:"pmsattribute",
        path: '/pmsattribute',
        component: AddPmsAttribute,
        meta:{
            title:`pmsattribute`, 
            middleware :[
              Middlewares.auth,
              Middlewares.checkPermissions 
            ],
            permissions:[]
        }
      },
      {
        name:"invitelink",
        path: '/invitelink',
        component: InviteLink,
        meta:{
            title:`invitelink`, 
            middleware :[
              Middlewares.auth,
              Middlewares.checkPermissions 
            ],
            // permissions:['view-dashboard','view-user-management','create-roles','create-permissions']
        }
      },
      
    ]
}
  // Dashboard layout and their Integrated children component End 
  
  
]

export default routes;
