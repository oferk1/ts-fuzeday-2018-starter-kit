<template>
  <div class="product">
    <img v-bind:src="info.image">
    <h3 class="title">{{info.title}}</h3>
    <h4 class="description">{{info.description}}</h4>
    <h4 class="price">{{info.price}}</h4>
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
  border: solid 1px;
  width: 250px;
  margin: 5px;

  > img {
    width: 250px;
  }
}
</style>
