// group and the sort stage
//db.getCollection("persons").aggregate([{$group:{_id:"$favoriteFruit"}},
//{$sort:{_id:1}}])

//db.getCollection("persons").aggregate([{$group:{_id:"$age"}},
//{$sort:{_id:1}}])

//db.getCollection("persons").aggregate([{$group:{_id:{favoriteFruit:"$favoriteFruit",eyeColor:"$eyeColor"}}},
//{$sort:{"_id.favoriteFruite":-1,"_id.eyeColor":1}}])
//
//db.getCollection("persons").aggregate([{$group:{_id:{favoriteFruit:"$favoriteFruit",eyeColor:"$eyeColor"}}},
//{$sort:{"_id.favoriteFruite":-1,"_id.eyeColor":1}}])

db.getCollection("persons").aggregate([{$match:{eyeColor:{$ne:"blue"}}},{$group:{_id:{favoriteFruit:"$favoriteFruit",eyeColor:"$eyeColor"}}},
{$sort:{"_id.favoriteFruite":-1,"_id.eyeColor":1}}])