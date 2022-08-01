import store from '../Store/index';

export default (permissions) =>{
    //get the user Permission
    const myObjres = store.getters['getUserDetails'].permissions; // [1,2,3]
    const userPermissions = JSON.parse(JSON.stringify(myObjres));//manipulate data for permissions
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
            console.log(permission);
        console.log(userPermissions);
            if(userPermissions.includes(permission)){
                canEnter = true;   
            }
                  
         });
    }
     return canEnter;
    
    
    //check user has any permission in true or false
}