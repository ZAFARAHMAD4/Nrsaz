const express = require("express");
const bodyParser = require('body-parser');
const multer = require("multer");
const sendQuote = require("./Controllers/sendQuote");
const sendOrder = require("./Controllers/sendOrder");
const sendMail = require('./Controllers/sendMail');
const cors = require('cors');
const connectedDB = require("../backend/Config/db");
const users = require("./Routers/route");
const reviewRoutes = require("./Routers/reviewRoutes"); // ✅ Add this

const app = express();
const port = 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

// Connect to DB
connectedDB();

// Existing routes
app.use('/api', users);
app.post('/send-quote', upload.single('file'), sendQuote);
app.post('/sendorder', sendOrder);
app.post('/send', sendMail);

// ✅ Add review routes
app.use('/api', reviewRoutes);

app.get('/', (req, res) => {
  res.send("hello");
});

app.listen(port, () => {
  console.log("server is start", port);
});
