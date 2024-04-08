const express = require("express")
const collection = require("./mongo")
const cors = require("cors")
const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended : true}))
app.use(cors())


app.get("/",cors(),(req,res)=>{

})

app.post("/", async (req, res) => {
    const { email, password } = req.body;
  
    try {
      const check = await collection.findOne({ email: email });
  
      if (check) {
        res.json("exist");
      } else {
        res.json("notexist");
      }
    } 
    catch (e) {
      console.error(e);
      res.status(500).json("error");
    }
  });
  
  app.post("/signup", async (req, res) => {
    const { email, password } = req.body;
  
    const data = {
      email: email,
      password: password,
    };
  
    try {
      const check = await collection.findOne({ email: email });
  
      if (check) {
        res.json("exist");
      } else {
        await collection.insertMany([data]);
        res.json("notexist");
      }
    } catch (e) {
      console.error(e);
      res.status(500).json("error");
    }
  });

  app.get('/accounts', async (req, res) => {
    try {
        const users = await collection.find();
        res.json(users);
    } catch (err) {
        res.json({ error: err.message || "An error occurred while fetching data" });
    }
});


app.listen(3001,()=>{
    console.log("port connected")
})