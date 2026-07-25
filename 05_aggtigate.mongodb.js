use("ecommerce");

//aggrigate stages
$match
db.products.aggregate([
  {$match :{category : "Electronics"}},
])


// $project 
//use to print desired information
db.products.aggregate([
  {
    $match : {category : "Electronics"}
  },
  {
    $project : {_id : 0, name : 1, price : 1}
  }
])

//$group
//by this we can show category in id insted of _id and perform arthmatic calculations
db.products.aggregate([
  {
    $group : { _id : "$category", 
      totalSales : {$sum : {$multiply : ["$price", "$stock"]}}
    }
  }
])