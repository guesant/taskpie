<template>
  <header>
    <div>
      <router-link v-if="backButton" to="/">
        &lt;
      </router-link>
      <h1>taskpie</h1>
    </div>

    <div>
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
