use("ecommerce");
db.products.find();

db.products.find({"name" : "Wireless Mouse"});
db.products.find({"category" : "Electronics"});

//comparison operator
db.products.find({"price" : {$gt : 1000}});
db.products.find({"price" : {$lt : 1000}});

//insted of writing them saperately we can write
db.products.find({"price" : {$gte : 1000 , $lte : 5000}});

//'and' and 'or' operation
//AND operation
db.products.find({"price" : {$gt : 1000} , "category" : "Electronics"});
db.products.find({$or : [{"price" : 1000} , {stock : {$lt : 6000}}]});

//to select specific field
//to find specific things and also we dont want to see id
db.products.find({},{name: 1, price: 1, _id :0});

//sorting and limiting
db.products.find({},{name: 1, price: 1, _id :0}).sort({price : -1}).skip(1).limit(2);
db.products.find().sort({price : -1}).skip(2).limit(3);