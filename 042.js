//project with new fields
db.persons.aggregate([{$project:{_id:0,name:1,info:{
    eyes:"$eyeColor",
    fruit:"$favoriteFruit",
    country:"$company.location.country"
}}}])