// combining multiple update operators
//db.getCollection("shoppingCart").find({})
//db.getCollection("shoppingCart").updateMany(
//{},
//{
//    $set:{"origin.country": "India"},
//    $unset:{processed:1}
//}
//)
db.getCollection("shoppingCart").find({})