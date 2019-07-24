<template>
  <div class="edit">
    <Header title="Editar tarefa" back-button>
      <template v-slot:right>
        delete
      </template>
    </Header>


    <TodoView>
      <textarea placeholder="Tarefa" class="input-title" v-model="$route.params.id"></textarea>
      <textarea placeholder="Descrição (opcional)"></textarea>
    </TodoView>
  </div>
</template>

<script>
import Header from '@/components/UI/Header.vue';
import TodoView from '@/components/TODO/TodoView.vue';


export default {
  name: 'edit',
  components: {
    Header,
    TodoView,
  },
};
</script>
