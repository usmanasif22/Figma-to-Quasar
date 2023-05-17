<template>
  <div id="shippingMethod" class="mg-top-50">
    <div class="title">Shipping method</div>
    <div id="methods">
      <input
        type="radio"
        name="method"
        id=""
        value="free"
        v-model="shippingMethod"
      />
      <label for="free">Free shipping</label>
      <span id="freePrice">10$</span>
      <br />
      <input
        type="radio"
        name="method"
        id=""
        value="dhl"
        v-model="shippingMethod"
      />
      <label for="dhl">DHL with price</label>
      <span id="dhlPrice">20$</span>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      shippingMethod: "",
    };
  },
};
</script>
<style scoped>
#freePrice {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 46px;
  color: #000034;
  position: relative;
  bottom: 4.5px;
  left: 380px;
}
#dhlPrice {
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 46px;
  color: #000034;
  position: relative;
  bottom: 5px;
  left: 373px;
}
label {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #4b4e68;
  cursor: pointer;
  position: relative;
  bottom: 6px;
}
input {
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  height: 24px;
  width: 24px;
  border-radius: 50%;
  border: 1px solid #4b4e68;
  margin-right: 10px;
  outline: none;
  cursor: pointer;
}
input[type="radio"]:checked::before {
  content: "";
  display: block;
  width: 12px;
  height: 12px;
  margin: 5px 5.5px;
  border-radius: 50%;
  background-color: #4b4e68;
}
@media (max-width: 768px) {
  #freePrice {
    left: 480px;
  }
  #dhlPrice {
    left: 473px;
  }
}
@media (max-width: 400px) {
  #methods {
    margin-left: 20px;
  }
  #freePrice {
    left: 170px;
  }
  #dhlPrice {
    left: 163px;
  }
}
</style>
