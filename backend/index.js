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
    const q = "SELECT StationType as StationType , SUM(CarbonReduction) as Station FROM emobilitydb.carbonreduction group by StationType"
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



//StationPie

app.get("/StationPie", (req,res)=>{
    const q = "SELECT StationType as StationType ,max(stations)+100 as Num FROM carbonreduction group by StationType;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
});


//StationLine

app.get("/StationLine", (req,res)=>{
    const q = "SELECT DATE_FORMAT(Date2, '%Y') as Date, stations+100 as Station FROM emobilitydb.carbonreduction;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
});







//Station Segment
app.get("/StationLine", (req,res)=>{
    const q = "SELECT DATE_FORMAT(Date2, '%Y') as Date, stations+100 as Station FROM emobilitydb.carbonreduction;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
});

//Carbon Reducition
app.get("/CarbonReduction", (req,res)=>{
    const q = "SELECT DATE_FORMAT(Date2, '%Y') as Year, CarbonReduction as kgCO2 FROM emobilitydb.carbonreduction;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
});

//Carbon Reducition DC AC
app.get("/CarbonReductionDCAC", (req,res)=>{
    const q = " SELECT stationModel as Model, Count(stationModel) as CO2 FROM emobilitydb.carbonreduction group by stationModel;"

    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
});




//Date ALL Station DC AC

app.get("/AllStationDCAC", (req,res)=>{
    const q = "SELECT Date2, stations, dc_stations, ac_stations FROM carbonreduction;"
    db.query(q,(err,data)=>{
        if(err) return res.json(err)
        return res.json(data)
    })
});


//Customer Active Inactive

app.get("/activecustomers", (req,res)=>{
    const q = "SELECT Date2, stations*50 as TotalCustomer, ac_stations*50 as ActiveCustomers, dc_stations*50 as InactiveCustomers FROM carbonreduction";
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