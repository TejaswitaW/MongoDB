// addToSet
//db.getCollection("shoppingCart").update(
//{indexId:5},
//{
//    $addToSet:{
//        interviewScore: {
//            $each:
//            [
//                4,18,8
//            ]
//        }
//    }
//}
//)

db.getCollection("shoppingCart").find({})