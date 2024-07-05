var product1 = document.getElementById("product1");
var qty1 = document.getElementById("qty1");
var price1 = document.getElementById("price1");

var product2 = document.getElementById("product2");
var qty2 = document.getElementById("qty2");
var price2 = document.getElementById("price2");

var carts = document.getElementById("carts");
var total = document.getElementById("total");
var cash = document.getElementById("cash");
var change = document.getElementById("change");

function addOrder() {
    carts.textContent = "";
    let totalAmount = 0;
    if (parseFloat(qty1.value) > 0) {
        var order = qty1.value.toString() + ' pc/s x ' + price1.textContent + '------' + product1.textContent + '------ Php ' + (parseFloat(qty1.value) * parseFloat(price1.textContent)).toFixed(2) + '\n';
        carts.textContent += order;
        totalAmount += parseFloat(qty1.value) * parseFloat(price1.textContent);
    }
    if (parseFloat(qty2.value) > 0) {
        var order = qty2.value.toString() + ' pc/s x ' + price2.textContent + '------' + product2.textContent + '------ Php ' + (parseFloat(qty2.value) * parseFloat(price2.textContent)).toFixed(2) + '\n';
        carts.textContent += order;
        totalAmount += parseFloat(qty2.value) * parseFloat(price2.textContent);
    }
    total.value = totalAmount.toFixed(2);
    calculateChange();
}

function calculateChange() {
    const totalAmount = parseFloat(total.value) || 0;
    const cashTendered = parseFloat(cash.value) || 0;
    const changeAmount = cashTendered - totalAmount;
    change.value = changeAmount >= 0 ? changeAmount.toFixed(2) : '0.00';
}

qty1.addEventListener("keyup", addOrder);
qty2.addEventListener("keyup", addOrder);
cash.addEventListener("keyup", calculateChange);