import express from "express";
import cors from "cors";
import dotenv from "dotenv";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

const superSecretThing = process.env.SUPER_SECRET_THING;
app.get("/message", (request, response) => {
  response.json(
    `You should never expose your environment variables, but I'm going to show you this one as an example of using dotenv: ${superSecretThing}`
  );
});

app.listen(8080, () => console.log("ITS WORKING! IIITS WOOORKIIIING!"));
