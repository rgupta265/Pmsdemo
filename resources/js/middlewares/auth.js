import store from "../Store/index";

export default function auth ({next,router})
{
    if(!store.getters.isLoggedIn){
        return router.push({name:''});
    }
    return next();
}