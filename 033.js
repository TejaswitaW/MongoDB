// grouping by nested fields
db.getCollection("persons").aggregate([{
    $group:{_id:{age:"$age",gender:"$gender"}}
}])