<template>
  <div id="banner" :style="boxSize">
    <p :style="styleAttr"><img :src="ssl" alt="sslLogo" /> {{ title }}</p>
    <div id="cards">
      <CreditCards :cardsStyle="cardsStyle" />
    </div>
  </div>
</template>
<script>
import ssl from "../../../assets/icons/ssl.svg";
import CreditCards from "./CreditCards.vue";
export default {
  props: {
    title: {
      type: String,
    },
    styleAttr: {
      type: String,
    },
    cardsStyle: {
      type: String,
    },
    boxSize: {
      type: String,
    },
  },
  components: { CreditCards },
  data() {
    return {
      ssl: ssl,
    };
  },
};
</script>
<style scoped>
#banner {
  display: inline-block;
  width: 449px;
  height: 101px;
  background: #ffffff;
  border: 1px solid #d6d8ea;
  border-radius: 32px;
  margin-left: 61px;
  position: relative;
  margin-top: 40px;
}
p {
  position: relative;
  top: 22px;
  font-style: normal;
  font-weight: 400;
  font-size: 15.5px;
  line-height: 23px;
  color: #4b4e68;
  text-align: center;
}
p img {
  position: relative;
  top: 4px;
  margin: 0px 5px;
  width: 15px;
  height: 18px;
}
#cards {
  display: flex;
  justify-content: center;
}
@media (max-width: 768px) {
  #banner {
    width: 664px;
    margin: 40px 0px 0px 0px;
  }
  p {
    /*  left: 30px; */
  }
  /* #cards {
    display: flex;
    justify-content: center;
  } */
}
@media (max-width: 400px) {
  #banner {
    width: 343px;
    height: 118px;
    margin: 30px 0px 0px 20px;
    padding: 0px 10px 0px 10px;
    text-align: center;
  }
  p {
    left: 0px;
  }
}
</style>
