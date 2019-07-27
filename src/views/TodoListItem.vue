<template>
  <li class="todo-list_item" :class="{ done }">
    <div class="checkbox">
      <input type="checkbox" :id="id" v-model="done" />
      <label :for="id"></label>
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
    };
  },
};
</script>

<style lang="scss" scoped>
.todo-list_item {
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

  & + .todo-list_item {
    border-top: 0.0625rem solid rgba(#080C2C, 0.2);
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

        transition: border-width .15s ease-in-out, box-shadow .3s ease-in-out;
      }
      &:hover {
        &::before {
          // transition: box-shadow .3s ease-in-out;
          box-shadow: 0px 0px 0.125rem 0.25rem rgba(#080C2C, 0.16);
        }
        // background-color: rgba(#080C2C, 0.05);
      }
      &:active {
        &::before {
          // transition: box-shadow .3s ease-in-out;
          box-shadow: 0px 0px 0.125rem 0.125rem rgba(#080C2C, 0.1);
          background-color: rgba(#080C2C, 0.05);
        }
      }


      padding: 1.75rem 1.25rem;
      // padding-right: 0.625rem;
    }

    input:checked + label::before {
      // opacity: 0.55;
      // border-width: 0.5625rem;
      border-width: 0.57rem;
    }
  }

  a {
    text-decoration: none;

    padding: 1.75rem 1.25rem;
    padding-left: 0.625rem;

    font-size: 1rem;
    color: #080c2c;
  }

  &.done {
    .checkbox {
      label {
        transition: opacity .16s ease-out;
        opacity: 0.55;
      }
    }
    a {
      transition: color .16s ease-out;

      text-decoration: line-through;
      color: rgba(#080C2C, 0.5);
    }
  }
}


</style>
