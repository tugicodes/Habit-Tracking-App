const express = require ('express'); //imports express
const cors = require ('cors');

require ("dotenv").config ();

const app = express(); //creates an express application
const PORT = 5000;

const connectDB = require ("./config/database");
const userRoutes = require ("./routes/userRoutes");
const loginRoute = require("./routes/login");
const signupRoute = require("./routes/signup");

//middleware
app.use(cors()); //allows communication between the client side and the server
app.use(express.json());

//connect server routes 
app.use("/api/login", loginRoute);
app.use("/api/signup", signupRoute);
app.use('/api/users', userRoutes);

connectDB();

app.listen (PORT, () => {
    console.log('Server is running on port ' + PORT);
});
