import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"testtt"
});

app.use(express.json())
app.use(cors())
app.get("/", (req,res)=>{
    res.json("Hello this is the backend")
});

app.get("/books", (req,res)=>{
    const q = "Select title, adimne FROM books"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
});


app.post("/books", (req, res) => {
    const q = "INSERT INTO books(`title`, `desc`, `cover`) VALUES (?)";

    const values =[
        req.body.title,
        req.body.desc,   
    ];

    db.query(q,[values],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Book has been created succesfully")
        
    })

});

app.delete("/books/:id",(req, res) => {

    const bookId = req.params.id;
    const q = "DELETE FROM books where id = ?";


    db.query(q,[bookId],(err,data)=>{
        if(err) return res.json(err);
        return res.json("Book has been created succesfully")
        
    })


})
app.listen(8800, ()=>{
    console.log("Connected to backend!")
})