import { createRouter, createWebHashHistory } from 'vue-router';
import Home from '../views/Home.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/post',
    name: 'Post',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Post.vue'),
  },
  {
    path: '/project',
    name: 'OpenSourceProject',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/OpenSourceProject.vue'),
  },
  {
    path: '/joinus',
    name: 'JoinUs',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/JoinUs.vue'),
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue'),
    children: [
      {
        path: 'team',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutTeam.vue'),
      },
      {
        path: 'history',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutTeamHistory.vue'),
      },
      {
        path: 'member',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutTeamMember.vue'),
      },
      {
        path: 'info',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutTeamInformation.vue'),
      },
      {
        path: 'link',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutTeamLink.vue'),
      },
      {
        path: 'collaborate',
        component: () => import(/* webpackChunkName: "about" */ '../views/AboutTeamCollaborate.vue'),
      }
    ]
  },
  {
    path: '/webchangelog',
    name: 'WebsiteChangeLog',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/WebsiteChangeLog.vue'),
  },
  {
    path: '/developer',
    name: 'Developer',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Developer.vue'),
  },
  // 404 頁面
  {
    path: '/:pathMatch(.*)*',
    component: () => import('../views/NotFound.vue'),
  },
  // 重新導向
  {
    path: '/newPage/:pathMatch(.*)*',
    redirect: {
      name: 'Home',
    },
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  linkActiveClass: 'active',
  scrollBehavior(to, from, savedPosition) {
    // console.log(to, from, savedPosition);
    if (to.fullPath.match('newPage')) {
      return {
        top: 0,
      };
    }
    return {};
  },
});

export default router;
