<template>
  <div id="checkoutLeftConatiner">
    <CheckFormHeading />
    <ShowSummary @summary="showHideCart" />
    <div id="cartDetails">
      <CheckoutCart showClub="show" showSecurePayment="false" v-if="showCart" />
    </div>
    <div id="formItems">
      <CheckoutBanner />
      <CheckoutPaymentBanner />
      <ContactInfo />
      <ShippingAddress title="Shipping Address" />
      <ShippingMethod />
      <PaymentMethod />
      <BillingAddress />
      <div id="submit">
        <router-link to="/order">
          <SubmitButton
            type="Complete Order"
            back="hide"
            forward="show"
            buttonStyle="padding-top:15px"
          />
        </router-link>
        <div id="sslBanner">
          <SecurePaymentBanner
            cardsStyle="text-align:left;"
            boxSize="margin-left:0px"
            title="Secure SSL Encryption & Guaranteed Safe Checkout"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import CheckFormHeading from "./CheckoutForm/CheckoutFormHeading.vue";
import CheckoutBanner from "./CheckoutForm/CheckoutBanner.vue";
import CheckoutPaymentBanner from "./CheckoutForm/CheckoutPaymentBanner.vue";
import ContactInfo from "./CheckoutForm/ContactInfo.vue";
import ShippingAddress from "./CheckoutForm/ShippingAddress.vue";
import ShippingMethod from "./CheckoutForm/ShippingMethod.vue";
import PaymentMethod from "./CheckoutForm/PaymentMethod.vue";
import BillingAddress from "./CheckoutForm/BillingAddress.vue";
import SubmitButton from "./CheckoutForm/SubmitButton.vue";
import ShowSummary from "./ShowSummary.vue";
import CheckoutCart from "./CheckoutCart.vue";
import SecurePaymentBanner from "../CheckoutBody/CheckoutCart/SecurePaymentBanner.vue";
export default {
  components: {
    CheckFormHeading,
    CheckoutBanner,
    CheckoutPaymentBanner,
    ContactInfo,
    ShippingAddress,
    ShippingMethod,
    PaymentMethod,
    BillingAddress,
    SubmitButton,
    ShowSummary,
    CheckoutCart,
    SecurePaymentBanner,
  },
  data() {
    return {
      showCart: false,
    };
  },
  methods: {
    showHideCart(newVal) {
      this.showCart = !this.showCart;
    },
  },
};
</script>
<style scoped>
#checkoutLeftConatiner {
  position: relative;
  padding-top: 60px;
  overflow: hidden;
}
#submit {
  height: 330px;
}
#formItems {
  position: relative;
}
#sslBanner {
  display: none;
}
@media (max-width: 768px) {
  #sslBanner {
    display: flex;
  }
}
@media (max-width: 400px) {
  #checkoutLeftConatiner {
    width: 100%;
  }
  #submit {
    margin-left: 20px;
  }
}
</style>
