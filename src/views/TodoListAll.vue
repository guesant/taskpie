<template>
  <div class="home">
    <Header />

    <router-link to="new" class="new-todo">
      <img src="@/assets/img/mais.svg" alt="+">
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

<style lang="scss" scoped>
.new-todo {
  display: flex;
  align-items: center;
  justify-content: center;

  position: fixed;
  bottom: 1.25rem;
  right: 1.25rem;

  width: 3.625rem;
  height: 3.625rem;

  background-color: rgba(#FFFFFF, 0.8);
  border: 0.0625rem solid rgba(16, 21, 64, 0.2);
  box-shadow: 0 0 0.375rem rgba(16, 21, 64, 0.25);
  border-radius: 50%;

  transition: box-shadow .3s ease, background-color .3s ease;

  &:hover {
    background-color: #fff;

    box-shadow: 0px 0px 0.625rem rgba(16, 21, 64, 0.35);
  }

  &:active {
    box-shadow: none;
  }
}
</style>
