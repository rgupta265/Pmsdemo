import store from "../Store/index";
import can from '../helpers/can'
import router from "../Router";

export default function checkPermissions ({next,to,from,router})
{ 
    const requiredPermissions = to.meta.permissions;


     if(!from.name)
     {
        store.dispatch("getUserDetails").then(()=>{
             const canEnter =can(requiredPermissions);
             if(canEnter){
                return next();
             }
             return router.push({name:'accessdenied'})
        });
       
     }
     else
     {
        const canEnter = can(requiredPermissions);
         if(canEnter){
            return next();
         }
         return router.push({name:'accessdenied'})
     }
    
     
     
}