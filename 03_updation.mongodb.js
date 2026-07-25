use("ecommerce");

//set value
// db.products.updateOne(
//   {name : "Wireless Mouse"},
//   {$set : {price : 899}}
// );

//adding another key value pair
// db.products.updateOne(
//   {name : "Wireless Mouse"},
//   {$set : {"message" : "hello"}}
// );

//increase  value
// db.products.updateMany(
//   {category : "Electronics"},
//   {$inc : {stock : 11}}  //will increase all stock of electronics by 11
// );

//add or push another value or arguent
// db.products.updateOne(
//   {name : "Wireless Mouse"},
//   {$push : {tag : "Mouse"}}
// );