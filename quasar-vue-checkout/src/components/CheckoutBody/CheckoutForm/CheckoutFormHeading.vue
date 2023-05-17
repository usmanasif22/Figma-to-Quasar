<template>
  <div id="headingContainer">
    <div class="title">Checkout</div>
    <div id="path">
      <p>Cart</p>
      <img :src="arrrow" alt="" />
      <span>Shipping & Billing</span>
    </div>
  </div>
</template>
<script>
import arrow from "../../../assets/icons/angleRight.svg";
export default {
  data() {
    return {
      arrrow: arrow,
    };
  },
};
</script>
<style scoped>
#path p {
  font-size: 14px;
  font-weight: 500;
  color: #84849a;
  line-height: 24px;
  display: inline;
  cursor: pointer;
}
#path span {
  color: #000034;
  cursor: pointer;
}
img {
  margin: 0px 10px 0px 8px;
}
@media (max-width: 400px) {
  #headingContainer {
    width: 343px;
    margin-left: 5px;
  }
  #path {
    margin-left: 22px;
  }
}
</style>
