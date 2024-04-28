//db.getCollection("persons")
//.find({$and:[{"age":20},{"gender":"male"}]})
//
//db.getCollection("persons")
//.find({$and:[{"age":{"$ne":25}},{"age":{"$gte":20}}]})

//db.getCollection("persons")
//.find({"age":{"$ne":25},"age":{"$gte":20}})
//
//db.getCollection("persons")
//.find({"gender":"female",favoriteFruit:"banana"}).count()


//db.getCollection("persons")
//.find({$and:[{"gender":"female"},{favoriteFruit:"banana"}]}).count()


//db.getCollection("persons")
//.find({$or:[{age:20},{age:27}]})

//db.getCollection("persons")
//.find({$or:[{age:{$gt:20}},{age:{$ne:27}}]})


//db.getCollection("persons")
//.find({$or:[{gender:"male"},{age:27}]})


//db.getCollection("persons")
//.find({"company" : {
//        "title" : "EXIAND",
//        "email" : "hayswise@exiand.com",
//        "phone" : "+1 (801) 583-3393",
//        "location" : {
//            "country" : "France",
//            "address" : "795 Borinquen Pl"
//        }
//    }})
    
//db.getCollection("persons")
//.find({"company.location.country":"USA"})


//db.getCollection("persons")
//.find({"company.location.country":"USA","company.title":"YURTURE"})



//db.getCollection("persons")
//.find({"company.location.country":"USA","company.title":"YURTURE"})


//db.getCollection("persons")
//.find({"tags.4":"ad"})

//db.getCollection("persons")
//.find({tags:{$all:["ad","eu"]}})


//db.getCollection("persons")
//.find({tags:{$size:2}})
    

db.getCollection("persons")
.find({tags:{$size:2}})
    