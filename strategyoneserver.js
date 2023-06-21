const express = require('express')
const app = express()
const path = require('path')

app.use(express.json())
app.use(express.static(path.join(__dirname, '/public')))

//  middleware to handle form data
app.use(express.urlencoded({
    extended: false
}))


app.get('*', (req, res) => {
    res.sendFile('./index.html')
})


app.listen(5000, function () {
    console.log('listening on port: 5000');
});