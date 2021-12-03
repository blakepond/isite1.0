require('dotenv').config()

const express = require('express');
const cors = require('cors');
const app = express();

const {SERVER_PORT} = process.env


app.use(cors());
app.use(express.json());


const {createTables,getAllUsers,loginUser,deleteUser,registerUser,getUser} = require("./controller.js")

app.post('/seed', createTables)
app.get("/users", getAllUsers);
app.post("/users/login", loginUser);
app.post("/users/register", registerUser);
app.delete(`/users/:user_id`, deleteUser);
app.get('/users/login', getUser)



app.listen(SERVER_PORT, ()=> console.log(`Up on ${SERVER_PORT}`));