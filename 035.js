//swap match and group stages, no result as order of the stages is wwrong

db.getCollection("persons").aggregate([
    // stage 1
    {$group: {_id:{age: "$age", eyeColor: "$eyeColor"}}},
    // stage 2
    {$match: {gender: "female"}
    
}])