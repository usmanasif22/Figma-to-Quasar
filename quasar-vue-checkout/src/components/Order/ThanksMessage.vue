<template>
  <div id="thanksPage">
    <div id="like">
      <img :src="like" alt="" />
    </div>

    <div id="details">
      <OrderDetails />
    </div>
    <span id="backButton">
      <router-link to="/product"
        ><SubmitButton
          type="Back to Shop"
          back="show"
          foward="hide"
          style="
            position: absolute;
            padding-top: 15px;
            width: 230px;
            margin-top: 30px;
          "
      /></router-link>
    </span>
  </div>
</template>
<script>
import like from "../../assets/icons/like.svg";
import SubmitButton from "../CheckoutBody/CheckoutForm/SubmitButton.vue";
import OrderDetails from "./OrderDetails.vue";
export default {
  components: { OrderDetails, SubmitButton },
  data() {
    return {
      like: like,
    };
  },
};
</script>
<style scoped>
#thanksPage {
  position: relative;
  top: 100px;
}
#like {
  text-align: center;
  margin-bottom: 30px;
  top: 80px;
}
#backButton {
  position: relative;
  left: 20px;
}

@media (max-width: 768px) {
  #thanksPage {
    top: 40px;
  }
}
@media (max-width: 400px) {
  #thanksPage {
    top: 40px;
  }
}
</style>
