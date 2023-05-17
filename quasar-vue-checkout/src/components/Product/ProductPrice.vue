<template>
  <div id="priceBox">
    <div id="price">Price: <span>$50</span></div>
    <div id="discount">-80%</div>
    <div id="quantityBox">
      <p>Quantity:</p>
      <div id="minus"><img :src="minus" alt="" id="imgminus" /></div>
      <span>1</span>
      <div id="plus"><img :src="plus" alt="" id="imgplus" /></div>
    </div>
  </div>
</template>
<script>
import plus from "../../assets/icons/plus.svg";
import minus from "../../assets/icons/minus.svg";
export default {
  data() {
    return {
      plus: plus,
      minus: minus,
    };
  },
};
</script>
<style scoped>
#priceBox {
  width: 790px;
  height: 225px;
  background: #ffffff;
  border: 1px solid #daddf5;
  box-shadow: 0px 10px 30px rgba(22, 8, 49, 0.05);
  border-radius: 16px;
  margin: 0px auto;
  position: relative;
  display: flex;
  text-align: center;
}
#price {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #000034;
  position: relative;
  top: 45px;
  left: 280px;
}
#price span {
  margin: 0px 12px 0px 10px;
  font-weight: 600;
  font-size: 30px;
  line-height: 40px;
}
#discount {
  width: 84px;
  height: 36px;
  background: #eff0f5;
  border-radius: 8px;
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #000034;
  position: relative;
  padding: 5px 0px;
  top: 48px;
  left: 280px;
}
#quantityBox {
  width: 540px;
  height: 80px;
  left: 690px;
  background: rgba(239, 240, 245, 0.5);
  border-radius: 16px;
  position: absolute;
  top: 105px;
  left: 125px;
}
#quantityBox p {
  font-style: normal;
  font-weight: 500;
  font-size: 20px;
  line-height: 30px;
  color: #383a4d;
  display: inline-block;
  position: relative;
  top: 25px;
  margin-right: 39px;
}
#minus {
  display: inline-block;
  width: 57px;
  height: 50px;
  background: #ffffff;
  border-radius: 16px;
  font-size: 18px;
  position: relative;
  top: 15px;
}
#imgplus {
  position: relative;
  top: 15px;
}
#imgminus {
  position: relative;
  top: 8px;
}
#plus {
  display: inline-block;
  width: 57px;
  height: 50px;
  background: #ffffff;
  border-radius: 16px;
  color: #000034;
  position: relative;
  top: 15px;
}
#quantityBox span {
  margin: 0px 30px;
  font-weight: 600;
  font-size: 20px;
  line-height: 30px;
  position: relative;
  top: 25px;
}
@media (max-width: 768px) {
  #priceBox {
    width: 664px;
  }
  #quantityBox {
    left: 60px;
  }
  #price {
    left: 240px;
  }
  #discount {
    left: 250px;
  }
}
@media (max-width: 400px) {
  #priceBox {
    margin-top: 60px;
    width: 334px;
  }
  #quantityBox {
    left: 10px;
    width: 310px;
  }
  #price {
    left: 80px;
  }
  #discount {
    left: 90px;
  }
  #price span {
    margin: 0px 6px 0px 6px;
  }
  #quantityBox p {
    margin-right: 10px;
  }
}
</style>
