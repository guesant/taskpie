import Vue from 'vue';
import Router from 'vue-router';
import TodoList from './views/TodoList.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'todo-list',
      component: TodoList,
    },
    {
      path: '/new',
      name: 'todo-new',
      // lazy-loaded when the route is visited.
      component: () => import('./views/TodoNew.vue'),
    },
    {
      path: '/edit/:id',
      name: 'todo-edit',
      // lazy-loaded when the route is visited.
      component: () => import('./views/TodoEdit.vue'),
    },
  ],
});
