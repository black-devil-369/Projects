import app from "./app";

const Port = process.env.PORT || 10000;

app.listen(Port,()=>{
    console.log(`Sever is running on port ${Port}`);
})