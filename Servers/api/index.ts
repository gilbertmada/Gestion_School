import express, { Request, Response, NextFunction } from 'express';
import mongoose from 'mongoose';
import config from 'config';
import { User } from "./entity/User";
import cors from "cors";
import routes from "./routes";
import { createConnection } from 'typeorm';
import * as bodyParser from "body-parser";
// import helmet from 'helmet';
require('dotenv').config();

const app = express()

// app.get('/', async (req: Request, res: Response) => {
//   res.setHeader('Content-Type', 'application/json');
//   console.log("Hello world!")
// });

const mongoURI: string = process.env.MONGO_URI || config.get("mongoDBURI");

const port = process.env.PORT;

console.log("MongoURI....", mongoURI);
console.log("Port....", port);


app.use(
  cors(
    {
      allowedHeaders: "*",
      exposedHeaders: "*",
      origin: "*",
      // origin: "http://localhost:3000/",
      methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
      preflightContinue: false,
    }
  )
);

app.use(bodyParser.json({ limit: "50mb" }));
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/", routes);

mongoose.
  connect(mongoURI,
    {
      bufferCommands: false,
      autoCreate: true
    }
  )
  .then(() => {
    console.log("MongoDB Connected");
  })
  .catch((err) => console.log(err));

const server = app.listen(port || 3009, () => {
  console.log(`Server started on port ${port || 3009}!`);
});

export default server;

//import "reflect-metadata";
//import mongoose from "mongoose";
//import express from "express";
//import * as bodyParser from "body-parser";
//import helmet from "helmet";
//import cors from "cors";
//import routes from "./routes";
//import config from "config";
//import { Server, Socket } from "socket.io";
// import getAlert from "./utils/alert";
// import runCron from "./services/cron.service";
// import alertFacturation from "./utils/Alert/alertFacturation";
// import sendMail from "./common/sendMail/sendMail";
// import alertFinContrat from './utils/Alert/alertFinContrat';
// import alertFinContratAvant from './utils/Alert/alertFinContratAvant';
// import cron from 'node-cron';
// import AlertController from "./controllers/AlertController";
// import sendMailEngagement from "./common/sendMailEngagement/sendMailEngagement";

//const app = express();
//
//const mongoURI: string = process.env.MONGO_URI || config.get("mongoDBURI");

// runCron();

//  cron.schedule("0 5 * * *", () => {
//   alertFinContrat();
//   alertFinContratAvant();
// }, {
//   scheduled: true,
//   timezone: "Europe/Paris"
// });

// cron.schedule("45 22 * * *", () => {
//   AlertController.cleanAlertFinContrat();
// }, {
//   scheduled: true,
//   timezone: "Europe/Paris"
// })

//mongoose
//  .connect(mongoURI, {
//    // useNewUrlParser: true,
//    // useUnifiedTopology: true,
//    bufferCommands:true,
//    autoCreate:false,
//    autoIndex:true,
//
//  })
//  .then(() => {
//    console.log("MongoDB Connected");
//  })
//  .catch((err) => console.log("eto wa aho....",err));

// sendMail

// sendMail();

// sendMailEngagement();

// Call midlewares

//app.use(
//  cors({
//    exposedHeaders: ["token"],
//    origin: "*",
//    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
//    preflightContinue: false,
//  })
//);
//
//app.use(helmet());

// app.use(bodyParser.json({ limit: "50mb"}));

//app.use(express.json({ limit: '100mb' }));
//app.use(express.urlencoded({ limit: '100mb' }));


//Set all routes from routes folder

//app.use("/", routes);
//
//const server = app.listen(process.env.PORT || 3009, () => {
//  console.log(`Server started on port ${process.env.PORT || 3009}!`);
//});
//
//  AlertController.AutoSendMail();
//  AlertController.AlertDepartEdl();

//const io = new Server(server, {
//  cors: {
//    origin: "*",
//  },
//});
//
//app.set("socket_io", io);

// io.on("connection", async (socket: Socket) => {

//   getAlert(io);

//   socket.on("alertFacturation", async (data: any) => {
//     const res = await alertFacturation(data);
//     socket.emit(`${data}`, res);
//   });

//   socket.on("allAlert", async (data: any) => {
//     getAlert(io);
//   });

// });
//
//export default server;

