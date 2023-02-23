const express = require('express')
const app = express()
const port = 3000
app.use('/', express.static('./dist/tata-cv-online/browser'))//set the static path 
app.set('view engine', 'pug');



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
