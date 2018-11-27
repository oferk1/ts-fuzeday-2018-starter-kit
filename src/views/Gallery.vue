<template>
    <div>
        <button @click="nextPage()">Next</button>
        <div class="gallery">
            <a @click="gotoProduct(product.id)" v-for="product in products" >
                <Product :key="product.id" :info="product"/>
            </a>
        </div>
    </div>
</template>

<script lang="ts">
    import {Component, Vue} from "vue-property-decorator";
    import Product from "@/components/Product.vue"; // @ is an alias to /src
    import {client} from "@/services/shopify-client";

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
            const response  = await client
                .fetchNextPage(this.response[length - 1]);

            // this.response = response ? response.model : [];
            // this.products = this.mapProduct(this.response);
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

        gotoProduct(id: string) {
            this
                .$router
                .push({
                    name: 'item',
                    params: {
                        id: id
                    }
                })
        }
    }
</script>

<style scoped lang="scss">
    .gallery {
        display: flex;
        border: solid 1px red;
    }
</style>