import express from 'express';
import axios from 'axios';

const app = express();
const port = 3000;


app.use(express.static("public"));

app.get("/", async (req, res) => {
    try {
      const result = await axios.get("https://meme-api.com/gimme");
      res.render("index.ejs", {
        title: result.data.title,
        photo: result.data.url,
        postLink: result.data.postLink,
      });
    } catch (error) {
      console.log(error.response.data);
      res.status(err);
    }
  });
app.get("/noice", async (req, res) => {
    try {
      const result = await axios.get("https://meme-api.com/gimme/wholesomememes");
      res.render("index.ejs", {
        title: result.data.title,
        photo: result.data.url,
        postLink: result.data.postLink,
      });
    } catch (error) {
      console.log(error.response.data);
      res.status(err);
    }
  });

app.listen(port,()=>{
    console.log(`running on ${port}...`);
});