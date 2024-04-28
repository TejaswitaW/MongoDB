// $count
//db.persons.aggregate([{$count:"allDocumentsCount"}])
//db.persons.aggregate([]).toArray().length
//db.persons.aggregate([]).itcount()
//db.persons.aggregate([{$count:"total"}])
db.persons.find({}).count()