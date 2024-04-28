//match and group stages
//db.getCollection("persons").aggregate([
//    // stage 1
//    {$match: {favoriteColor: "banana"}},
//    // stage 2
//    {$group: {_id:{age: "$age", eyeColor: "$eyeColor"}}
//}])

db.getCollection("persons").aggregate([
    // stage 1
    {$match: {gender: "female"}},
    // stage 2
    {$group: {_id:{age: "$age", eyeColor: "$eyeColor", gender: "$gender"}}
}])