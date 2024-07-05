// Variables for product elements
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

// Function to add orders and calculate total
function addOrder(product, price, quantity) {
    if (parseFloat(quantity) > 0) {
        var order = quantity + ' pc/s x ' + price.toFixed(2) + '------' + product + '------ Php ' + (parseFloat(quantity) * price).toFixed(2) + '\n';
        carts.value += order;

        calculateTotal();
    }
}

// Function to calculate total
function calculateTotal() {
    var lines = carts.value.split('\n');
    var totalAmount = 0;

    lines.forEach(function(line) {
        if (line) {
            var parts = line.split('------');
            var pricePart = parts[2].split(' ')[1];
            totalAmount += parseFloat(pricePart);
        }
    });

    total.value = 'Php ' + totalAmount.toFixed(2);
}

// Event listener for cash input to calculate change
cash.addEventListener("keyup", function() {
    var totalAmount = parseFloat(total.value.split(' ')[1]);
    var cashTendered = parseFloat(cash.value);

    if (cashTendered >= totalAmount) {
        var changeAmount = cashTendered - totalAmount;
        change.value = 'Php ' + changeAmount.toFixed(2);
    } else {
        change.value = '';
    }
});
