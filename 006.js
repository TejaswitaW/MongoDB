//$unset operator
//db.shoppingCart.update({index:1},
//{
//    $set:{
//        cartId: NumberInt(325),
//        customer: {
//            name: "Ram",
//            email: "ram@gmail.com",
//            age: NumberInt(33),
//        },
//        cart: []
//    }
//})


//db.shoppingCart.find({index:1})

//db.shoppingCart.update({index:1},
//{
//    $unset:{
//        cartId: 1,
//        "customer.age": 1,
//    }
//})

db.shoppingCart.find({index:1})

