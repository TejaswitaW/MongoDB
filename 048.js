//group,sum,unwind
db.getCollection("persons").aggregate([
{$unwind:"$tags"},
{$group:{
    _id:"$tags",
    count:{"$sum":NumberInt(1)}
}}
])