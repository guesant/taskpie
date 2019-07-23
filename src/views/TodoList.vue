<template>
  <div class="home">
    <Header />

    <router-link to="new">
      +
    </router-link>
    <main>
      <div>
        <h1>Lista de Tarefas</h1>
        <p>Ainda faltam duas de três tarefas</p>
      </div>

      <section>
        <h1>EM ABERTO</h1>
        <ul>
          <li>
            <router-link to="/edit/1">
              Marcar reunião com o pessoal
            </router-link>
          </li>
        </ul>
      </section>
      <section>
        <h1>CONCLUÍDOS</h1>
        <ul>
          <li>
            <router-link to="/edit/2">
              Consertar a tv
            </router-link>
          </li>
        </ul>
      </section>
    </main>
  </div>
</template>

<script>
import Header from '@/components/UI/Header.vue';

export default {
  name: 'home',
  components: {
    Header,
  },
};
</script>
