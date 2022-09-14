import { createRouter, createWebHistory } from 'vue-router'


const routes = [
    {
      path:'/',
      name:'main',
      component: ()=>import('../views/MainView.vue')
    },
    {
      path:'/register',
      name:'register',
      component: ()=>import('../views/RegisterView.vue')
    },
    {
      path:'/community',
      name:'community',
      component: ()=>import('../views/CommunityView.vue')
    },
    {
      path:'/article/:id',
      name:'article',
      component: ()=>import('../views/ArticleView.vue')
    },
    {
      path:'/user/:id',
      name:'user',
      component: ()=>import('../views/UserView.vue')
    },
    {
      path:'/setting',
      name:'setting',
      component:()=>import('../views/UserinfoView.vue'),
      children:[
        {
          path:'profiler',
          component:()=>import('../views/ProfilserView.vue')
        },
        {
          path:'account',
          component:()=>import('../views/AccountView.vue')
        },
        {
          path:'submit',
          component:()=>import('../views/SubmitView.vue')
        },
        {
          path:'delete',
          name:'delete',
          component:()=>import('../views/DeleteView.vue')
        },
        {
          path:'comment',
      
          component:()=>import('../views/CommentView.vue')
        },
        {
          path:'image',
      
          component:()=>import('../views/UserimageView.vue')
        }
      ]
    },
    {
      path:'/loginhello',
      name:'loginhello',
      component: ()=>import('../views/LoginView.vue')
    },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
