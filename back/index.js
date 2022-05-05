const fs      = require('fs');
const express = require('express');
const app     = express(); 
const http    = require('http');
const server  = http.createServer(app);
const bodyParser = require('body-parser');
const cors = require('cors')

app.use(cors())

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/language/nav/:lang' , async function(req, res ) {
    try {
        if(req.params.lang) {
            await fs.readFile( `./resources/${req.params.lang}/nav.json` , 'utf-8', (err , data)=> {
                data ? res.status(200).json(JSON.parse(data)) : res.status(400).send({error: 'file not found'})
            })
        }   
    } catch (error) {
        res.status(400).send({error: 'file not found'})
    }
   
})

app.post('/language/:choice/:language' , function(req , res ){
    try {

        const body = req.body
        const choiceNavOrContent = req.params.choice
        let filename = ''

        choiceNavOrContent === 'nav' ? filename = 'nav.json' : filename = 'content.json'
        
        const url = filename ? `./resources/${req.params.language}/${filename}` : `./resources/${req.params.language}/nouveaufichier2.json`

        fs.writeFile(url , JSON.stringify(req.body.formContent) , (err) => {
            if(err) throw err
            res.status(200).send({status: 'CREATED' , message: 'File created' });
        })
    } catch (error) {
        res.status(404).send({status: 'NOT CREATED' , message: error.message })
    }

})

server.listen(3000 , ()=>{
    console.log('app listening on port 3000..')
});