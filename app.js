const express = require('express');
const app = express();

//connect to mongo client 
const connectionString = 'mongodb+srv://oluwagbenga:REY$VE*m8*biKM2@crudappdb-cluster.rclek.mongodb.net/crudAppDB?retryWrites=true&w=majority'
const MongoClient = require('mongodb').MongoClient;

const client = new MongoClient(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(express.json());
app.use(express.urlencoded());

const crudAppSchema = new



//To find an object in the db

// client.connect((err, connectedClient) => {
//     if (err) {
//         throw err}
//         else {console.log('Database connected...')};
//     const db = connectedClient.db("crudAppDB");
//              db.collection('data').find({}).toArray((err, result) => {
//                 console.log(result)
//         })
//      })

    
// To create an object in the Database
app.post('/crudData', (req, res) => {
    client.connect((err, connectedClient) => {
        if (err) {
            return res.status(500).json({message: err})
        } 
        const db = connectedClient.db('crudAppDB');
        db.collection('crudData').insertOne({
            name: "Iyanu Ayeni",
            email: "iyanuaye@work.net",
            country: "Nigeria"
        }, (err, result) => {
            if (err) return res.status(500).json({message: err});
            return res.status(200).json({message: 'New profile successfully created!'})
            })
    });  console.log( `New profile successfully created!`);
})

//to find an object in the Database
app.get('/crudData', (req,res) => {
    
    client.connect((err, connectedClient) => {
            if (err) return res.status(500).json({message: err});
            const db = connectedClient.db("crudAppDB");
            db.collection('crudData').find({}).toArray((err, result) => {
                if (err) {
                    return res.status(500).json({message: err})
                }
            return res.status(200).json({crudData: result});
           

                })
             })
           
         })


//to update an object in the Database
app.put('/crudData', (req, res) => {
    client.connect((err, connectedClient) => {
        if (err){
             return res.status(500).json({message: err}) }
             var oldData = {
                name: "Oluwagbenga Aduloju",
                email: "adulojugbenga@yahoo.com",
                country: "Nigeria"
            }
            var newData = {
                $set: {
                    name: req.body.name,
                    email: req.body.email,
                    country: req.body.country
                }
            }
   
    const db = connectedClient.db('crudAppDB');
    db.collection('crudData').updateOne(oldData, newData,
    (err, result) => {
        if (err) return res.status(500).json({message: err});
        return res.status(200).json({message: 'Profile updated successfully!'})
    })
})

console.log({message:`Profile Successfully deleted!`});
})

//to delete an object in the database

app.delete('/crudData', (req, res) => {
    client.connect((err, connectedClient) => {
        if (err) return res.status(500).json({message: err});    
        const db = connectedClient.db('crudAppDB');
        const myQuery = {name: req.body.name}
        db.collection('crudData').deleteOne(myQuery, function(err, obj){
            if (err) {
                return res.status(500).json({message: err})
            }
            return res.status(200).json({message: `Profile Successfully deleted!`})
        })
    })
    console.log({message:`Profile Successfully deleted!`});
})


app.listen(4000, () =>  console.log('server up and running'))