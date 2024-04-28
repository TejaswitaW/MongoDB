//$project
//db.persons.aggregate([{$project:{name:1,"company.location.country":1}}])
db.persons.aggregate([{$project:{name:1,newAge:"$age"}}])