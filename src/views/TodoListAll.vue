<template>
  <div class="home">
    <Header />

    <router-link to="new">
      +
    </router-link>
    <main>
      <Intro>
        <h1>Lista de Tarefas</h1>
        <p>Ainda faltam duas de três tarefas</p>
      </Intro>

      <TodoList title="Em aberto" :collapse="false">
        <ul>
          <TodoListItem id="1">
            Marcar reunião com o pessoal
          </TodoListItem>
        </ul>
      </TodoList>
      <TodoList title="Concluídos">
        <ul>
          <TodoListItem id="2">
            Consertar a tv
          </TodoListItem>
        </ul>
      </TodoList>
    </main>
  </div>
</template>

<script>
import Header from '@/components/UI/Header.vue';
import Intro from '@/components/UI/Intro.vue';

import TodoList from '@/views/TodoList.vue';
import TodoListItem from '@/views/TodoListItem.vue';


export default {
  name: 'home',
  components: {
    Header,
    Intro,
    TodoList,
    TodoListItem,
  },
};
</script>
