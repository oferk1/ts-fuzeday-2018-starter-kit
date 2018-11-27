<template>
  <main>
    <Product
      @(click)="gotoProduct(product.id)"
      v-for="product in products"
      :key="product.id"
      :info="product"
    />
    <button @click="nextPage()">Next</button>
  </main>
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
  private response: any = {};
  private products: any[] = [];

  created() {
    client.product.fetchAll().then((response: any) => {
      this.response = response;
      this.products = this.mapProduct(this.response);
    });
  }

  async nextPage() {
    const length = this.response.length;
    this.response = await client.fetchNextPage(this.response[length - 1]);
    const newProducts = this.mapProduct(this.response.model);
    this.products = [...this.products, ...newProducts];
  }

  mapProduct(response: any) {
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

  gotoProduct(id: string) {}
}
</script>

<style scoped lang="scss">
.gallery {
  display: flex;
  border: solid 1px red;
}
</style>