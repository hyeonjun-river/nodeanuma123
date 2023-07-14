const express = require('express')
var cors = require('cors')
const app = express()

app.use(cors())

app.get('/', function (req, res) {
  res.send('Hello World')
})

app.get('/user/:id', function (req, res) {
    const q = req.params
    console.log(q.id) 
    res.json({'userid' : q.id})
  })

app.get('/sound/:name', function (req, res) {
    const {name} = req.params

    if (name == 'dog'){
        res.json({'sound' : '멍멍'})
    }
    else if(name == 'cat') {
        res.json({'sound':'야옹'})

    }
    })
     
    

app.get('/cat', function (req, res) {
    res.send('야옹')
  })


app.listen(3000)