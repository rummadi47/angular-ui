const jsonServer = require('json-server');
const cors = require('cors');
const server = jsonServer.create();
const router = jsonServer.router('tools/db.json');
const middlewares = jsonServer.defaults();
const db = require('./db.json');
const fs = require('fs');

var corsOptions = {
    origin: 'http://localhost:4200',
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
  }

// set default middlewares (logger, static, cors, no-cache)
server.use(middlewares);

// use cors
server.use(cors());

// bodyParser is for handling POST, PUT, and PATCH requests
server.use(jsonServer.bodyParser);

// CUSTOM ROUTES

// health check
server.get("/health-check", function(req, res) {
    res.send("Successful Healthcheck");
});

// get full customer support list
server.get("/customer-support-list", function(req,res) {
    res.send(readCustomerSupportList());
});

// get full customer report list
server.get("/customer-report-list", function(req, res) {
    res.send(readCustomerReportList());
});

server.post("/customer-support", function(req, res) {
    res.send({message: "Successfully submitted customer support form"});
});

server.post("/customer-report", function(req, res) {
    const customerReportList = readCustomerReportList;
    setTimeout((() => {
        res.send({message: "Successfully submitted customer report form"});
      }), 2000);
    
});

server.use(router);

const port = 3001;
server.listen(port, () => {
    console.log(`JSON Server is running on port ${port}`);
});

function readCustomerReportList() {
    const dbRaw = fs.readFileSync('./tools/db.json');
    const customerReportList = JSON.parse(dbRaw).customerReportList;
    return customerReportList;
}

function readCustomerSupportList() {
    const dbRaw = fs.readFileSync('./tools/db.json');
    const customerSupportList = JSON.parse(dbRaw).customerSupportList;
    return customerSupportList;
}