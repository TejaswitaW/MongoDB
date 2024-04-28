//Arrays with group stage
db.persons.aggregate([
{$group:{_id:"$tags"}}
])