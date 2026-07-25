//we use index to make read operation easy, but sometime it makes
//write operations take more time
//so if your compony make profit with any pertfular keyword you can use it

use("ecommerce");

db.products.createIndex({stock : 1});

// db.products.find({quantity : 1});
db.products.getIndexes();

