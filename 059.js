//analyze query performance
//db.persons.explain().find({"gender":"female"})
db.persons.explain("executionStats").find({"gender":"female"})
/*
{
    "explainVersion" : "1",
    "queryPlanner" : {
        "namespace" : "newdb.persons",
        "indexFilterSet" : false,
        "parsedQuery" : {
            "gender" : {
                "$eq" : "female"
            }
        },
        "queryHash" : "4A54422A",
        "planCacheKey" : "4A54422A",
        "maxIndexedOrSolutionsReached" : false,
        "maxIndexedAndSolutionsReached" : false,
        "maxScansToExplodeReached" : false,
        "winningPlan" : {
            "stage" : "COLLSCAN",
            "filter" : {
                "gender" : {
                    "$eq" : "female"
                }
            },
            "direction" : "forward"
        },
        "rejectedPlans" : [

        ]
    },
    "executionStats" : {
        "executionSuccess" : true,
        "nReturned" : 507.0,
        "executionTimeMillis" : 2.0,
        "totalKeysExamined" : 0.0,
        "totalDocsExamined" : 1000.0,
        "executionStages" : {
            "stage" : "COLLSCAN",
            "filter" : {
                "gender" : {
                    "$eq" : "female"
                }
            },
            "nReturned" : 507.0,
            "executionTimeMillisEstimate" : 0.0,
            "works" : 1001.0,
            "advanced" : 507.0,
            "needTime" : 493.0,
            "needYield" : 0.0,
            "saveState" : 1.0,
            "restoreState" : 1.0,
            "isEOF" : 1.0,
            "direction" : "forward",
            "docsExamined" : 1000.0
        }
    },
    "command" : {
        "find" : "persons",
        "filter" : {
            "gender" : "female"
        },
        "$db" : "newdb"
    },
    "serverInfo" : {
        "host" : "DESKTOP-DSM5C6O",
        "port" : 27017.0,
        "version" : "7.0.8",
        "gitVersion" : "c5d33e55ba38d98e2f48765ec4e55338d67a4a64"
    },
    "serverParameters" : {
        "internalQueryFacetBufferSizeBytes" : 104857600.0,
        "internalQueryFacetMaxOutputDocSizeBytes" : 104857600.0,
        "internalLookupStageIntermediateDocumentMaxSizeBytes" : 104857600.0,
        "internalDocumentSourceGroupMaxMemoryBytes" : 104857600.0,
        "internalQueryMaxBlockingSortMemoryUsageBytes" : 104857600.0,
        "internalQueryProhibitBlockingMergeOnMongoS" : 0.0,
        "internalQueryMaxAddToSetBytes" : 104857600.0,
        "internalDocumentSourceSetWindowFieldsMaxMemoryBytes" : 104857600.0,
        "internalQueryFrameworkControl" : "trySbeRestricted"
    },
    "ok" : 1.0
}

*/