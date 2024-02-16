function setProductById(elementId, text) {
  const element = document.getElementById(elementId);
  const li = document.createElement('li');
  li.innerText = text;
  element.appendChild(li);
}
function setPriceById(elementId, text) {
  const element = document.getElementById(elementId);
  const productPrice = element.innerText;
  element.innerText = parseFloat(productPrice) + parseFloat(text);
}
function setDiscountPriceById(elementId, text) {
  const element = document.getElementById(elementId);
  element.innerText = text.toFixed(2);
}
