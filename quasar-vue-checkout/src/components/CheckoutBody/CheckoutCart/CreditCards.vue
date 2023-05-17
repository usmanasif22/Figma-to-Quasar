<template>
  <div id="paymentBoxes" :style="cardsStyle">
    <div class="box">
      <img :src="mastercard" alt="" style="top: 3px; left: 7px" />
    </div>
    <div class="box">
      <img :src="visa" alt="" style="top: 1px; left: 6px" />
    </div>
    <div class="box">
      <img :src="paypal" alt="" style="top: 3px; left: 12px" />
    </div>
    <div class="box" style="background: #006fcf">
      <img :src="amex" alt="" style="top: 0.5px; left: 4px" />
    </div>
    <div class="box">
      <img
        :src="jcb"
        alt=""
        style="height: 15px; top: 3px; left: 10px; border: none"
      />
    </div>
    <div class="box">
      <img :src="vector" alt="" style="top: 3px; left: 10px" />
    </div>
  </div>
</template>
<script>
import mastercard from "../../../assets/icons/mastercard.svg";
import visa from "../../../assets/icons/visa.svg";
import paypal from "../../../assets/icons/paypal.svg";
import amex from "../../../assets/icons/amex.svg";
import jcb from "../../../assets/icons/jcb.svg";
import vector from "../../../assets/icons/vector.svg";
export default {
  props: {
    cardsStyle: {
      type: String,
    },
  },
  data() {
    return {
      mastercard: mastercard,
      visa: visa,
      paypal: paypal,
      amex: amex,
      jcb: jcb,
      vector: vector,
    };
  },
};
</script>
<style scoped>
#paymentBoxes {
  /* margin-left: 88px; */
  position: relative;
}
.box {
  margin-right: 7px;
  display: inline-block;
  position: relative;
  top: 12px;
  width: 40px;
  height: 24px;
  background: #ffffff;
  border: 1px solid #d6d8ea;
  border-radius: 4.54936px;
}
.box img {
  position: relative;
}
@media (max-width: 768px) {
  #paymentBoxes {
    /* text-align: left; */
  }
}
@media (max-width: 400px) {
  #paymentBoxes {
    /* margin-left: 30px; */
    /* text-align: left; */
  }
}
</style>
