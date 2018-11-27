<template>
  <div class="cart-item">
        <div>
            <span class="label">
                Seller: 
            </span>
            <span>
                {{product.vendor}}
            </span>
        </div>
      <table>
        <tr>
            <th>
                <div>
                    <div class="label product-details">
                        Product Name & Details
                    </div>
                    <div class="label product-price">
                        Price
                    </div>
                    <div class="label product-shipping">
                        Shipping Details
                    </div>
                </div>
            </th>  
        </tr>
        <tr>
            <td>
                <span> 
                    <img v-bind:src= "product.images[0].src" alt="product image" />
                    <span>
                        <div class="product-details--content">{{product.descriptionHtml}}</div>
                        <div class="product-price--content">US ${{product.variants && product.variants[0].price}} / piece</div>
                        <div class="product-shipping--content">Delivery Time: 21 - 45 days</div>
                    </span>
                </span>
            </td>
        </tr>
      </table>
  </div>
</template>

<script lang="ts">
import { Component, Vue, Prop } from 'vue-property-decorator';

@Component
export default class ShoppingCartItem extends Vue {
    @Prop() product!: any;  

    mounted() {
        console.log("*****" , JSON.stringify(this.product))
    }
}

</script>

<style lang="scss" scoped>
    .border {
        border: 1px solid lightgray
    }
    .cart-item {
        font-size: 14px;
        text-align: left;
        border: 2px solid lightgray;
        padding: 5px;
        &:not(last-of-type) {
            margin-bottom: 10px;
        }
        .product {
            &-details {
                width: 75%;
                display: inline-block;
                &--content {
                    padding-left: 20px;
                    width: calc(75% - 90px);
                    float: left;
                }
            }
            &-price {
                width: 10%;
                display: inline-block;
                &--content{
                   margin-right: 35px;
                    float: left;
                }
            }
            &-shipping {
                width: 15%;
                display: inline-block;
                &--content {
                    float: left;
                    
                }
            }
        }
    }
    table {
        width: 100%;
    }
    img {
        width: 60px;
        height: 70px;
        float: left;
    }
</style>