var mysql = require("mysql");
var inquirer = require("inquirer");

// create the connection information for the sql database
var connection = mysql.createConnection({
    host: "localhost",

    // Your port; if not 3306
    port: 3306,

    // Your username
    user: "root",

    // Your password
    password: "root",
    database: "bamazon_db"
});

// connect to the mysql server and sql database
connection.connect(function (err) {
    if (err) throw err;
    customerChoice(); 
});

//   query the database for all items being sold
function customerChoice() {
    connection.query("SELECT item_id, product_name, price FROM products", function (err, results) {
        if (err) throw err;

        console.log(results);

        // ask customer which item they would like to buy:
        inquirer
            .prompt([
                {
                    name: "item_id",
                    type: "input",
                    message: "Which item (1-10) would you like to buy?",
                    choices: function () {
                        var choiceArray = [];
                        for (var i = 0; i < results.length; i++) {
                            choiceArray.push(results[i].item_id);
                        }
                        console.log(choiceArray);
                    },
                }
            ])

            .then(function (val) {
                let chosenItemId = val.item_id;
                global_var = chosenItemId
                console.log("You picked item number: ", chosenItemId);

                promptQty(chosenItemId);
            })

        // ask customer how many items they would like:
        function promptQty(id) {
            inquirer
                .prompt([
                    {
                        name: "item_qty",
                        type: "input",
                        message: "How many would you like?",
                    },
                ])
                .then(function (val) {
                    let chosenItemQty = val.item_qty;
                    console.log("You have requested ", chosenItemQty, "item(s)");
                    checkStock(id, chosenItemQty);
                })
        }

        // check the stock_quantity to see how many of those items are available, and how many are left after sale.
        function checkStock(id, qty) {
            connection.query("SELECT stock_quantity FROM products WHERE item_id =" + id, function (err, res) {
                if (err) throw err;
                var desiredAmount = parseInt(qty);
                var availableAmount = res[0].stock_quantity;
                let updatedAmount = availableAmount - desiredAmount;
                console.log("There are: " + availableAmount + " in stock at this time.");
                console.log("This is the updated stock_quantity: " + updatedAmount);

                // updating the database, it enough items are in stock.
                if (desiredAmount <= availableAmount) {
                    console.log("Your item is in stock. We are now filling your order.");
                    connection.query(
                        "UPDATE products SET ? WHERE ?",
                        [
                            {
                                stock_quantity: updatedAmount
                            },
                            {
                                item_id: global_var
                            }

                        ],

                        function (error) {
                            if (error) throw err;

                        }

                    );
                    // total cost for customer, end connection.
                    connection.query("SELECT price FROM products WHERE item_id =" + global_var, function (err, res) {
                        if (err) throw err;
                        let itemPrice = res[0].price
                        console.log("Your total cost is: $" + (itemPrice * desiredAmount));
                    });
                    connection.end();
                }
                // if not enough stock available, restart app.
                else {
                    console.log("Insufficient stock quantity, please try again.");
                    customerChoice();
                }
            })
        };
    })
}
