const express = require('express');
const http = require('http');
const https = require('https');
const  bodyParser = require("body-parser");
const fs = require('fs');
const app = express();
const portHttp = 80;
	  

app.use(bodyParser.json());
app.use(express.static(process.cwd()+"/dist/hangman/"));

app.get('/', (req,res) => {
  res.sendFile(process.cwd()+"/dist/hangman/index.html")
});

var httpServer = http.createServer(app);

httpServer.listen(portHttp, () => {
	console.log('http is listening');
});