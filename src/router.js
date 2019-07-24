import Vue from 'vue';
import Router from 'vue-router';
import TodoListAll from './views/TodoListAll.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'todo-list-all',
      component: TodoListAll,
    },
    {
      path: '/new',
      name: 'todo-new',
      // lazy-loaded when the route is visited.
      component: () => import('./views/TodoViewNew.vue'),
    },
    {
      path: '/edit/:id',
      name: 'todo-edit',
      // lazy-loaded when the route is visited.
      component: () => import('./views/TodoViewEdit.vue'),
    },
  ],
});
