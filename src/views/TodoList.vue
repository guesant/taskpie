<template>
  <div class="todo-list">
    <div class="todo-list_header" @click="collapse && (showTodos = !showTodos)">
      <h1 class="title">{{title}}</h1>
      <div class="arrow" v-if="collapse" :class="{swv: showTodos, hide: !showTodos}">
        <img src="@/assets/img/arrow2.svg" alt="collapse">
      </div>
    </div>

    <div
      class="todo-list_list"
      :class="{closed: !showTodos}"

      ref="todo_list_list"
      v-on:DOMSubtreeModified="adjustMaxHeight"
    >
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    collapse: { type: Boolean, default: true },
  },
  methods: {
    adjustMaxHeight() {
      this.$refs.todo_list_list.style.maxHeight = `${this.$refs.todo_list_list.scrollHeight}px`;
      console.log(this.$refs);
    },
  },
  data() {
    return {
      showTodos: true,
    };
  },
  watch: {
    showTodos() {
      console.log(this.showTodos);
      if (!this.showTodos) {
        // fechando...
      } else {
        // abrindo...
        // this.$refs.todo_list_list.style.maxHeight = 0;
      }
    },
  },
  mounted() {
    this.adjustMaxHeight();
  },
};
</script>

<style lang="scss" scoped>
.todo-list {
  background-color: white;

  .todo-list_header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background: rgba(#060C3C, 0.05);

    padding: 0.75rem 1.25rem;

    border: 0.0625rem solid rgba(8, 12, 44, 0.2);
    border-left: 0;
    border-right: 0;

    .title {
      text-transform: uppercase;
      font-weight: 500;
      font-size: 0.75rem;

      color: rgba(8, 12, 44, 0.5);
    }

    .arrow {
      width: 1.125rem;
      height: 1.125rem;

      transition: .25s ease-in-out;

      // como funciona esse rotacionamento 360?
      // 1. o ícone aparenta estar em 0deg, mas na verdade está a -360deg
      // 2. quando a classe .hide é adicionada, há uma rotação anti-horária
      //    (0deg -> -180deg) por .25s, mas ao final da animação, a rotação volta a ser 0deg.
      //    por isso, adicionamos a rotação -180deg,
      //    que somente será respeitada após o fim da animação
      // 3. quando a classe .hide é removida, há uma rotação horária (-180deg -> -360deg)

      &.swv {
        transform: rotate(-360deg); // aparenta ser 0deg
      }
      &.hide {
        animation: rodaroda .25s ease-in-out;
        transform: rotate(-180deg);
      }

      @keyframes rodaroda {
        0% {
          transform: rotate(0);
        }
        100% {
          transform: rotate(-180deg);
        }
      }
    }
  }

  .todo-list_list {
    opacity: 1;
    height: 100%;
    overflow: hidden;

    transition: opacity .7s ease-in-out, max-height .5s ease-in-out;

    &.closed {
      opacity: 0.5;
      max-height: 0 !important;
    }
    ul {
      li {
        // background: linear-gradient(
        //   90deg,
        //   rgba(8, 12, 44, 0.02) 0%,
        //   rgba(5, 9, 39, 0.05) 100%
        // );
        // &:hover {
        //   background: linear-gradient(
        //     90deg,
        //     rgba(8, 12, 44, 0.01) 0%,
        //     rgba(5, 9, 39, 0.00) 100%
        //   );
        // }
        background: linear-gradient(
          90deg,
          rgba(8, 12, 44, 0.01) 0%,
          rgba(5, 9, 39, 0.00) 100%
        );
        &:hover {
          background: linear-gradient(
            90deg,
            rgba(8, 12, 44, 0.05) 0%,
            rgba(5, 9, 39, 0.07) 100%
          );
        }

        a {
          display: block;
          text-decoration: none;

          padding: 1.75rem 1.25rem;

          font-size: 1rem;
          color: #080C2C;
        }
      }
    }
  }

}
</style>
