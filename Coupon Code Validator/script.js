const originalPrice = 1000;
const finalPriceEl = document.getElementById("finalPrice");
const message = document.getElementById("message");

const coupons = {
  SAVE10: 10,
  SAVE20: 20,
  DISCOUNT50: 50
};

function applyCoupon() {
alert("Try these coupons: SAVE10, SAVE20, DISCOUNT50");
  const input = document.getElementById("couponInput").value.trim().toUpperCase();

  if (!input) {
    message.style.color = "red";
    message.innerText = "Please enter a coupon code";
    return;
  }

  if (coupons[input]) {
    const discount = coupons[input];
    const discountedPrice = originalPrice - (originalPrice * discount) / 100;

    finalPriceEl.innerText = discountedPrice;
    message.style.color = "green";
    message.innerText = `Coupon applied! You saved ${discount}%`;
  } else {
    finalPriceEl.innerText = originalPrice;
    message.style.color = "red";
    message.innerText = "Invalid coupon code";
  }
}
