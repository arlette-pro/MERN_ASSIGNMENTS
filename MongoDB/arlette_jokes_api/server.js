const express = require("express");
const app = express();
const port = 8000;


    
app.use(express.json(), express.urlencoded({ extended: true }));
require("./config/mongoose.config");
const AllMyUserRoutes = require("./routes/joke.route");
AllMyUserRoutes(app);
    
app.listen(8000, () => console.log("The server is all fired up on port 8000"));