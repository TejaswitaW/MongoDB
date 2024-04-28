//positional operator $ in nested documents
//db.getCollection("shoppingCart").updateOne({
//    indexId:2
//},
//{
//    $set:{
//        cartId:456,
//    }
//})
//db.getCollection("shoppingCart").find({indexId:2})

//db.getCollection("shoppingCart").updateOne(
//{cartId:456},
//
//{
//    $push: {
//        CartItems: {
//            $each:[
//            {
//                title: "TV",
//                price:340,
//                quantity:2
//            },
//            {
//                title: "Phone",
//                price:150,
//                quantity:1
//            }
//            ]
//        }
//        
//    }
//}
//)

//db.getCollection("shoppingCart").updateOne(
//{"CartItems.title":"Phone"},
//{
//    $set:{
//        "CartItems.$.quantity":10,
//    }
//    
//}
//)



db.getCollection("shoppingCart").find({indexId:2})