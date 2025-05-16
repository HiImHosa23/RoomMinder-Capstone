"use strict";

var express = require('express');

var mongoose = require('mongoose');

var cors = require('cors');

var app = express();
var PORT = 3001;
app.use(cors());
app.use(express.json());
mongoose.connect('mongodb+srv://dev:Nc210960870@cluster0.peco6ve.mongodb.net/roommatesDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(function () {
  return console.log('Connected to MongoDB Atlas!');
})["catch"](function (err) {
  return console.error('MongoDB connection error:', err);
});
var roommateSchema = new mongoose.Schema({
  name: String,
  likes: [String],
  dislikes: [String],
  expectations: String,
  contact: String,
  imageURL: String
});
var Roommate = mongoose.model('Roommate', roommateSchema);
app.get('/api/roomates', function _callee(req, res) {
  var roomies;
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Roommate.find());

        case 3:
          roomies = _context.sent;
          res.json(roomies);
          _context.next = 10;
          break;

        case 7:
          _context.prev = 7;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: 'There was an error fetching this roommate'
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
app.post('/api/roommates', function _callee2(req, res) {
  var newRoomie;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _context2.prev = 0;
          newRoomie = new Roommate(req.body);
          _context2.next = 4;
          return regeneratorRuntime.awrap(newRoomie.save());

        case 4:
          res.status(201).json(newRoomie);
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](0);
          res.status(400).json({
            message: 'There was an error saving this roommate'
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[0, 7]]);
});
app.listen(PORT, function () {
  console.log("The server is runnig on localhost:".concat(PORT, "!"));
});
//# sourceMappingURL=server.dev.js.map
