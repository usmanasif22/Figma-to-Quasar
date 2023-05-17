<template>
  <div id="shippingAddress" class="mg-top-50">
    <div class="title">{{ title || "" }}</div>
    <form action="">
      <div id="country">
        <img :src="locationIcon" alt="" id="locationIcon" />
        <img :src="dropdownIcon" alt="" id="dropdownIcon" />
        <select name="country" id="countrySelect" class="roundedInput">
          <option value="" selected disabled>Country</option>
          <option
            v-for="(country, index) in countries"
            :value="country"
            :key="index"
          >
            {{ country }}
          </option>
        </select>
      </div>

      <div id="firstName" style="display: inline-block" class="posRelative">
        <q-item-label class="nameLabel">First Name</q-item-label>
        <q-input
          borderless
          ref="fnameRef"
          v-model="firstNameInput"
          lazy-rules
          :rules="[fnameValidation]"
          :class="fNameClass"
          placeholder="Oleo"
          style="padding: 0px 55px"
        />
        <img :src="userIcon" alt="" class="icon" />
      </div>
      <div id="lastName" class="posRelative">
        <q-item-label class="nameLabel">Last Name</q-item-label>
        <q-input
          borderless
          ref="lnameRef"
          v-model="lastNameInput"
          lazy-rules
          :rules="[lnameValidation]"
          :class="lNameClass"
          placeholder="Bone"
          style="padding: 0px 55px"
        />
        <img :src="userIcon" alt="" class="icon" />
      </div>

      <div id="address" class="mg-top-20 posRelative">
        <img :src="addressIcon" alt="" class="icon" />
        <q-input
          borderless
          class="roundedInput"
          placeholder="Address"
          v-model="addressInput"
        />
      </div>
      <div
        id="city"
        class="mg-top-20"
        style="margin-right: 16px; display: inline-block"
      >
        <q-input
          borderless
          class="smallroundedInput"
          placeholder="City"
          v-model="cityInput"
        />
      </div>
      <div id="postalcode" class="mg-top-20" style="display: inline-block">
        <q-input
          borderless
          class="smallroundedInput"
          placeholder="Postal Code"
          v-model="postalCodeInput"
        />
      </div>
    </form>
  </div>
</template>

<script>
import location from "../../../assets/icons/location.svg";
import user from "../../../assets/icons/user.svg";
import address from "../../../assets/icons/address.svg";
import dropdownIcon from "../../../assets/icons/selectDropdown.svg";
import { countries } from "../../../countries.js";
export default {
  props: {
    title: {
      type: String,
    },
  },
  data() {
    return {
      fNameClass: "smallroundedInput",
      lNameClass: "smallroundedInput",
      addressIcon: address,
      locationIcon: location,
      dropdownIcon: dropdownIcon,
      userIcon: user,
      countries: countries,
      firstNameInput: "",
      lastNameInput: "",
      addressInput: "",
      cityInput: "",
      postalCodeInput: "",
    };
  },
  computed: {
    fnameValidation() {
      return (val) => {
        if (val && val.length > 0) {
          this.fNameClass = "smallroundedInput";
          return true;
        } else {
          this.fNameClass = "invalid-input";
          return "Enter a first name";
        }
      };
    },
    lnameValidation() {
      return (val) => {
        if (val && val.length > 0) {
          this.lNameClass = "smallroundedInput";
          return true;
        } else {
          this.lNameClass = "invalid-input";
          return "Enter a last name";
        }
      };
    },
  },
};
</script>

<style scoped>
#countrySelect {
  display: block;
  cursor: pointer;
  -webkit-appearance: none;
}
#dropdownIcon {
  position: absolute;
  right: 20px;
  top: 23px;
}
form {
  margin-top: 20px;
  position: relative;
}
.mg-top-20 {
  margin-top: 20px;
}
.smallroundedInput {
  height: 56px;
  width: 262px;
  padding: 0px 27px;
  border: 1.5px solid #d6d8ee;
  border-radius: 100px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #84849a;
  background: #ffffff;
  outline: none;
  cursor: text;
}
.roundedInput {
  width: 540px;
  height: 56px;
  padding: 0px 50px;
  border: 1.5px solid #d6d8ee;
  border-radius: 100px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #84849a;
  background: #ffffff;
  outline: none;
  cursor: text;
}
.invalid-input {
  width: 262px;
  height: 56px;
  padding: 0px 50px;
  border: 1.5px solid red;
  border-radius: 100px;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  color: #84849a;
  background: #ffffff;
  outline: none;
  cursor: text;
}
#firstName {
  display: inline-block;
  margin-top: 29px;
  margin-right: 16px;
  position: relative;
}
#lastName {
  display: inline-block;
  margin-top: 29px;
  position: relative;
}
/* .roundedInput input::placeholder {
  font-style: normal;
  font-weight: 900;
  font-size: 30px;
  line-height: 24px;
  color: #84849a;
} */
.nameLabel {
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #84849a;
  width: 70px;
  background: #ffffff;
  text-align: center;
  position: absolute;
  left: 30px;
  bottom: 45px;
}
#locationIcon {
  position: absolute;
  left: 17px;
  top: 17px;
}
@media (max-width: 768px) {
  .roundedInput {
    width: 660px;
  }
  .smallroundedInput {
    height: 56px;
    width: 321px;
    padding: 0px 27px;
    border: 1.5px solid #d6d8ee;
    border-radius: 100px;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #84849a;
    background: #ffffff;
    outline: none;
  }
  .invalid-input {
    width: 321px;
  }
  #countrySelect {
  }
}

@media (max-width: 400px) {
  .roundedInput {
    width: 343px;
    margin-left: 20px;
  }

  .smallroundedInput {
    width: 343px;
    margin-left: 20px;
  }
  #locationIcon {
    left: 35px;
  }
  .icon {
    top: 17px;
    left: 35px;
  }
  .invalid-input {
    width: 343px;
    margin-left: 20px;
  }
}
</style>
