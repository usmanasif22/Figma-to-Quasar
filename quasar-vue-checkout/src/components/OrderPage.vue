<template>
  <div id="checkout">
    <div id="orderSummary">
      <ShowSummary @summary="showHideCart" />
      <div id="cartDetails">
        <CheckoutCart
          showClub="show"
          showSecurePayment="false"
          v-if="showCart"
        />
      </div>
    </div>

    <div id="body">
      <div id="leftColumn">
        <div id="thanksMessage">
          <ThanksMessage />
        </div>

        <div id="orderCard">
          <OrderCard />
        </div>

        <div id="ssl">
          <SecurePaymentBanner
            title="Secure SSL Encryption & Guaranteed Safe Checkout"
          />
        </div>
      </div>
      <div id="rightColumn"><CheckoutCart showClub="false" /></div>
    </div>
  </div>
</template>

<script>
import ThanksMessage from "./Order/ThanksMessage.vue";
import CheckoutCart from "./CheckoutBody/CheckoutCart.vue";
import ShowSummary from "./CheckoutBody/ShowSummary.vue";
import OrderCard from "./Order/OrderCard.vue";
import SecurePaymentBanner from "./CheckoutBody/CheckoutCart/SecurePaymentBanner.vue";
export default {
  components: {
    ThanksMessage,
    CheckoutCart,
    ShowSummary,
    OrderCard,
    SecurePaymentBanner,
  },
  name: "Checkout",
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
#checkout {
  margin: 0;
  padding: 0;
}
#body {
  display: flex;
}
#leftColumn {
  flex: 1;
  display: flex;
  justify-content: center;
  background: #ffffff;
  position: relative;
}
#thanksMessage {
  position: absolute;
}
#orderCard {
  position: relative;
  top: 470px;
  height: 300px;
}
#ssl {
  position: absolute;
  height: 200px;
  display: none;
}
#rightColumn {
  flex: 1;
  background: rgba(239, 240, 245, 0.3);
  border-left: 1px solid #ebecf3;
  min-height: 870px;
}
@media (max-width: 768px) {
  #rightColumn {
    display: none;
  }
  #leftColumn {
    position: relative;
  }
  #orderSummary {
    margin-left: 50px;
  }
  #orderCard {
    top: 420px;
  }
  #ssl {
    display: flex;
    position: absolute;
    top: 700px;
  }
}
@media (max-width: 400px) {
  #orderSummary {
    margin-left: 0px;
  }
  #leftColumn {
    justify-content: center;
  }
  #orderCard {
    height: 450px;
    top: 400px;
  }
  #ssl {
    display: none;
  }
}
</style>
