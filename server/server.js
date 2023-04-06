const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

app.use(express.json());
app.use(cors());

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "postgres",
  password: "Harish@10",
  port: 5432,
});

app.get("/", (req, res) => {
  res.send("Running Successfully");
});

app.post("/", async (req, res) => {
    const data = req.body;

    const insertData = await pool.query(`INSERT INTO form(fname,lname,email,dob,gender,city,state_,country,mob,zip) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING *;`,
    [data.fname,data.lname,data.email,data.dob,data.gender,data.city,data.state,data.country,data.mob,data.zip]);
    res.json(insertData.rows)
});

app.get("/all", async(req, res)=>{
    const allData = await pool.query(`SELECT * FROM form;`);
    res.json(allData.rows)
})

app.listen(3000,()=>{
    console.log("server started at port 3000")
})
