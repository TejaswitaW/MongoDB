//positional operator $ with $elemMatch



//db.getCollection("shoppingCart").updateOne(
//{CartItems:{
//    $elemMatch : {
//        title:"TV",price:340
//    }
//}},
//{
//    $set:{
//        "CartItems.$.quantity":100,
//    }
//    
//}
//)



db.getCollection("shoppingCart").find({indexId:2})