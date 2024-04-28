//db.getCollection("first").find({})
//db.getCollection("first").remove({})

//db.getCollection("first").insertOne({
//  "name": "Mike",
//  "friends": [
//    {
//      "name": "Lora",
//      "age": NumberInt(23),
//      "registered": true
//    },
//    {
//      "name": "Bob",
//      "age": NumberInt(25),
//      "registered": false
//    },
//    {
//      "name": "Steve",
//      "age": NumberInt(27)
//    }
//  ]
//})

//db.getCollection('first').find()


//db.getCollection('first').find({"friends.name":"Lora"})


//db.getCollection("first").find({friends:{"name":"Steve","age":27}})


//db.getCollection("first").find({friends:{$elemMatch: {"registered":false,"name":"Bob"}}})

//db.getCollection("first").find({friends:{$elemMatch:{"age":23,"name":"Lora"}}})


//db.getCollection("persons").find({name:{$exists:true}}).count()

//db.getCollection("persons").find({index:{$type:"int"}}).count()

//db.getCollection("persons").find({index:{$type:"int",$eq:18}})

db.getCollection("persons").find({name:{$regex: /ton/i}})

