const axios = require("axios")
const bodyParser = require('body-parser')

const express = require("express")

const app = express()

const PORT = 8080

const cors = require('cors');
app.use(cors({origin: "*"}));

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(express.json());


app.post("/api/predict", (req, res) => {
    console.log(req.body)
    const data = req.body.data
    const payload = {}
    for(let i=0; i<data.length; i++){
        payload[`'${data[i]}'`] = 1
    }
    console.log(payload)
    axios({
        method: 'post',
        url: 'https://diseasefastapi.herokuapp.com/predict',
        data: payload
      })
      .then((response) => {
        console.log(response)
        res.status(200).json(response.data)
      })
      .catch((err) => {
        console.log(err)
      })
})

app.listen(PORT, (req, res) => {
    console.log("Listening on PORT: ", PORT)
})