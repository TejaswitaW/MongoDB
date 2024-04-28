//deleteMany
db.getCollection("tempCollection").deleteMany({
    "_id":{$ne:ObjectId("6628d3ba9b4c5ed37353ce5b")}
})
db.getCollection("tempCollection").find({})