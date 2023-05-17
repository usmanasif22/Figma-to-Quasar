<template>
  <div id="banner">
    <p>🔥 Your cart is reserved for <span>10:00</span> minutes</p>
    <div id="timer">
      <div class="timeBoxes">00</div>
      <span>:</span>
      <div class="timeBoxes">09</div>
      <span>:</span>
      <div class="timeBoxes">39</div>
    </div>
  </div>
</template>
<style scoped>
#banner {
  background: rgba(151, 154, 184, 0.1);
  border-radius: 32px;
  width: 540px;
  height: 139px;
  padding: 30px;
  margin-top: 50px;
}
p {
  color: #000034;
  font-weight: 500px;
  font-size: 18px;
  line-height: 27px;
}
p span {
  font-weight: 700;
}
.timeBoxes {
  display: inline-block;
  background: #ffffff;
  border-radius: 12px;
  width: 46px;
  height: 37px;
}
#timer div {
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #000034;
  padding: 6px 3px;
}
#timer span {
  color: #000034;
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  width: 5px;
  height: 27px;
  margin: 0px 5px;
}
@media (max-width: 768px) {
  #banner {
    width: 664px;
  }
}
@media (max-width: 400px) {
  #banner {
    max-width: 343px;
    padding: 16px 0px 0px 8px;
    text-align: center;
    margin: 20px auto 0px 20px;
  }
}
</style>
