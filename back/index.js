const fs      = require('fs');
const fse = require('fs/promises');
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


app.post('/language/:choice/:language' ,async function(req , res ){
    try {

        const { body , choiceOfContent , language } = req.body
        let filename = ''
        choiceOfContent === 'nav' ? filename = 'nav.json' : filename = 'content.json'
        
        const url = `./resources/${language}/${filename}`

        const dataAll = await fse.readFile( url , 'utf-8')

        const rest = JSON.parse(dataAll)

        rest.push(body)

        fs.writeFile(url , JSON.stringify(rest) ,  (err) => {
            if(err) throw err
            res.status(200).send({status: 'CREATED' , message: 'File created' });
        })

    } catch (error) {
        res.status(404).send({status: 'NOT CREATED' , message: error.message })
    }

})


app.get('/language/:language' , async function(req , res) {

    try {
        const language = req.params.language ? req.params.language : res.status(400).send({error: 'Language not provided'})
        
        let data = {}
        
        try {
            data.nav =  await fse.readFile(`./resources/${language}/nav.json`, { encoding: 'utf8' });
            data.content =  await fse.readFile(`./resources/${language}/content.json`, { encoding: 'utf8' } );
        } catch (error) {
           res.status(400).send({error: "File not found" , detail: error})
        }
    
        data.nav = JSON.parse(data.nav)
        data.content = JSON.parse(data.content)

        res.status(200).send({
            data
        })
      

    } catch (error) {
        
    }
})
server.listen(3000 , ()=>{
    console.log('app listening on port 3000..')
});