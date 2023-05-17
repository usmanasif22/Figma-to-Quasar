<template>
  <div id="button" :style="buttonStyle">
    <img :src="backIcon" alt="" v-if="back == 'show'" />
    {{ type }}
    <img :src="submitIcon" alt="" id="submitIcon" v-if="forward == 'show'" />
  </div>
</template>
<script>
import foward from "../../../assets/icons/submitArrow.svg";
import back from "../../../assets/icons/back.svg";
export default {
  props: {
    type: {
      type: String,
      required: true,
    },
    buttonStyle: {
      type: String,
    },
    back: {
      type: String,
    },
    forward: {
      type: String,
    },
  },
  data() {
    return {
      submitIcon: foward,
      backIcon: back,
    };
  },
};
</script>
<style scoped>
#button {
  margin-top: 50px;
  padding: 16px 40px;
  gap: 10px;
  width: 257px;
  height: 56px;
  background: #050824;
  border-radius: 100px;
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #ffffff;
  cursor: pointer;
  text-align: center;
}
#submitIcon {
  position: relative;
  top: 2px;
  left: 10px;
}
@media (max-width: 768px) {
  #button {
    width: 664px;
  }
}
@media (max-width: 400px) {
  #button {
    width: 343px;
  }
}
</style>
