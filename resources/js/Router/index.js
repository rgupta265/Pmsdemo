import VueRouter from 'vue-router';
import routes from './routes';


const router = new VueRouter({
  mode: 'history',
  linkExactActiveClass: "active",
  routes
});



//testing before after
function nextCheck(context,middleware,index)
{

  const nextMiddleware =middleware[index];

  if(!nextMiddleware) return context.next;
  return(...parameters) =>{
    context.next(...parameters);

    const nextMidd =nextCheck(context,middleware,index+1);
    nextMiddleware({...context, next : nextMidd})
  }
}

router.beforeEach((to,from,next)=>{
  if(to.meta.middleware)
  {
    const middleware =Array.isArray(to.meta.middleware) ? to.meta.middleware :[to.meta.middleware];

    const ctx ={
      from,
      next,
      router,
      to
    }
    const nextMiddleware =nextCheck(ctx,middleware,1);

    return middleware[0]({...ctx,next:nextMiddleware});
  }
  return next();

})
export default router;
