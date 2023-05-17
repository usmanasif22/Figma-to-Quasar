<template>
  <div id="cartItems">
    <div id="item" v-for="(item, key) in shoes" :key="key">
      <div id="productCount">{{ item.count }}</div>
      <img :src="item.img" alt="itemimage" />
      <p style="margin-left: 20px">{{ item.name }}</p>
      <p id="price">{{ item.price }}</p>
    </div>
    <hr />
  </div>
</template>
<script>
import redShoe from "../../../assets/redshoe.png";
import pinkShoe from "../../../assets/pinkshoe.png";
import greenShoe from "../../../assets/greenshoe.png";
import circle from "../../../assets/icons/itemsCircle.svg";
export default {
  data() {
    return {
      shoes: [
        { name: "Nike sneakers", price: "$120.90", img: redShoe, count: 1 },
        { name: "Nike sneakers", price: "$120.90", img: pinkShoe, count: 2 },
        { name: "Nike sneakers", price: "$120.90", img: greenShoe, count: 1 },
      ],
      circle: circle,
    };
  },
};
</script>
<style scoped>
#cartItems {
  margin-top: 66.13px;
  margin-left: 61px;
  position: relative;
}
#item {
  position: relative;
  width: 550px;
}
#price {
  margin-left: 191px;
}
#productCount {
  display: flex;
  position: absolute;
  left: 60px;
  bottom: 79px;
  color: #ffffff;
  background: #4b4e68;
  height: 18px;
  width: 18px;
  text-align: center;
  border-radius: 50px;
  padding: 0px 2px 2px 5px;
}
#item p {
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  font-size: 16px;
  line-height: 26px;
  color: #000034;
  position: relative;
  bottom: 30px;
}
hr {
  margin: 5px 0px;
  width: 449px;
}
@media (max-width: 768px) {
  #cartItems {
    margin-top: 25px;
  }
}
@media (max-width: 400px) {
  #cartItems {
    max-width: 343px;
    margin: 20px 0px;
  }
  #item {
    max-width: 343px;
  }
  #price {
    margin-left: 55px;
  }
  hr {
    width: 300px;
  }
}
</style>
