const mongoose=require("mongoose")
const PORT =8000
const app =require("./app")

mongoose
.connect("mongodb+srv://sachin:12345@cluster0.pn06q.mongodb.net/amazon").then(()=>console.log("database connection successful")).catch((err)=>console.log(err))



app.listen(PORT,()=>{
    console.log(`listening at port ${PORT}`)
})