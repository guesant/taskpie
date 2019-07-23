<template>
  <header class="header">
    <div class="left">
      <div v-if="backButton" @click="$router.go(-1)" class="backbutton">
        <img src="@/assets/img/arrow-left.svg" alt="<" />
      </div>

      <h1 class="brand">taskpie</h1>
    </div>

    <div class="right">
      <slot name="right"></slot>
    </div>
  </header>
</template>

<script>
export default {
  props: {
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

  .brand {
    color: #E8EAF6;

    font-weight: 500;
    font-size: 1.125rem;
    font-family: 'Poppins';
  }

  .left {
    display: flex;
    align-items: center;

    .backbutton {
      margin-right: 1.25rem;
    }
  }

  .right {
    font-family: Rubik;
    font-size: 14px;
    color: #D4D7EC;
  }

}
</style>

