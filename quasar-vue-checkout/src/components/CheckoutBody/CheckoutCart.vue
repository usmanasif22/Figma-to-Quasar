<template>
  <div id="checkoutRightConatiner">
    <CartItems />
    <CartPrice />
    <div id="ssl">
      <SecurePaymentBanner title="SSL Encryption & Guaranteed Safe Checkout" />
    </div>

    <JeweleryClub v-if="showClub == 'show'" />
  </div>
</template>
<script>
import CartItems from "./CheckoutCart/CartItems.vue";
import CartPrice from "./CheckoutCart/CartPrice.vue";
import JeweleryClub from "./CheckoutCart/JeweleryClub.vue";
import SecurePaymentBanner from "./CheckoutCart/SecurePaymentBanner.vue";
export default {
  props: {
    showClub: {
      type: String,
    },
    showSecurePayment: {
      type: String,
    },
  },
  components: { CartItems, CartPrice, SecurePaymentBanner, JeweleryClub },
};
</script>
<style scoped>
@media (max-width: 768px) {
  #checkoutRightConatiner {
    width: 664px;
    height: 745px;
    background: rgba(239, 240, 245, 0.3);
    border-top: 1px solid #ebecf3;
    border-radius: 20px;
    padding: 0px 0px 0px 50px;
  }
  #ssl {
    display: none;
  }
}
@media (max-width: 400px) {
  #checkoutRightConatiner {
    width: 343px;
    margin-left: 20px;
    margin-top: 10px;
    padding: 0px 0px 0px 20px;
  }
  #ssl {
    display: none;
  }
}
</style>
