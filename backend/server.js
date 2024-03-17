// index.js
const express = require("express");
const axios = require("axios");


require("dotenv").config();
const cors = require("cors");
const corsOptions = {
  origin: "http://localhost:5173", // Change this to your client URL
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};
const app = express();
const port = process.env.PORT || 4000;
const controller = require("./controllers/controller.js");
app.use(cors(corsOptions));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/api/prompt", (req, res) => {
  controller.run(req, res);
});

app.get("/api/image_text_prompt", (req, res) => {
  controller.runMultiModal(req, res);
});

app.get("/api/chat_prompt", (req, res) => {
  controller.runChat(req, res);
});

app.get("/api/embedding_prompt", (req, res) => {
  controller.runEmbedding(req, res);
});

app.get("/api/model_parameters_prompt", (req, res) => {
  controller.runTextParameters(req, res);
});

app.post("/api/translate_input_to_english", (req, res) => {
  controller.audioInputToEnglish(req, res);
});

app.post("/api/translate_input_to_hindi", (req, res) => {
  controller.audioInputToHindi(req, res);
});

app.post("/api/translate_input_to_spanish", (req, res) => {
  controller.audioInputToSpanish(req, res);
});

app.post("/api/translate_input_to_many", (req, res)=>{
  controller.audioInputToMany(req, res);
});
// Chat
const CHAT_ENGINE_PROJECT_ID = "287e0b40-982f-429b-a7f8-cde946157404";
const CHAT_ENGINE_PRIVATE_KEY = "cf560a94-3ab2-454a-bf04-6569016be9e9";
app.post("/authenticate",async(req,res)=>{
  const {username} =req.body;
  try {
    const r=await axios.put(
      'https://api.chatengine.io/users/',
      {username:username,secret:username,first_name:username},
      {headers:{"private-key":"cf560a94-3ab2-454a-bf04-6569016be9e9"}}
    );
    return res.status(r.status).json(r.data)
  } catch (e) {
    console.log(e)
  }
})
// Chat

app.listen(port, () => {
  console.log(`Server is running on ${port}`);
});

