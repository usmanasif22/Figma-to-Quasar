<template>
  <div id="checkout">
    <div id="body">
      <div id="leftColumn">
        <CheckoutForm />
      </div>
      <div id="rightColumn">
        <CheckoutCart showClub="show" />
      </div>
    </div>
  </div>
</template>

<script>
import CheckoutForm from "./CheckoutBody/CheckoutForm.vue";
import CheckoutCart from "./CheckoutBody/CheckoutCart.vue";
export default {
  components: {
    CheckoutForm,
    CheckoutCart,
  },
  name: "Checkout",
  data() {
    return {};
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
  padding-right: 60px;
  justify-content: flex-end;
  background: #ffffff;
}
#rightColumn {
  flex: 1;
  background: rgba(239, 240, 245, 0.3);
  border-left: 1px solid #ebecf3;
  min-height: 1900px;
}
@media (max-width: 768px) {
  #rightColumn {
    display: none;
  }
  #leftColumn {
    margin: 0 auto;
    justify-content: center;
    padding: 0 0;
  }
}
@media (max-width: 400px) {
  #checkout {
    width: 340px !important ;
  }
}
</style>
