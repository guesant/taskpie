<template>
  <div class="new">
    <Header back-button>
      <template v-slot:right>
        delete
      </template>
    </Header>

    {{ $route.params.id }}
    <main>
      <div>
        <input type="text" placeholder="Tarefa">
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
