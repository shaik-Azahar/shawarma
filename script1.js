function placeOrder() {
    let shawarmaType = document.getElementById("shawarmaType").value;
    let toppings = [];

    let toppingElements = document.querySelectorAll(".toppings-container input[type='checkbox']");
    toppingElements.forEach(topping => {
        if (topping.checked) {
            toppings.push(topping.value);
        }
    });

    let summary = `You ordered a ${shawarmaType} with ${toppings.length > 0 ? toppings.join(", ") : "no extra toppings"}.`;
    document.getElementById("orderSummary").innerText = summary;
}
