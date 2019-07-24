<template>
  <div class="new">
    <Header back-button>
      <template v-slot:right>
        Salvar
      </template>
    </Header>

    <TodoView>
      <textarea placeholder="Tarefa" class="input-title"></textarea>
      <textarea placeholder="Descrição (opcional)"></textarea>
    </TodoView>
  </div>
</template>

<script>
import Header from '@/components/UI/Header.vue';
import TodoView from '@/components/TODO/TodoView.vue';

export default {
  name: 'new',
  components: {
    Header,
    TodoView,
  },
};
</script>
