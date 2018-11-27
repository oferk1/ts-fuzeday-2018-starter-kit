<template>
  <div class="gallery">
    <Item v-for="item in items" :key="item" :msg="item"/>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Item from "@/components/Item.vue"; // @ is an alias to /src

@Component({
  components: {
    Item
  }
})
export default class Gallery extends Vue {
  items: string[] = ["test1", "test2", "test3", "test4"];
}
</script>

<style scoped lang="scss">
.gallery {
  display: flex;
  border: solid 1px red;
}
</style>