import { MongoClient, ServerApiVersion } from 'mongodb'
const uri = "mongodb+srv://ata-rw:" + process.env.ATA_RW + "@cluster0.xn3hoeg.mongodb.net/?retryWrites=true&w=majority"

export default function handler(req, res) {
    // extract the request information

    let id = req.body.id

    // connect to mongodb server

    const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 })

    const database = client.db("ata-records")

    const usersCollection = database.collection("users")

    // search for users with matching id

    usersCollection.countDocuments({
        uid: id
    }).then((docs) => {
        if (docs > 0) {
            usersCollection.findOne({
                uid: id
            }).then((doc) => {
                let isAdmin = null
                if (doc.type == "student") {
                    isAdmin = false
                } else {
                    isAdmin = true
                }
                let name = doc.name
                res.status(200).send({exists: true, isAdmin: isAdmin, name: name})
            })
        } else {
            res.status(404).send({exists: false})
        }
    })
}