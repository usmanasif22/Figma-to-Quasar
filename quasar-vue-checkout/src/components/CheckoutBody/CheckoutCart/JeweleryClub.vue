<template>
  <div id="clubBanner">
    <h6>The ultimate jewellery club</h6>
    <p>
      Ornare rhoncus nunc ut felis. Faucibus dolor at ultrices tincidunt.
      Pulvinar sed justo et viverra pellentesque.
    </p>
    <div id="perks">
      <p><img :src="tick" alt="" />Extra 10$ off!</p>
      <p><img :src="tick" alt="" />Free shipping on marked club items!</p>
      <p><img :src="tick" alt="" />Free returns on marked club items!</p>
    </div>
  </div>
</template>
<script>
import tick from "../../../assets/icons/tick.svg";
export default {
  props: {},
  data() {
    return {
      tick: tick,
    };
  },
};
</script>
<style scoped>
#clubBanner {
  margin: 15px 0px 0px 61px;
  width: 449px;
  height: 245px;
  background: #ffffff;
  border: 1px solid #d6d8ea;
  border-radius: 32px;
  padding: 30px;
}
h6 {
  margin: 0;
  padding: 0;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 27px;
  color: #000034;
}
p {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #4b4e68;
}
p img {
  margin-right: 10px;
  position: relative;
  top: 2px;
}
@media (max-width: 400px) {
  #clubBanner {
    width: 310px;
    height: 260px;
    margin: 15px 0px 0px 0px;
    padding: 15px 0px 0px 10px;
    font-size: 14px;
  }
}
</style>
