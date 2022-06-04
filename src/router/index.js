import Vue from 'vue'
import VueRouter from 'vue-router'
import NProgress from 'nprogress';

Vue.use(VueRouter)

const routes = [
	{
	  path: '/',
	  name: 'Create New called',
	  component: () => import('../components/create-called/CreateCalledComponent.vue'),
	},
	{
	  path: '/list-called',
	  name: 'List All Calleds',
	  component: () => import('../components/list-called/ListCalledComponent.vue'),
	},
	{
	  path: '/edit-called/:id',
	  name: 'Update Called',
	  component: () => import('../components/edit-called/EditCalledComponent.vue'),
	},
  ];

  const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes
  })
  

router.beforeResolve((to, from, next) => {
	if(to.name){
		NProgress.start();
	}
	next();
});

router.afterEach((to, from) => {
	NProgress.done();
});

export default router
