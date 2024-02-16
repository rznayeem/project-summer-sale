const products = document.querySelectorAll('.card');

for (product of products) {
  const card = product;
  card.addEventListener('click', function () {
    console.log('clicked', card);
    const title = card.querySelector('h2').innerText;
    setProductById('product-list', title);
    const price = card.querySelector('span').innerText;
    setPriceById('total-price', price);
  });
}
function applyCoupon() {
  const totalPrice = document.getElementById('total-price').innerText;
  const totalPriceNum = parseFloat(totalPrice);
  // console.log(typeof totalPriceNum);
  const inputCoupon = document.getElementById('apply-coupon').value;
  console.log(inputCoupon);
  if (totalPriceNum >= 200 && inputCoupon === 'SELL200') {
    // console.log(totalPriceNum);
    const discountPrice = totalPriceNum * (20 / 100);
    const totalDiscountPrice = parseFloat(discountPrice);
    setDiscountPriceById('discount-price', totalDiscountPrice);
    const finalPrice = totalPriceNum - totalDiscountPrice;
    setDiscountPriceById('total', finalPrice);
  }
}
