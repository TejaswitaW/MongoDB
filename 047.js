//$sum accumulator $group
//db.getCollection("persons").aggregate([{$group:{_id:"$age",total:{$sum:1}}},{$sort:{total:1}}])
db.getCollection("persons").aggregate([{$group:{_id:"$favoriteFruit",total:{$sum:1}}},{$sort:{total:1}}])