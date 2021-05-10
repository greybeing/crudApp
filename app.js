const express = require('express');
const app = express();
const port = 4000




//SET UP MONGOOSE
const mongoose = require('mongoose');
const connectionString =  `mongodb+srv://oluwagbenga:REY$VE*m8*biKM2@crudappdb-cluster.rclek.mongodb.net/crudAppDB?retryWrites=true&w=majority`
// const MongoClient = require('mongodb').MongoClient;

mongoose.connect(connectionString, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false
}, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Database connection successful!')
    }
})

app.use(express.json());
app.use(express.urlencoded());

//CREATE DATA SCHEMA
const crudDataSchema = new mongoose.Schema({
    name:String,
    email:String,
    country:String
})
const crudData = mongoose.model('crudData', crudDataSchema)

//POST request to /crudData to create a new profile
app.post('/cruddatas', function (req, res) {
    //retrieve new profile details from req.body
    //create a new profile and save to DB
    //send response to client
  
    crudData.create({
        name: req.body.name,
        email: req.body.email,
        country: req.body.country
    }, (err, newProfile) => {
        if(err) {
            return res.status(500).json({ message: err })
        } else {
            return res.status(200).json({ message: "New profile successfully created!",
          newProfile})
        }
    })
    
})
//GET request to /crudData to fetch all profiles
app.get('/cruddatas', (req, res) => {
    //Fetch all profiles
 crudData.find({}, (err, profiles) => {
     if (err) {
         return res.status(500).json( {message: err})
     }
     else {
         return res.status(200).json({ profiles })
        }
    })
    //send response to client
})

//Get request to /crudData/:id to fetch a single profile
app.get('/cruddatas/:id', (req, res) => {
    crudData.findOne({ _id: req.params.id }, (err, profile) => {
    if (err) {
        return res.status(500).json( {message: err})
    } else if (!profile) {
        return res.status(404).json({ message:`profile not found!`})
    }
    else  {
        return res.status(200).json({profile})
    }

    })
})

//PUT request to /crudData/:id to update a single profile
app.put('/cruddatas/:id', (req, res) => {
    crudData.findByIdAndUpdate(req.params.id, { 
        name:req.body.name,
        email:req.body.email,
        country:req.body.country
    }, (err, profile) => {
        if(err) {
            return res.status(500).json({message: err})
        }else if(!profile) {
            return res.status(404).json({message: `profile not found`})
        }else {
            //save updated profile
            profile.save((err, savedProfile) => {
                if (err) {
                    return res.status(400).json({message: err})
                }else {
                    return res.status(200).json({message: `profile updated successfully`})
                }
            }
         )}
    })
})
//Delete request to /crudData/:id to delete a single profile
app.delete('/cruddatas/:id', (req, res) => {
    crudData.findByIdAndDelete(req.params.id, (err, profile) => {
        if (err) {
            return res.status(500).json({message: err})
        }
        else if(!profile) {
            return res.status(404).json({message: `profile not found`})
        }else {
            return res.status(200).json({message: `profile deleted successfully`})
        }
    })
})

app.listen(process.env.PORT || 4000, () => console.log(`Server successfully running`))