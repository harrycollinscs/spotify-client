const express = require("express");
const axios = require("axios");
const cors = require("cors");
const request = require("request");
const fetch = require("node-fetch");

const port = 3001;
const app = express();

app.use(cors());
app.use(function (req, res, next) {
  // Website you wish to allow to connect
  res.setHeader("Access-Control-Allow-Origin", "http://localhost:3000");

  // Request methods you wish to allow
  res.setHeader(
    "Access-Control-Allow-Methods",
    "GET, POST, OPTIONS, PUT, PATCH, DELETE"
  );

  // Request headers you wish to allow
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With,content-type"
  );

  // Set to true if you need the website to include cookies in the requests sent
  // to the API (e.g. in case you use sessions)
  res.setHeader("Access-Control-Allow-Credentials", true);
  next();
});
app.use(express.json());

app.put("/playSong", function (req, response) {
  const endpoint = "https://api.spotify.com/v1/me/player/play";

  const auth = req.body.headers.Authorization;
  const { context_uri, offset } = req.body;

  const body = {
    context_uri: context_uri,
    offset: {
      position: offset,
    },
    position_ms: 0,
  };

  fetch(endpoint, {
    method: "put",
    body: JSON.stringify(body),
    headers: {
      Authorization: auth,
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      console.log(res);
      response.send(true)})
    .catch((error) =>
      res.status(error.errno).send({
        message: error.message,
      })
    );
});

app.listen({ port }, () => {
  console.log(`🚀Server ready at http://localhost:${port}`);
});
