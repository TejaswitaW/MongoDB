//type and project
db.getCollection("persons").aggregate([
{$project:{
    name:1,
    eyeColorType:{$type:"$eyeColor"},
    ageType:{$type:"$age"}
}}
])