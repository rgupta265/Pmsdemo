import store from "../Store/index";

export default function guest ({next,router})
{
    if(store.getters.isLoggedIn){
        return router.push({name:'dashboard'});
    }
    return next();
}