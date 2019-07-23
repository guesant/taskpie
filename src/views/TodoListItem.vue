<template>
  <li class="todo-list_item">
    <div class="checkbox">
      <input type="checkbox" :id="id" v-model="done" />
      <label :for="id" v-on:click.prevent="done = !done"></label>
    </div>
    <router-link :to="`/edit/${id}`">
      <slot />
    </router-link>
  </li>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      done: false,
    }
  }
}
</script>

<style lang="scss" scoped>
.todo-list_item {
  background: linear-gradient(
    90deg,
    rgba(8, 12, 44, 0.02) 0%,
    rgba(5, 9, 39, 0.05) 100%
  );

  &, .checkbox, a {
    display: flex;
    align-items: center;
  }
  &, .checkbox {
    justify-content: center;
  }
  a {
    flex: 1;
  }

  .checkbox {
    input {
      display: none;
    }

    label {
      &::before {
        content: "";

        display: block;
        width: 1.125rem;
        height: 1.125rem;

        background: #ffffff;
        border: 0.0625rem solid #080c2c;
        border-radius: 0.625rem;
      }

      padding: 1.75rem 1.25rem;
      padding-right: 0.625rem;
    }

    input:checked + label::before {
      // opacity: 0.55;
      border-width: 0.5625rem;
    }
  }

  a {
    text-decoration: none;

    padding: 1.75rem 1.25rem;
    padding-left: 0.625rem;

    font-size: 1rem;
    color: #080c2c;
  }
}
</style>

