const http = require('http');
const redis = require('redis');
const mongoose = require("mongoose")

const client = redis.createClient(6379, 'redis')
client.on('connect', function () {
  client.set('count', 1)
  console.log('connected');
});

mongoose.connect("mongodb://mongo/test", { useNewUrlParser: true })

const kittySchema = new mongoose.Schema({
  date: String
})

const Kitten = mongoose.model("Kitten", kittySchema)

const server = http.createServer(function (req, res) {
  const silence = new Kitten({ date: new Date() })
  if (req.url === '/') {
    client.get('count', function (err, count) {
      res.write(
        "It's works. \n The site have been visited  " +
          count +
          " times." +
          "silence " +
          silence.date
      )
      res.end()
      client.set('count', parseInt(count) + 1)
    });
  }


})

server.listen(3006, function () {
  console.log('server running at port 3006.')
})
