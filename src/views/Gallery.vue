<template>
  <div>
    <button @click="nextPage()">Next</button>
    <div class="gallery">
      <Product v-for="product in products" :key="product.id" :info="product"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Product from "@/components/Product.vue"; // @ is an alias to /src
import { client } from "@/services/shopify-client";

@Component({
  components: {
    Product
  }
})
export default class Gallery extends Vue {
  data() {
    return {
      products: []
    };
  }

  created() {
    client.product.fetchAll().then(response => {
      this.response = response;
      this.products = this.mapProduct(this.response);
    });
  }

  nextPage() {
    const length = this.response.length;
    client.fetchNextPage(this.response[length - 1]).then(response => {
      this.response = response.model;
      this.products = this.mapProduct(this.response);
    });
  }

  mapProduct(response) {
    return response.map((res: any) => {
      return {
        id: res.id,
        title: res.title,
        description: res.description,
        price: res.variants[0].price,
        image: res.images[0].src
      };
    });
  }
}
</script>

<style scoped lang="scss">
.gallery {
  display: flex;
  border: solid 1px red;
}
</style>