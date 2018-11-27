<template>
  <section>
    <h2>{{info.title}}</h2>
    <p class="description">{{info.description}}</p>
    <img class="section-img" v-bind:src="info.image">
    <p>{{info.price}}</p>
    <a href="#" class="info-link" @click="goToProduct()">Learn more...</a>
  </section>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";

@Component
export default class Product extends Vue {
<<<<<<< HEAD

  @Prop() private info!: any;
=======
  @Prop() private info: any;
>>>>>>> c941c6690d48ab0d18ac9ff281d82a1c403f5cc5

  goToProduct() {
    this.$router.push({ name: "item", params: { id: this.info.id } });
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
section {
  border-top: 3px solid var(--red);
  border-radius: 3px;
  background-color: white;
  margin-bottom: 20px;
  overflow: hidden;

  > .section-img {
    display: block;
    padding: 10px;
    margin: 0 auto;
    max-width: 250px;
  }

  > p.description {
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
  }
}
</style>
