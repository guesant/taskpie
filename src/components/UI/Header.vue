<template>
  <header class="header">
    <div class="left">
      <div v-if="backButton" @click="$router.go(-1)" class="backbutton">
        <img src="@/assets/img/arrow1.svg" alt="<" />
      </div>

      <h1 class="brand">
        <span v-if="!title">taskpie</span>
        <span v-else class="brand-nd">{{title}}</span>
      </h1>
    </div>

    <div class="right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
export default {
  props: {
    title: { type: String },
    backButton: Boolean,
  },
};
</script>

<style lang="scss" scoped>
.header {
  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 1.25rem;

  background-color: #101540;
  box-shadow: 0 0.125rem 0.25rem rgba(17, 17, 53, 0.2);

  .brand {
    color: #E8EAF6;

    font-weight: 500;
    font-size: 1.125rem;
    font-family: 'Poppins';

    .brand-nd { // sendo como not-default
      font-family: Rubik;
      font-weight: normal;
    }
  }

  .left {
    display: flex;
    align-items: center;

    .backbutton {
      width: 1.125rem;
      height: 1.125rem;

      margin-right: 1.25rem;
    }
  }

  .right {
    font-family: Rubik;
    font-size: 0.875rem;
    color: #D4D7EC;
  }

}
</style>
