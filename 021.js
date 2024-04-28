// positional operator 
////db.getCollection("shoppingCart").find({})
//db.getCollection("shoppingCart").updateOne(
//{indexId:5},
//{
//    $unset: {cart:1}
//}
//)


//db.getCollection("shoppingCart").updateOne(
//{indexId:5},
//{
//    $push: {cart:{$each:["it1","it2","it3"]}}
//}
//)

//db.getCollection("shoppingCart").find({})

//db.getCollection("shoppingCart").updateOne(
//{indexId:5, cart: "it1"},
//{
//    $set:{
//        "cart.$":"updatedItem1"
//    }
//}
//)


//db.getCollection("shoppingCart").updateOne(
//{indexId:5, cart: "it3"},
//{
//    $unset:{
//        "cart.$":1 // set to null
//    }
//}
//)

//db.getCollection("shoppingCart").updateOne(
//{indexId:5},
//{
//    $pull:{
//        cart:null // removing null array element
//    }
//}
//)
db.getCollection("shoppingCart").find({indexId:5})