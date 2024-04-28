//db.getCollection("shoppingCart").updateMany({index:{$exists:true}},{
//    $set:{
//        cart:[]
//    }
//})
db.getCollection("shoppingCart").find()