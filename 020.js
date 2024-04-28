//$pullAll removes all elements in the array that match specified values
//db.getCollection("shoppingCart").find({})
//db.getCollection("shoppingCart").updateMany(
//{indexId:18},
//{
//    $pullAll:{
//        CartItems:[1,2,3]
//    }
//}
//)

db.getCollection("shoppingCart").find({})