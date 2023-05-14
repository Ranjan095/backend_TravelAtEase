/** @format */

let express = require("express");
const { connection } = require("./db");
const { userRouter } = require("./router/users.router");
const cors = require('cors')

let app = express();
app.use(cors())
app.use(express.json());

app.use(userRouter);


// app.get("/",(req,res)=>{
//     try {
//         res.status(200).send({"msg":"Home Page"})
//     } catch (err) {
//         res.status(400).send(err.message)
//     }
// })

app.listen(8080, async () => {
  try {
    await connection;
    console.log("DB is connected");
  } catch (err) {
    console.log(err);
  }
  console.log("port is running at 8080");
});
