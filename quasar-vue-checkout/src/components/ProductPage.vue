<template>
  <div id="productPage">
    <ProductImage :products="shoes" />
    <ProductPrice />
    <ProductDetails :products="shoes" />
    <div id="ssl">
      <SecurePaymentBanner
        title="Guaranteed  Safe  &  Secure  Checkout"
        id="paymentBanner"
        styleAttr="margin-bottom: 20px;"
        cardsStyle="text-align:left;"
      />
      <CallSupport />
    </div>

    <div id="button">
      <router-link to="/">
        <SubmitButton
          type="Yes, I want"
          buttonStyle="width: 281.29px;height: 76.43px;border-radius: 135.714px;padding: 25px 0px 0px 0px"
          forward="show"
        />
      </router-link>

      <p id="noThanks">No, Thanks</p>
    </div>
  </div>
</template>

<script>
import ProductImage from "./Product/ProductImage.vue";
import productImage from "../assets/shoeImage.png";
import ProductPrice from "./Product/ProductPrice.vue";
import ProductDetails from "./Product/ProductDetails.vue";
import SecurePaymentBanner from "../components/CheckoutBody/CheckoutCart/SecurePaymentBanner.vue";
import CallSupport from "./Product/CallSupport.vue";
import SubmitButton from "../components/CheckoutBody/CheckoutForm/SubmitButton.vue";

export default {
  components: {
    ProductImage,
    ProductPrice,
    ProductDetails,
    SecurePaymentBanner,
    CallSupport,
    SubmitButton,
  },
  data() {
    return {
      shoes: [
        {
          name: "Ornare rhoncus nunc ut felis. Faucibus dolor at ultrices tincidunt. Pulvinar sed justo et viverra pellentesque.",
          desc: "Mauris augue nulla proin vel a. Facilisis fringilla molestie dignissim elit orci malesuada. Lorem sit sagittis vitae nulla id. Mauris ipsum sed sed faucibus. Nulla amet metus gravida orci faucibus nisl eros arcu lorem. Nullam ornare molestie nam id gravida volutpat bibendum sem feugiat. Neque vulputate in et maecenas porta mi tellus. In massa porttitor urna quis volutpat at.",
          price: "$50",
          img: productImage,
        },
        {
          name: "Ornare rhoncus nunc ut felis. Faucibus dolor at ultrices tincidunt. Pulvinar sed justo et viverra pellentesque.",
          desc: "Mauris augue nulla proin vel a. Facilisis fringilla molestie dignissim elit orci malesuada. Lorem sit sagittis vitae nulla id. Mauris ipsum sed sed faucibus. Nulla amet metus gravida orci faucibus nisl eros arcu lorem. Nullam ornare molestie nam id gravida volutpat bibendum sem feugiat. Neque vulputate in et maecenas porta mi tellus. In massa porttitor urna quis volutpat at.",
          price: "$50",
          img: productImage,
        },
        {
          name: "Ornare rhoncus nunc ut felis. Faucibus dolor at ultrices tincidunt. Pulvinar sed justo et viverra pellentesque.",
          desc: "Mauris augue nulla proin vel a. Facilisis fringilla molestie dignissim elit orci malesuada. Lorem sit sagittis vitae nulla id. Mauris ipsum sed sed faucibus. Nulla amet metus gravida orci faucibus nisl eros arcu lorem. Nullam ornare molestie nam id gravida volutpat bibendum sem feugiat. Neque vulputate in et maecenas porta mi tellus. In massa porttitor urna quis volutpat at.",
          price: "$50",
          img: productImage,
        },
      ],
    };
  },
};
</script>

<style scoped>
#productPage {
  display: flex;
  flex-direction: column;
}
#paymentBanner {
  width: 440px;
  height: 140px;
  background: #ffffff;
  border: 1px solid #daddf5;
  box-shadow: 0px 10px 30px rgba(22, 8, 49, 0.05);
  border-radius: 16px;
  padding: 10px 30px;
  float: left;
}
#ssl {
  margin: 0px auto;
}
#button {
  margin: 10px auto;
}
#noThanks {
  text-align: center;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #4b4e68;
  cursor: pointer;
  height: 100px;
}
@media (max-width: 768px) {
  #paymentBanner {
    width: 370px;
  }
  #productPage {
    max-width: 664px;
    margin: 0px auto;
  }
}
@media (max-width: 400px) {
  #productPage {
    max-width: 334px;
    margin: 0px auto;
  }
  #paymentBanner {
    width: 334px;
    padding: 10px 20px;
  }
}
</style>
