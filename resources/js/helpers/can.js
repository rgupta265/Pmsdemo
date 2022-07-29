import store from '../Store/index';

export default (permissions) =>{
    //get the user Permission
    const userPermissions = store.getters['getUserDetails'].permissions;
    let canEnter =false;
     
    if(!userPermissions || !permissions)
    {
        return canEnter;
    }

    if(!Array.isArray(permissions))
    {
        canEnter = userPermissions.includes(permissions);
    }
    else
    {
        permissions.forEach((permission)=>{
            if(userPermissions.includes(permission)){
                canEnter = true;   
            }
                  
         });
    }
     return canEnter;
    
    
    //check user has any permission in true or false
}