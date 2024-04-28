//$limit
db.getCollection("persons").aggregate([
{$limit:100},
{$match:{age:{"$gt":27}}},
{$group:{_id:"$company.location.country"}}
])