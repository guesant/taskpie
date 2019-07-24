<template>
  <main class="todo-view">
    <div class="forms" ref="forms" @input="inputEvent">
      <slot />
    </div>
  </main>
</template>

<script>
export default {
  methods: {
    inputEvent(e) {
      // auto-resize textarea
      // tks https://stackoverflow.com/questions/454202/creating-a-textarea-with-auto-resize#25621277

      e.target.style.height = 'auto';
      e.target.style.height = `${e.target.scrollHeight}px`;

      console.log(e.target.style.maxHeight);
    },

  },
  mounted() {
    const textareas = this.$refs.forms.querySelectorAll('textarea');

    textareas.forEach((textarea) => {
      if (textarea.rows === 2) {
        textarea.rows = 1; // eslint-disable-line no-param-reassign
      }
      this.inputEvent({ target: textarea });
    });
  },
};
</script>

<style lang="scss" scoped>
.todo-view {

  .forms {
    // padding: 4rem 1.25rem;
    padding: 4rem 0.625rem;

    textarea {
      // padding: 0.625rem;
      display: block;
      width: 100%;

      background: transparent;

      border: none;
      &:focus {
        outline: 0;
      }

      resize: none;
    }

    .input-title {
      font-family: Poppins;
      font-weight: 600;
      font-size: 1.5rem;

      padding-left: 0.625rem;
      padding-right: 0.625rem;


      color: #050927;
      &::placeholder {
        color: rgba(#050927, 0.6);
      }

      &::selection {
        background-color: #101540;
        color: #E3E5F5;
      }
    }

    textarea {
      &:not(.input-title) {
        margin-top: 2rem;

        font-family: Rubik;
        font-size: 0.875rem;
        line-height: 1.35;

        // margin-bottom: 0;

        transition: background-color .3s ease;

        padding: 0.625rem;

        // border-bottom: 0.0625rem solid rgba(#0C1035, 0.1);

        &:focus {
          outline: 0;
          background-color: rgba(white, 0.4);
          box-shadow: 0px 0.125rem 0.125rem rgba(#0C1035, 0.05);

          border-bottom-width: 0px;
          // margin-bottom: -0.0625rem;
          // border-bottom-width: 0.0625rem;
          // border-bottom-color: rgba(#0C1035, 0.3);
        }

        color: rgba(#0C1035, 0.8);

        &::placeholder {
          color: rgba(#0C1035, 0.5);
        }

        &::selection {
          background-color: rgba(#101540, 1);
          color: #E3E5F5;
        }
      }
    }
  }
}
</style>
