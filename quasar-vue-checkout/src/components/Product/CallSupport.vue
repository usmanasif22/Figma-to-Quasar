<template>
  <div id="supportBanner">
    <img :src="supportIcon" alt="" />
    <div id="text">
      24/7
      <p>Support</p>
    </div>
  </div>
</template>
<script>
import supportIcon from "../../assets/icons/callSupport.svg";
export default {
  data() {
    return {
      supportIcon: supportIcon,
    };
  },
};
</script>
<style scoped>
#supportBanner {
  width: 320px;
  height: 140px;
  background: #ffffff;
  border: 1px solid #daddf5;
  box-shadow: 0px 10px 30px rgba(22, 8, 49, 0.05);
  border-radius: 16px;
  display: inline-block;
  position: relative;
  left: 15px;
}
img {
  position: absolute;
  top: 35px;
  left: 56px;
}
#text {
  position: absolute;
  left: 153px;
  top: 42px;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  color: #000034;
}
#text p {
  font-weight: 400;
  color: #4b4e68;
}
@media (max-width: 768px) {
  #supportBanner {
    width: 250px;
    left: 10px;
  }
}
@media (max-width: 400px) {
  #supportBanner {
    display: none;
  }
}
</style>
