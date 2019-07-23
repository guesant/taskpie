<template>
  <div class="intro">
    <slot></slot>
  </div>
</template>

<style lang="scss" scoped>
.intro {
  padding: 4rem 1.25rem;

  h1 {
    font-family: Poppins;
    font-weight: 600;
    font-size: 1.5rem;

    color: #050927;
  }

  p {
    margin-top: 1.5rem;
  }
}

</style>
