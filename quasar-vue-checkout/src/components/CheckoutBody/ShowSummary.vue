<template>
  <div id="summary">
    <div id="cart">
      <img :src="cartIcon" alt="" />
    </div>
    <div id="detail">
      <span id="toggleText" @click="showSummary">Show order summary</span>
      <span id="total">$362.70</span>
    </div>
  </div>
</template>
<script>
import cart from "../../assets/icons/cart.svg";

export default {
  props: {
    showCart: {
      type: Boolean,
    },
  },
  components: {},
  data() {
    return {
      cartIcon: cart,
    };
  },
  methods: {
    showSummary() {
      this.$emit("summary", this.showCart);
    },
  },
};
</script>
<style scoped>
#summary {
  margin: 40px 0 10px 0;
  width: 664px;
  height: 74px;
  background: #ffffff;
  border: 1px solid #d6d8ee;
  border-radius: 20px;
  padding: 25px;
  display: none;
  position: relative;
}
#cart {
  display: inline-block;
}
#details {
  max-width: 370px;
  position: relative;
}
#toggleText {
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #4b4e68;
  margin-left: 16px;
  cursor: pointer;
}
#total {
  margin: 0;
  padding: 0;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: #000034;
  position: relative;
  left: 355px;
}
#cartDetails {
  position: absolute;
  top: 80px;
  right: 0px;
}
@media (max-width: 768px) {
  #summary {
    display: flex;
  }
}
@media (max-width: 400px) {
  #summary {
    width: 343px;
    margin: 20px 20px;
  }
  #total {
    left: 33px;
  }
}
</style>
