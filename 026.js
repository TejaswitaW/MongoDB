//deleteOne
//db.getCollection("tempCollection").find()
//db.tempCollection.insertMany([{},{},{},{},{},{}])
//db.getCollection("tempCollection").find()
//db.getCollection("tempCollection").deleteOne(
//{"_id" : ObjectId("6628d3ba9b4c5ed37353ce59")}
//)

db.getCollection("tempCollection").deleteOne(
{}
)//first document will get deleted that match empty query.

db.getCollection("tempCollection").find()