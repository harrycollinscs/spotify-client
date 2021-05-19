const express = require("express");
const axios = require("axios");
const cors = require("cors");
const request = require("request");

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

app.put("/playSong", function (req, res) {
  const endpoint = "https://api.spotify.com/v1/me/player/play";

  const auth = req.body.headers.Authorization;
  const { context_uri, offset } = req.body;

  request(
    {
      method: 'PUT',
      uri: endpoint,
      headers: {
        Authorization: auth,
      },
      context_uri: context_uri,
      offset: offset,
    },
    function (error, response, body) {
      console.log(response);
      console.log(body)

      // console.log(body);
    }
  );

  // axios
  //     .put(endpoint, {
  //       headers: {
  //         "Authorization": auth,
  //       },
  //       context_uri: context_uri,
  //       offset: offset,
  //     })
  //     .then((response) => {
  //       // console.log(response)
  //     })
  //     .catch((err) => {
  //       console.log(err)
  //     })
});

app.listen({ port }, () => {
  console.log(`🚀Server ready at http://localhost:${port}`);
});
