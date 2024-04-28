// delete indexes
//db.persons.dropIndex({name:1})
/*
{
    "nIndexesWas" : 4.0,
    "ok" : 1.0
}
*/
//db.persons.getIndexes()
//db.persons.dropIndexes()
/*
{
    "nIndexesWas" : 3.0,
    "msg" : "non-_id indexes dropped for collection",
    "ok" : 1.0
}

*/
db.persons.getIndexes()
/*
[
    {
        "v" : 2.0,
        "key" : {
            "_id" : 1.0
        },
        "name" : "_id_"
    }
]
*/