# Bamazon

Bamazon is an Amazon-like online storefront, run by Node on the Command Line. 

NPM's used: inquirer and mysql

Database created on MySQL Workbench

How it works:
The user/customer is prompted to select an item (numbers 1-10) from the products in the database, then asked how many of that item they would like to purchase.
The app then checks if there is sufficient stock in the database. If there is enough stock, the customer is given the total cost of their transaction, and the database is updated to reflect the remaining quantity.
If there is not sufficiant stock in the database, the customer is prompted to try again, and the app reloads.

There are four screen shots in the image file: 
"Bamazon Screen Shot 1" shows the complete transaction with sufficient stock.
"Bamazon Screen Shot 2" shows the complete transaction without sufficient stock.

"Database Screen Shot Before" shows the database before the transation in Bamazon Screen Shot 1.
"Database Screen Shot After" shows the database after the transation in Bamazon Screen Shot 1 (stock_quantity in item_9 goes down by 3).