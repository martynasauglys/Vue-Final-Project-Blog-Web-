import Vue from 'vue';
import VueRouter from 'vue-router';
import Index from '../views/Index.vue';
import User from '../views/User.vue';
import SinglePost from '../views/SinglePost.vue';
import Signup from '../views/Signup.vue';
import Login from '../views/Login.vue';
import CreatePost from '../views/CreatePost.vue';
import EditPost from '../views/EditPost.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'Index',
    component: Index,
  },
  {
    path: '/user/:username',
    component: User,
  },
  {
    path: '/post/:username/:id',
    component: SinglePost,
  },
  {
    path: '/login/',
    component: Login,
  },
  {
    path: '/signup',
    component: Signup,
  },
  {
    path: '/create',
    component: CreatePost,
  },
  {
    path: '/edit/:username/:id',
    component: EditPost,
  },
];

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
});

export default router;
