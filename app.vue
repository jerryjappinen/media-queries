<script setup>
import { queries } from "@/config";

function isVal(value) {
  return typeof value !== "undefined" && value !== null;
}
</script>

<template>
  <div class="app">
    <h1>Browser media query tester</h1>

    <p>
      Use this page to test which media queries your current browser matches
      with.
    </p>

    <div
      v-for="(values, property) in queries"
      :key="property"
      :class="`test-${property}`"
      class="test-property-group"
    >
      <h3>
        <a
          :href="`https://developer.mozilla.org/en-US/docs/Web/CSS/@media/${property}`"
          target="_blank"
          ><code>{{ property }}</code></a
        >
      </h3>
      <!-- <p>Testing whether input methods can hover</p> -->

      <div
        v-for="value in values"
        :key="property + '-' + (isVal(value) ? value : 'void')"
        :class="`test-${property}-${isVal(value) ? value : 'void'}`"
        class="test-property-value"
      >
        <code class="code-sample"
          >@media ({{ property }}{{ isVal(value) ? `: ${value}` : "" }}) { /*
          ... */ }</code
        >
        <span class="tag tag-match">Match</span>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.app {
  padding: 3% 6% 6% 6%;

  h3 {
    margin-top: 0;
    margin-bottom: 0;
  }
}

.code-sample {
  display: inline-block;
  margin-right: 0.5em;
}

.tag {
  display: inline-block;
  font-weight: bold;
  border-radius: 100px;
  padding: 1px 6px;
  background-color: #31b550;
  color: white;
  text-transform: uppercase;
  font-size: 0.75em;
}

.tag-match {
  display: none;
}

.test-property-group {
  margin-bottom: 1em;
  padding: 0.8em 1em 1em 1em;
  border-radius: 0.25em;
  border-width: 1px;
}

@include active-effect-selector(any-pointer, none);
@include active-effect-selector(any-pointer, coarse);
@include active-effect-selector(any-pointer, fine);

@include active-effect-selector(any-hover, none);
@include active-effect-selector(any-hover, hover);

@include active-effect-selector(aspect-ratio, 1/1);
@include active-effect-selector(min-aspect-ratio, 1/1);
@include active-effect-selector(max-aspect-ratio, 1/1);

@include active-effect-selector(color);
@include active-effect-selector(color, 1);
@include active-effect-selector(color, 2);
@include active-effect-selector(color, 4);
@include active-effect-selector(color, 8);
@include active-effect-selector(color, 10);
@include active-effect-selector(color, 12);

@include active-effect-selector(min-color, 1);
@include active-effect-selector(min-color, 2);
@include active-effect-selector(min-color, 4);
@include active-effect-selector(min-color, 8);
@include active-effect-selector(min-color, 10);
@include active-effect-selector(min-color, 12);

@include active-effect-selector(max-color, 1);
@include active-effect-selector(max-color, 2);
@include active-effect-selector(max-color, 4);
@include active-effect-selector(max-color, 8);
@include active-effect-selector(max-color, 10);
@include active-effect-selector(max-color, 12);
</style>
