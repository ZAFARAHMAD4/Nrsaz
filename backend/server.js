const express = require("express");
const bodyParser = require('body-parser');
const multer = require("multer");
const sendQuote = require("./Controllers/sendQuote");
const cors = require('cors');
const connectedDB = require("../backend/Config/db")
const users = require("./Routers/route")



const app = express();
//body parser
app.use(cors());
app.use(express.json());
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });
const port = 3000;
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
connectedDB();

app.use('/api',users)

const sendMail = require('./Controllers/sendMail');
app.post('/send-quote', upload.single('file'), sendQuote);
app.post('/send', sendMail); // ✅ Make sure it's POST

app.get('/', (req,res)=>{
      res.send("hello")
})

app.listen(port,()=>{
      console.log("server is start",port);
      
})