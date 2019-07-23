<template>
  <div class="new">
    <Header back-button>
      <template v-slot:right>
        Salvar
      </template>
    </Header>

    <main>
      <div>
        <input type="text" placeholder="Nova Tarefa">
        <input type="text" placeholder="Descrição (opcional)">
      </div>
    </main>
  </div>
</template>

<script>
import Header from '@/components/UI/Header.vue';

export default {
  name: 'new',
  components: {
    Header,
  }
};
</script>
