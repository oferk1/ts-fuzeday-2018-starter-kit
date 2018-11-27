<template>
  <div class="product">
    <img v-bind:src="info.image">
    <h3>{{info.title}}</h3>
    <h4>{{info.description}}</h4>
    <h4>{{info.price}}</h4>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Product extends Vue {
  @Prop() private info: Object;
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.product {
  border: solid 1px blue;
  margin: 5px;

  > img {
    max-width: 250px;
  }
}
</style>
