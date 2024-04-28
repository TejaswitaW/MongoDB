// $match
//db.persons.aggregate([{$match:{age:25}}])
db.persons.aggregate([{$match:{age:{$gt:25}}}])