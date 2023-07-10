const express = require("express");
// body parser is used to parse the incoming request bodies in a middleware before you handle it
const bodyParser = require("body-parser");

const app = express();
const PORT = 8000;

// for the sms you have to call the credentials from the africastalking account
const credentials = {
  apiKey: "c1f204150597aed660361d22804f93c9d2a231f6d8c22670ed052f59d79d9613",
  username: "Dreamerr",
};
const AfricasTalking = require("africastalking")(credentials);
const sms = AfricasTalking.SMS;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//  const fs = require("fs");

let counter = 0;

app.post("/", (req, res) => {
  const { sessionId, phoneNumber, text } = req.body;

  counter++;

  console.log(counter);

  let response = "";

  if (text === "") {
    console.log(text);
    
    // This is the first request. Note how we start the response with CON
    response = `CON What appointment would you like to book?
        1. AT Hackathons
        2. AT Meetups`;
  } else if (text === "1") {
    // Business logic for first level response
    response = `CON Choose hackathon to attend
        1. Task Automation
        2. Chatbots`;
  } else if (text === "2") {
    response = `CON Choose meetup to attend
        1. Nairobi
        2. Ghana`;

    console.log("ww");
  }
  // Set your app credentials
  // const makeCall = require("../node2");
  else if (text === "1*2") {
    response = `END please text this number`;
  } else if (text === "2*1") {
    function sendSms() {
      console.log("wwwww");
      const options = {
        to: phoneNumber,
        message: "he female genital organs",
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendSms();
    response = `END you will receive an sms about What is FGM shortly`;
  } else if (text === "2*2") {
    function sendSms() {
      const options = {
        to: phoneNumber,
        message: "Female genital mutilation is classified into 4 major types",
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendSms();
    response = `END you will receive an sms about Types of FGM shortly`;
  } else if (text === "2*3") {
    function sendSms() {
      console.log("wwwww");
      const options = {
        to: phoneNumber,
        message:
          "The reasons why FGM is performed vary f time and include a mix of sociocultural factors within families and communities",
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendSms();
    response = `END you will receive an sms about WHY PEOPLE PRACTICE FGM shortly`;
  } else if (text === "2*4") {
    function sendSms() {
      console.log("wwwww");
      const options = {
        to: phoneNumber,
        message:
          "    FGM harms girls and women in many ways. It involves removing and damaging healthy and normal female genital tissue, and it interferes with the natural functions of girl",
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendSms();
    response = `END you will receive an sms about Effects of FGM shortly`;
  } else if (text === "2*5") {
    function sendSms() {
      console.log("wwwww");
      const options = {
        to: phoneNumber,
        message: "h",
        //     message: 'There are many reasons why health-care providers perform FGM. These include:\n' +
        // '• the belief that there is reduced risk of complications associated with medicalized FGM as compared to non-medicalized FGM; \n' +
        // '• the belief that medicalization of FGM could be a first step towards full abandonment of the practice;\n' +
        // '• health care providers who perform FGM are themselves members of FGM- practising communities and are subject to the same social norms; and \n' +
        // '• there may be a financial incentive to perform the practice.\n' ,
      };
      sms
        .send(options)
        .then((response) => {
          console.log(response);
        })
        .catch((error) => {
          console.log(error);
        });
    }
    sendSms();
    response = `END you will receive an sms about WHAT IS MEDICALIZED FGM shortly`;
  }

  // Print the response onto the page so that our gateway can read it
  res.set("Content-Type: text/plain");
  res.send(response);
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

module.exports = app;
module.exports = counter;
