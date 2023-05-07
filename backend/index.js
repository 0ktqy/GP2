import express from "express"
import mysql from "mysql"
import cors from "cors"

const app = express()

const db =mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"emobilitydb"
});

// host:"localhost",
// user:"root",
// password:"123456",
// database:"testtt"

app.use(express.json())
app.use(cors())
app.get("/", (req,res)=>{
    res.json("Hello this is the backend")
}); 



//Station Numbers

app.get("/stationtype", (req,res)=>{
    const q = "SELECT stationStatus, sum(stationnumSocket) as StationNum FROM stationinfo group by stationStatus"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
});

//Station Segment
app.get("/Segment", (req,res)=>{
    const q = "SELECT stationLocationType, SUM(partnerID) as Segment FROM locationinfo group by stationLocationType"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
});

//Station Segment
app.get("/StationLine", (req,res)=>{
    const q = "SELECT EXTRACT(year FROM stationInsertDate) as Year, count(stationID) as StationNum FROM emobilitydb.stationinfo GROUP BY EXTRACT(year FROM stationInsertDate)"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
});






app.post('/login', (req, res) => {
    const { title, adimne } = req.body;

    db.query('SELECT * FROM users WHERE title = ?', [title], async (err, results) => {
        if (err) {
            res.send({ err: err });
        }

        if (results.length > 0) {
            const comparison = await bcrypt.compare(adimne, results[0].adimne);

            if (comparison) {
                res.send({ message: 'Success!' });
            } else {
                res.send({ message: 'Wrong username or password.' });
            }
        } else {
            res.send({ message: 'Wrong username or password.' });
        }
    });
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