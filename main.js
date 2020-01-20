const restaurant = {
    name: "Bob's Burgers",
    placeOrder: function (meal) {
        this.orders.push(meal);
    },
    orders: [],
    getOrder: function (orders) {
        return this.orders;
    }

}

const chickenComboMeal = {
    sandwichType: "chicken",
    fries: true,
    drinkSize: "Large"

}

const chickenComboMeal2 = {
    sandwichType: "chicken",
    fries: false,
    drinkSize: "Large"

}

// Place an order
restaurant.placeOrder(chickenComboMeal);
restaurant.placeOrder(chickenComboMeal2);

// Invoke the function to return the list of all orders
 const allOrders = restaurant.getOrder();
 console.log(allOrders);


// Output all orders to the console using console.table()
console.table(restaurant.orders);