<template>
  <div id="productDetails">
    <div id="name">{{ products[0].name }}</div>
    <br />
    <div id="desc">{{ products[0].desc }}</div>
  </div>
</template>
<script>
export default {
  props: {
    products: {
      type: Array,
      required: true,
    },
  },
};
</script>
<style scoped>
#productDetails {
  max-width: 790px;
  margin: 40px auto;
}
#name {
  font-weight: 500;
  font-size: 18px;
  line-height: 28px;
  color: #4b4e68;
}
#desc {
  font-weight: 400;
  font-size: 18px;
  line-height: 28px;
  color: #4b4e68;
}
</style>
