//db.createCollection("shoppingCart")

//db.shoppingCart.insertMany(
//[
//    {"index": NumberInt(1)},
//    {"index": NumberInt(2)},
//    {"index": NumberInt(3)},
//    {"index": NumberInt(4)},
//    {"index": NumberInt(5)}
//]
//)

//show collections

//db.shoppingCart.update({index:3},
//{
//    $set:{
//        cartId: NumberInt(325),
//        customer: {
//            name: "Kush",
//            email: "Kush@gmail.com",
//            age: NumberInt(28),
//        },
//        cart: []
//    }
//})

db.shoppingCart.find({index:3})