const mongoose = require('mongoose');
const connect = async()=>{
    await mongoose.connect("mongodb://localhost:27017",{
        useNewUrlParser: true,
    });
    console.log("DataBase connected successfully");
}
export default connect;