// $unwind and $project
db.getCollection("persons").aggregate([{$unwind: "$tags"},
{"$project":{name:1, gender:1, tags:1}}])