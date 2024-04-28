//db.getCollection("shoppingCart").update({},{
//    $set:{
//        city:"Bengaluru"
//    }
//},{multi:true})

// WriteResult
//{
//    "acknowledged" : true,
//    "insertedId" : null,
//    "matchedCount" : 5.0,
//    "modifiedCount" : 5.0,
//    "upsertedCount" : 0.0
//}

db.getCollection("shoppingCart").find({})