//out stage
db.getCollection("persons").aggregate([
{$group:{
    _id:{age:"$age",eyeColor:"$eyeColor"}
    }
},
{$out: "aggregationResults"}
])