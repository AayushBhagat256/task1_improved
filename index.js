const express = require('express')
const dotenv = require('dotenv')
const cors = require('cors')
const bodyParser = require('body-parser')


dotenv.config()
const app = express();
const router = express.Router();


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors())
app.use(express.json())

// all model relations
require('./Utils/all_Model_Relationship/all_ModelRelationship').modelRelationships();

console.log("All model relations called");

require('./Utils/all_routes/all_routes').routes(app);
console.log("routes called")

const PORT = process.env.PORT || 5000;
app.listen(PORT,()=>{
    console.log(`listening to post ${PORT}`);
})

