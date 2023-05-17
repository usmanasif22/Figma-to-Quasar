<template>
  <div id="userInfo" class="mg-top-50">
    <div class="title">Contact Information</div>
    <div id="email">
      <q-item-label class="emailLabel">Email</q-item-label>
      <q-input
        v-model="emailInput"
        borderless
        :class="className"
        placeholder="oleo_bone@gm.com"
        :rules="[emailValidation]"
      />
      <div id="icon"><img :src="envelope" alt="emailIcon" /></div>
    </div>
    <PhoneNumberInput
      v-model="phone"
      class="phoneroundedInput"
      style="padding: 3px 5px"
      color="#ffffff"
      no-example="false"
      valid-color="#ffffff"
      error-color="#ffffff"
      show-code-on-list="true"
    />
  </div>
</template>
<script>
import envelope from "../../../assets/icons/envelope.svg";
import PhoneNumberInput from "vue-phone-number-input";
import "vue-phone-number-input/dist/vue-phone-number-input.css";
export default {
  components: {
    PhoneNumberInput,
  },
  data() {
    return {
      envelope: envelope,
      emailInput: "",
      phone: "",
      className: "roundedInput",
      countries: ["US", "GB", "CA", "AU"],
    };
  },
  computed: {
    emailValidation() {
      return (val) => {
        if (/(.+)@(.+){2,}\.(.+){2,}/.test(val)) {
          this.className = "roundedInput";
          return true;
        } else {
          this.className = "invalid-input";
          return "Enter a valid email address";
        }
      };
    },
  },
};
</script>
<style scoped>
#email {
  position: relative;
  margin-top: 30px;
}
.invalid-input {
  width: 540px;
  border: 1.5px solid red;
  border-radius: 100px;
  padding: 0px 43px;
  margin-bottom: 20px;
}
.roundedInput {
  width: 540px;
  border: 1.5px solid #d6d8ee;
  border-radius: 100px;
  padding: 0px 43px;
  margin-bottom: 20px;
}
.phoneroundedInput {
  /* display: none; */
  width: 540px;
  border: 1.5px solid #d6d8ee;
  border-radius: 100px;
  padding: 0px 43px;
  margin-bottom: 20px;
}
.emailLabel {
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #84849a;
  position: absolute;
  left: 30px;
  bottom: 50px;
  width: 50px;
  background: #ffffff;
}
#icon {
  position: relative;
}
img {
  color: #84849a;
  position: absolute;
  left: 17px;
  bottom: 40px;
}
@media (max-width: 768px) {
  .roundedInput {
    width: 664px;
  }
  .phoneroundedInput {
    display: flex;
    width: 664px;
  }
  .invalid-input {
    width: 664px;
  }
}
@media (max-width: 400px) {
  .roundedInput {
    width: 343px;
    margin-left: 20px;
  }
  .phoneroundedInput {
    display: flex;
    width: 343px;
    margin-left: 20px;
  }
  .invalid-input {
    width: 343px;
    margin-left: 20px;
  }
  #icon {
    left: 20px;
  }
  #userInfo {
    margin-top: 20px;
  }
}
</style>
