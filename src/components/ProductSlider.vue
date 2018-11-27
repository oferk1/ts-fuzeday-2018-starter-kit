<template>
    <div class="product-slider">
        <b-carousel id="carousel1"
                    style="text-shadow: 1px 1px 2px #333;"
                    controls
                    indicators
                    background="#ababab"
                    :interval="4000"
                    img-width="1024"
                    img-height="120"
                    v-model="slide"
        >

            <!-- Text slides with image -->
            <b-carousel-slide
                              v-for="image in images"
            >

                <img slot="img" class="d-block mx-auto" height="240"
                     :src="image.src" >
            </b-carousel-slide>

        </b-carousel>
    </div>
</template>

<script lang="ts">
    import { Component, Prop, Vue } from "vue-property-decorator";
    import bCarouselSlide from 'bootstrap-vue/es/components/carousel/carousel-slide';
    import bCarousel from 'bootstrap-vue/es/components/carousel/carousel';

    @Component({
        components:  {
            'b-carousel-slide': bCarouselSlide,
            'b-carousel': bCarousel,
        }
    })
    export default class Product extends Vue {
        @Prop() private images!: any[];
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
