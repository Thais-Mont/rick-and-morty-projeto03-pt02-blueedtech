require('dotenv').config();
const express = require('express');
const cors = require('cors');
const connectDatabase = require('./src/database/database');
const userRoute = require('./src/users/user.route');
const authRoute = require('./src/auth/auth.route');
const swaggerRoute = require("./src/swagger/swagger.routes");

const port = process.env.PORT || 3001;
const app = express();

connectDatabase();
app.use(cors());
app.use(express.json());

app.use("/api-docs", swaggerRoute);
app.use("/users", userRoute);
app.use("/auth", authRoute);


app.listen(port, () => {console.log(`Servidor rodando na porta http://localhost:${port}`)});
