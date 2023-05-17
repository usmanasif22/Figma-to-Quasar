<template>
  <div id="price">
    <div id="subTotal" style="margin-bottom: 11px">
      <p>Subtotal:</p>
      <p id="totalPrice">$362.70</p>
    </div>
    <div id="shipping" style="margin-bottom: 11px">
      <p>Shipping:</p>
      <p id="shippingType">Free</p>
    </div>
    <hr />
    <div id="total">
      <p>Total</p>
      <h6>$362.70</h6>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
#price {
  margin-top: 16px;
  margin-left: 61px;
  width: 450px;
}
p {
  display: inline;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #000034;
}
hr {
  margin: 10px 0px;
}
#totalPrice {
  margin-left: 317px;
}
h6 {
  display: inline;
  margin-left: 345px;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 26px;
  color: #000034;
}
#total {
  margin-top: 16px;
}
#shippingType {
  margin-left: 341px;
}
#total p {
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  color: #000034;
}
@media (max-width: 400px) {
  #price {
    max-width: 200px;
    margin-left: 0px;
  }
  #totalPrice {
    margin-left: 180px;
  }
  #shippingType {
    margin-left: 190px;
  }
  hr {
    width: 290px;
  }
  h6 {
    margin-left: 200px;
  }
}
</style>
