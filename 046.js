// $unwind and $group
db.getCollection("persons").aggregate([{$unwind: "$tags"},
{"$group":{_id:"$tags"}}])