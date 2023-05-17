<template>
  <div id="navbar">
    <div id="logo">
      <img :src="logo" alt="siteLogo" />
      <div id="brand">Rebillion.<span>io</span></div>
    </div>
  </div>
</template>
<script>
import logo from "../../assets/logo.svg";
export default {
  data() {
    return {
      logo: logo,
    };
  },
};
</script>
<style scoped>
#navbar {
  width: 100%;
  height: 80px;
  background: #050824;
}
#logo {
  position: absolute;
  width: 171px;
  height: 36px;
  left: 110px;
  top: 22px;
  cursor: pointer;
}
#brand {
  color: #ffffff;
  font-size: 18px;
  display: inline-block;
  font-weight: 600;
  position: relative;
  bottom: 7px;
  left: 5px;
}
#brand span {
  color: #ffffff;
  font-weight: 300;
}
@media (max-width: 400px) {
  #navbar {
    width: 390px;
    height: 80px;
    background: #050824;
  }
}
</style>
