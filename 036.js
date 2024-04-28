//swap match and group stages, to get result add field of previous stage

db.getCollection("persons").aggregate([
    // stage 1
    {$group: {_id:{age: "$age", eyeColor: "$eyeColor"}}},
    // stage 2
 {$match: {"_id.age": {$gt: 30}}
    
 }])