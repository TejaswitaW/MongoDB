// $group and $count

//db.persons.aggregate([{$group:{_id:"$company.location.country"}},
//{$count:"countriesCount"}])

db.persons.aggregate([{$group:{_id:"$age"}},{$count:"age"}])