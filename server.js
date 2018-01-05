var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var ObjectID = require('mongodb').ObjectID

var db = require('./untils/db')
var artistsController = require('./controllers/artists')

var app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// var db
// var artists = [
//   {
//     id: 1,
//     name: 'Francis Albert Sinatra'
//   },
//   {
//     id: 2,
//     name: 'Bob Marley'
//   },
//   {
//     id: 3,
//     name: 'Rammstein'
//   },
//   {
//     id: 4,
//     name: 'Lana Del Rey'
//   }
// ]

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/artist/', artistsController.all)
 
// app.get('/artist/', (req, res) => {
//   db.get().collection('artists').find().toArray((err, docs) => {
//     if (err) {
//       console.log(err)
//       return res.statusCode(500)
//     }
//     res.send(docs)
//   })
//   // res.send(artists)
// })

app.get('/artist/:id', artistsController.findById)
// app.get('/artist/:id', (req, res) => {
//   db.get().collection('artists').findOne({ _id: ObjectID(req.params.id) }, (err, doc) => {
//     if (err) {
//       console.log(err)
//       return res.statusCode(500)
//     }
//     res.send(doc)
//   })
  // var artist = artists.find((artist) => {
  //   return artist.id === Number(req.params.id)
  // })
  // res.send(artist)
// })

app.post('/artist/', artistsController.create)
// app.post('/artist/', (req, res) => {
//   console.log(req.body)
//   var artist = {
//     name: req.body.name
//   }
//   db.get().collection('artists').insert(artist, (err, result) => {
//     if (err) {
//       console.log(err)
//       return res.sendStatus(500)
//     }
//     res.send(artist)
//   })
//   // console.log(req.headers)
//   // res.send(artist)
// })

app.put('/artist/:id', artistsController.update)
// app.put('/artist/:id', (req, res) => {
//   db.get().collection('artists').updateOne(
//     { _id: ObjectID(req.params.id) },
//     { $set: { name: req.body.name } },
//     (err, result) => {
//       if (err) {
//         console.log(err)
//         return res.sendStatus(500)
//       }
//       res.sendStatus(200)
//     })
  // var artist = artists.find((artist) => {
  //   return artist.id === Number(req.params.id)
  // })
  // if (req.body.name) {
  //   artist.name = req.body.name
  //   return res.sendStatus(200)
  // }
  // res.sendStatus(400)
// })

app.delete('/artist/:id', artistsController.delete) 
// app.delete('/artist/:id', (req, res) => {
//   db.get().collection('artists').deleteOne(
//     { _id: ObjectID(req.params.id) }, (err, result) => {
//       if (err) {
//         console.log(err)
//         return res.sendStatus(500)
//       }
//       res.sendStatus(200)
      // var artist = artists.filter((artist) => {
      //   return artist.id !== Number(req.params.id)
      // })
      // res.send(artist)
    // })
// })

db.connect('mongodb://localhost:27017/myapi', err => {
  if (err) { 
    return console.log(err) 
  }
  console.log('Mongodb is running')
  app.listen(8000, () => {
    console.log('Server is running port 8000')
  })
})