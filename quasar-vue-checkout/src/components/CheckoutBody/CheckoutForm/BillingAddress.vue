<template>
  <div id="billingAddress" class="mg-top-50">
    <div class="title">Billing Address</div>
    <p>Specify the address for your payment option</p>

    <div id="types">
      <input
        type="radio"
        name="address"
        id=""
        value="same"
        v-model="shippingAddress"
      />
      <label for="different">Same as shipping address</label>
      <br />
      <input
        type="radio"
        name="address"
        id=""
        value="different"
        v-model="shippingAddress"
      />
      <label for="different">Use a different billing address</label>
    </div>
    <div id="showBilling" v-if="shippingAddress == 'different'">
      <BillingAddress />
    </div>
  </div>
</template>
<script>
import BillingAddress from "./ShippingAddress.vue";
export default {
  components: {
    BillingAddress,
  },
  data() {
    return {
      shippingAddress: "",
    };
  },
};
</script>
<style scoped>
#title {
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  color: #000034;
}
p {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #84849a;
}
label {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #4b4e68;
  position: relative;
  bottom: 5px;
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
#showBilling {
  position: relative;
  bottom: 20px;
}
@media (max-width: 400px) {
  p {
    margin-left: 20px;
  }
  #types {
    margin-left: 20px;
  }
}
</style>
