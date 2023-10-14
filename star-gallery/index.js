const commodityPrices = document.querySelectorAll('.imageblock__price');
const price = Number((commodityPrices[0].innerText).slice(0, -4));
const total = document.querySelector('.totalprice');
const quantity = commodityPrices.length;
const button = document.querySelector('.button');

function calculateTotalPrice(quantity = 2, price = 150000) {
    const totalPrice = quantity * price;
    return totalPrice.toLocaleString('ru-RU');
}
const totalPrice = calculateTotalPrice(quantity, price);
console.log(totalPrice);
button.addEventListener('click', () => {
    const message = `purchase price: ${totalPrice} RUB`;
    total.textContent = (message);
});