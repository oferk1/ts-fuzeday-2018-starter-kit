<script src="../store.ts"></script>
<template>
    <div class="product" v-if="product">
        <div class="product-slider">
            <product-slider :images="product.images"></product-slider>
        </div>

        <div class="product-description">
            <div v-html="product.descriptionHtml"></div>
        </div>

        <div class="product-picture">
            <button class="btn btn-primary mr-2" @click="buy()">
                Buy Now!
            </button>

            <button class="btn btn-primary" @click="cart()">
                Go To Cart!
            </button>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import {client} from "@/services/shopify-client";
    import {Action} from 'vuex-class';
    import ProductSlider from './../components/ProductSlider.vue'

    @Component({
        components: {
            'product-slider': ProductSlider
        }
    })

    export default class GalleryItem extends Vue {
        public product: any = {};

        @Action('addAction') private addProduct!: Function;

        created() {
            this.fetchProduct();
        }

        buy() {
          this.addProduct(this.product);
         }

        cart() {
            this
                .$router
                .push({
                    name: 'cart',
                })
        }

        fetchProduct() {
            client
                .product
                .fetch(this.$route.params.id)
                .then((response: any) => {
                    console.log(response.images[0].src)
                    this.product = response;
                })
        }
    }

</script>

<style scoped lang="scss">
    .product-description {
        width: 70%;
    }

    .product-picture {
        width: 30%;

        img {
            width: 100%;
        }
    }
</style>