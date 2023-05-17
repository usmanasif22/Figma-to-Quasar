<template>
  <div id="paymentBanner">
    <div id="title">Express Checkout</div>
    <div id="paymentBoxes">
      <div id="shopPay"><img :src="shopPay" alt="shoPayLogo" /></div>
      <div id="payPal"><img :src="payPal" alt="payPalLogo" /></div>
      <div id="googlePay"><img :src="gPay" alt="googlePayLogo" /></div>
    </div>
  </div>
</template>
<script>
import ShopPay from "../../../assets/ShopPay.svg";
import PayPal from "../../../assets/PayPal.svg";
import GPay from "../../../assets/GPay.svg";
export default {
  data() {
    return {
      shopPay: ShopPay,
      payPal: PayPal,
      gPay: GPay,
    };
  },
};
</script>
<style scoped>
#paymentBanner {
  border: 1px solid #d6d8ee;
  border-radius: 32px;
  width: 540px;
  height: 160px;
  margin-top: 30px;
}
#title {
  font-style: normal;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #000034;
  margin-top: 30px;
  margin-left: 30px;
}
#paymentBoxes {
  margin: 20px 30px;
  display: flex;
}
#shopPay {
  background: rgba(90, 49, 244, 0.1);
  border: 1px solid rgba(90, 49, 244, 0.6);
  border-radius: 16px;
  width: 147px;
  height: 50px;
  margin-right: 20px;
  padding: 15px 32px;
  cursor: pointer;
}
#payPal {
  background: rgba(17, 57, 132, 0.1);
  border: 1px solid rgba(17, 57, 132, 0.6);
  border-radius: 16px;
  width: 147px;
  height: 50px;
  margin-right: 20px;
  padding: 15px 32px;
  cursor: pointer;
}
#googlePay {
  background: rgba(234, 64, 50, 0.1);
  border: 1px solid rgba(234, 64, 50, 0.6);
  border-radius: 16px;
  width: 147px;
  height: 50px;
  padding: 15px 48px;
  cursor: pointer;
}
@media (max-width: 768px) {
  #paymentBanner {
    width: 664px;
  }
}
@media (max-width: 400px) {
  #paymentBanner {
    max-width: 343px;
    height: 190px;
    padding: 5px 0px 0px 10px;
    margin: 20px 20px 0px 20px;
  }
  #title {
    margin-top: 10px;
    margin-left: 10px;
  }
  #paymentBoxes {
    margin: 10px 10px;
    display: inline-flex;
    width: 100px;
    position: relative;
  }
  #shopPay {
    position: relative;
    margin-right: 10px;
  }
  #googlePay {
    position: absolute;
    top: 58px;
  }
  #payPal {
    position: relative;
  }
}
</style>
