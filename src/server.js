require("dotenv").config();
const app = require("./index");
const connect = require("./configs/db");

app.listen(process.env.PORT || 5000, async (req, res) => {
    try{
        await connect();
        console.log("Listening on port 5000");
    }catch(err){
        console.log(err.message);
    }
});