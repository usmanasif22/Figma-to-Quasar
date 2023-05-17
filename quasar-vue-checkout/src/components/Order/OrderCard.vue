<template>
  <div id="card">
    <div id="name" class="heading displayInline">Name:</div>
    <div id="email" class="heading displayInline leftPosition">Email:</div>
    <br />
    <p class="body" id="namebody">Oleo Bone</p>
    <p class="body leftPosition" id="emailbody">oleo_bone@gmail.com</p>
    <br />
    <div id="shippingAddress" class="heading displayInline">
      Shipping Address:
    </div>
    <div id="billingAddress" class="heading displayInline leftPosition">
      Billing Address:
    </div>
    <br />
    <p class="shippingAddrbody body">
      4140 Parker Rd. Allentown, New Mexico 31134
    </p>
    <p class="billingAddrbody body leftPosition">Same as shipping</p>
    <br />
    <div id="shippingMethod" class="heading displayInline">Shipping:</div>
    <div id="paymentMethod" class="heading displayInline leftPosition">
      Payment Method:
    </div>
    <br />
    <p class="methodbody body">Free</p>
    <p class="paymentbody body leftPosition">Credit Card</p>
  </div>
</template>

<style scoped>
#card {
  width: 540px;
  height: 290px;
  background: #ffffff;
  border: 1px solid #d6d8ee;
  border-radius: 32px;
  padding: 40px;
}
.heading {
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #4b4e68;
}
.body {
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  color: #000034;
}
.displayInline {
  display: inline-block;
}
p {
  display: inline-block;
  max-width: 200px;
}
.leftPosition {
  position: absolute;
  left: 300px;
}
@media (max-width: 768px) {
  #card {
    width: 664px;
    /* right: 50px; */
    padding-left: 70px;
  }
  .leftPosition {
    left: 400px;
  }
}
@media (max-width: 400px) {
  #card {
    /* position: absolute; */
    /* top: 480px; */
    /* left: 0px; */
    /* right: 27px;  */
    height: 400px;
    width: 330px;
    padding-left: 30px;
  }
  .leftPosition {
    left: -40px;
  }
  #namebody {
    top: 50px;
  }
  #email {
    position: relative;
    top: 50px;
  }
  #emailbody {
    position: relative;
    top: 50px;
    left: -65px;
  }
  #shippingAddress {
    position: relative;
    top: 40px;
  }
  #billingAddress {
    position: relative;
    top: 120px;
    left: -110px;
  }
  .shippingAddrbody {
    position: relative;
    top: 40px;
  }
  .billingAddrbody {
    position: relative;
    top: 50px;
    left: 0px;
  }
  #shippingMethod {
    position: relative;
    top: 40px;
  }
  #paymentMethod {
    position: relative;
    top: 90px;
    left: -60px;
  }
  .methodbody {
    position: relative;
    top: 40px;
  }
  .paymentbody {
    position: relative;
    top: 90px;
    left: -30px;
  }
}
</style>
