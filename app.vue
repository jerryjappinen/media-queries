<script>
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries
</script>

<template>
  <div class="app">
    <h3><code>any-hover</code></h3>

    <p>Testing whether input methods can hover</p>

    <div class="test-any-hover">
      <code class="test-any-hover-hover">any-hover: hover</code>
    </div>
  </div>
</template>

<style scoped>
.app {
  padding: 3% 6% 6% 6%;
}

/* https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-hover */
@media (any-hover: hover) {
  .test-any-hover-hover {
    text-decoration: underline;
  }
}
</style>
