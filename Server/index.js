const express = require("express");
const cors = require("cors");
const routes = require("./routes");

const app = express();

app.use(express.urlencoded({extended: false}));
app.use(express.json());
app.use(cors());
app.use("/departments", routes.DepartmentRoutes);
app.use("/employees", routes.EmployeeRoutes);
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log("Server running on port: ", PORT);
});



const mongoose = require("mongoose");
mongoose.
    connect("mongodb+srv://tinsaebirhan7:D9EubbEi5lJpDCW1@cluster0.ovqcrvw.mongodb.net/ReserveXP?retryWrites=true&w=majority")
    .then(() => {
        app.getMaxListeners('/blog', (req, res) => {
            res.send("Hello Node API")

        })
        console.log("connected to mongo")
    }).catch((error) => {
        console.log(error)
    })