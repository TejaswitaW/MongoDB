//$avg accumulator
//db.getCollection("persons").aggregate([
//{
// $group:{
//_id: "$eyeColor",
//avgAge:{$avg:"$age"}
//    }
//}
//])

db.getCollection("persons").aggregate([
{
 $group:{
_id: "$company.location.country",
avgAge:{$avg:"$age"}
    }
}
])