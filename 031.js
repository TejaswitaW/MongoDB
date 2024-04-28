// group stage
//db.persons.aggregate([{
//    $group:{_id:"$age"}
//}])
//db.persons.aggregate([{
//    $group:{_id:"$gender"}
//}])

db.persons.aggregate([{
    $group:{_id:"$eyeColor"}
}])