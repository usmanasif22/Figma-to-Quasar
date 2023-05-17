<template>
  <div id="paymentMethod" class="mg-top-50">
    <div class="title">Payment Method</div>
    <p>All transaction are secured and encryted</p>

    <div id="paymentDetails">
      <div id="cardNo" class="posRelative">
        <img :src="cardIcon" alt="" class="icon" />
        <q-item-label class="cardNoLabel">Card Number</q-item-label>
        <q-input
          borderless
          :class="cardClassName"
          placeholder="2587 9860 2354"
          v-model="cardNo"
          :rules="[creditCardRule]"
        />
      </div>

      <div id="name" class="posRelative">
        <img :src="userIcon" alt="" class="icon" />
        <q-input borderless class="roundedInput" placeholder="Name on Card" />
      </div>

      <div id="expiryDate" style="display: inline-block; margin-right: 16px">
        <q-input borderless class="smallroundedInput" placeholder="MM/YY" />
      </div>

      <div id="cvv" style="display: inline-block">
        <q-input borderless class="smallroundedInput" placeholder="CVV" />
      </div>
    </div>
    <div id="terms">
      <input type="checkbox" id="termsCheckbox" />

      <div id="termsText">
        By checking this box, I acknowledge that I have read and agree to the
        <span> Terms of Service</span>, and
        <span>Monthly Billing Terms</span> of this website and want to opt-in
        for the monthly billed Dream Collection Club®
      </div>
    </div>
  </div>
</template>
<script>
import card from "../../../assets/icons/card.svg";
import user from "../../../assets/icons/user.svg";
export default {
  data() {
    return {
      cardIcon: card,
      userIcon: user,
      cardNo: "",
      cardClassName: "roundedInput",
    };
  },
  computed: {
    creditCardRule() {
      return (val) => {
        const regex = /^[0-9]{13,16}$/;
        if (!regex.test(val)) {
          this.cardClassName = "invalid-input";
          return "Enter valid card number";
        } else {
          this.cardClassName = "roundedInput";
          return true;
        }
      };
    },
  },
};
</script>
<style scoped>
p {
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 21px;
  color: #84849a;
}
#cardNo {
  position: relative;
  margin-top: 30px;
}
.smallroundedInput {
  width: 262px;
  padding: 0px 27px;
  border: 1.5px solid #d6d8ee;
  border-radius: 100px;
  padding: 0px 50px;
  margin-bottom: 20px;
}
.roundedInput {
  width: 540px;
  border: 1.5px solid #d6d8ee;
  border-radius: 100px;
  padding: 0px 50px;
  margin-bottom: 20px;
}
.invalid-input {
  width: 540px;
  border: 1.5px solid red;
  border-radius: 100px;
  padding: 0px 50px;
  margin-bottom: 20px;
}
.cardNoLabel {
  text-align: center;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 18px;
  color: #84849a;
  position: absolute;
  left: 30px;
  bottom: 50px;
  width: 90px;
  background: #ffffff;
}
#terms {
  display: inline-block;
  position: relative;
}
#termsText {
  width: 508px;
  display: inline-block;
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 24px;
  color: #4b4e68;
  margin-left: 28px;
}
#termsText span {
  color: #000034;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 24px;
}
#termsCheckbox {
  margin-right: 12px;
  position: absolute;
  top: 2px;
  cursor: pointer;
  width: 20px;
  height: 20px;
}
@media (max-width: 768px) {
  .roundedInput {
    width: 660px;
  }
  .invalid-input {
    width: 660px;
  }
  .smallroundedInput {
    width: 322px;
  }
}
@media (max-width: 400px) {
  p {
    margin-left: 20px;
  }
  .roundedInput {
    width: 343px;
    margin-left: 20px;
  }

  .smallroundedInput {
    width: 343px;
    margin-left: 20px;
  }
  .icon {
    top: 17px;
    left: 35px;
  }
  .invalid-input {
    width: 343px;
    margin-left: 20px;
  }
  #terms {
    margin-left: 20px;
  }
  #termsText {
    width: 300px;
  }
}
</style>
