import { MongoClient, ServerApiVersion } from 'mongodb'
const uri = "mongodb+srv://ata-rw:" + process.env.ATA_RW + "@cluster0.xn3hoeg.mongodb.net/?retryWrites=true&w=majority"

export default function handler(req, res) {
    let newpoints, uid, form, method, zone

    // extract request information

    uid = req.body.id
    method = req.body.method
    zone = req.body.zone

    // calculate points server side

    let basePoints, distanceBonus, totalPoints
    if (method == "public transport") {
        basePoints = 2
    }
    if (method == "walk" || method == "bike") {
        basePoints = 5
    }

    basePoints = basePoints * zone
    distanceBonus = zone
    if (method == "walk" || method == "bike") {
        distanceBonus = Math.round(distanceBonus * 1.5)
    }

    if (method == "public transport" && zone == 8) {
        distanceBonus = distanceBonus + 3
    }

    totalPoints = basePoints + distanceBonus

    // add new points to user and form with mongodb

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })

    const database = client.db("ata-records")

    const journeysCollection = database.collection("journeys")
    const formsCollection = database.collection("forms")
    const usersCollection = database.collection("users")

    // add journey to journey collection

    let journey = {
        uid: uid,
        method: method,
        zone: zone
    }

    journeysCollection.insertOne(journey)

    // find user in user collection

    let userQuery = {
        uid: uid
    }

    let userQueryOptions = {
        projection: {form: 1, points: 1}
    }

    usersCollection.findOne(userQuery, userQueryOptions).then((doc) => {
        // extract information from user document

        let userForm = doc.form
        let userPoints = doc.points

        newpoints = doc.points + totalPoints

        // add points to user

        usersCollection.updateOne(userQuery, {
            $set: {
                points: userPoints + totalPoints
            }
        }, {})

        // find form (8ed 🔛🔝)

        let formQuery = {
            name: userForm
        }
        
        let formQueryOptions = {
            projection: {points: 1}
        }

        formsCollection.findOne(formQuery, formQueryOptions).then((form) => {
            // add points to form
            formsCollection.updateOne(formQuery, {
                $set: {
                    points: form.points + totalPoints
                }
            }, {}).then(res.status(200).send({pointsnew: newpoints}))
        })
        
    })
}