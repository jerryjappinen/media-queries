<script>
// https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_media_queries/Using_media_queries
const queries = ref({
  "any-hover": ["hover"],
  "any-pointer": ["none", "coarse", "fine"],
});
</script>

<template>
  <div class="app">
    <div
      v-for="(values, property) in queries"
      :key="property"
      :class="`test-${property}`"
    >
      <h3>
        <code>{{ property }}</code>
      </h3>
      <!-- <p>Testing whether input methods can hover</p> -->

      <div
        v-for="value in values"
        :key="property + '-' + value"
        :class="`test-${property}-${value}`"
      >
        <code>@media ({{ property }}: {{ value }}) { /* ... */ }</code>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.app {
  padding: 3% 6% 6% 6%;
}

/* https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-hover */
@media (any-hover: hover) {
  .test-any-hover-hover {
    text-decoration: underline;
  }
}

/* https://developer.mozilla.org/en-US/docs/Web/CSS/@media/any-pointer */
@include active-effect-selector(any-pointer, none);
@include active-effect-selector(any-pointer, coarse);
@include active-effect-selector(any-pointer, fine);
</style>
