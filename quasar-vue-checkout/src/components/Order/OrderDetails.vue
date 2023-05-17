<template>
  <div id="details">
    <div id="text">
      Thank you for your order
      <p>Your order is confirmed</p>
      <span id="orderId">Order ID: #10040</span>
    </div>
  </div>
</template>

<style scoped>
#details {
  display: flex;
  flex-direction: column;
  justify-content: center;
}
#text {
  font-weight: 600;
  font-size: 24px;
  line-height: 34px;
  text-align: center;
  color: #000034;
}
#text p {
  font-weight: 500;
  font-size: 16px;
  line-height: 26px;
  text-align: center;
  color: #4b4e68;
}
#orderId {
  width: 148px;
  height: 35px;
  background: rgba(228, 228, 255, 0.6);
  border: 1px solid #7782f1;
  border-radius: 12px;
  font-weight: 500;
  font-size: 14px;
  line-height: 24px;
  text-align: center;
  color: #7782f1;
  padding-top: 5px;
  display: inline-block;
}
@media (max-width: 7680px) {
  #orderId {
    left: 220px;
  }
}
@media (max-width: 400px) {
  #details {
    left: 0px;
    top: 200px;
  }
}
</style>
