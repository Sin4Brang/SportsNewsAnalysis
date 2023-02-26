const express = required("express");

const app = express()

app.get(
    "/",
    (req,res) =>{
        res.send("Hello")
    }
)
app.listen(
    5000,
    () => console.log("Backend is running")
)