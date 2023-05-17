<template>
  <div id="image">
    <q-carousel animated v-model="slide" arrows infinite id="carousel">
      <q-carousel-slide
        v-for="(doc, index) in products"
        :key="index"
        :name="index"
        :img-src="doc.img"
      />
    </q-carousel>
  </div>
</template>
<script>
import { ref } from "vue";
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      slide: ref(1),
    };
  },
};
</script>
<style scoped>
/* #image {
  margin: 0px auto;
} */
#carousel {
  max-width: 790px;
  height: 520px;
  border-radius: 32px;
  margin: 60px auto 30px auto;
}
@media (max-width: 400px) {
  #image {
    width: 343px;
    height: 226px;
  }
  #carousel {
    width: 343px;
    height: 226px;
    margin: 30px 0px 30px 0px;
  }
}
</style>
