const express = require('express');
 const   cors = require('cors');
const bodyParser = require('body-parser');
    dbOperations = require('./dbFiles/dbOperation');

const API_PORT = process.env.PORT || 5000;
const app = express();


let client;
let session;
app.use(cors());
app.use(bodyParser.json())
app.use(express.json());
app.use(express.urlencoded());


// app.post('/getcustomer', async (req, res) => {
//     console.log('Called');
//     const result = await dbOperations.getCustomers();
//    console.log('api call')
//     console.log(result);
//     res.send(result)
// })

// app.post('/gethealth', async (req, res) => {
//     console.log('Called');
//     const result = await dbOperations.getHealth();
//    console.log('api call')
//     console.log(result);
//     res.send(result)
// })


// app.post('/getExperience', async (req, res) => {
//     console.log('Called');
//     const result = await dbOperations.getExperience();
//    console.log('api call')
//     console.log(result);
//     res.send(result)
// })


// app.post('/getTraining', async (req, res) => {
//     console.log('Called');
//     const result = await dbOperations.getTraining();
//    console.log('api call')
//     console.log(result);
//     res.send(result)
// })

// app.post('/getMotivation', async (req, res) => {
//     console.log('Called');
//     const result = await dbOperations.getMotivation();
//    console.log('api call')
//     console.log(result);
//     res.send(result)
// })
// app.post('/getCoin', async (req, res) => {
//     console.log('Called');
//     const result = await dbOperations.getCoin(req.body.val);
//    console.log('api call')
//     // console.log(result);
//     res.send(result.recordset)
// })
app.post('/getCoin', async (req, res) => {
    console.log('Called');
    const result = await dbOperations.getCoin();
//    console.log('api call')
    // console.log(result);
    res.send(result.recordset)
})
app.post('/getUser', async (req, res) => {
    console.log('Called');
    const result =  await dbOperations.getUser(req.body.name,req.body.pass);
    // console.log('api call')
        // console.log(result);
    res.send(result.recordset);
})
app.post('/getRecord', async (req, res) => {
    console.log('Called');
    const result = await dbOperations.getRecord(req.body.cnic, req.body.fname, req.body.lname, req.body.email, req.body.city,
    req.body.country,req.body.house,req.body.street,req.body.pass);
    // console.log('api call')
        // console.log(result);
    res.send(result.recordset)
})

app.post('/getUpdate', async (req, res) => {
    console.log('Called');
    const result =  await dbOperations.getUpdate(req.body.name,req.body.pass);
    // console.log('api call')
        // console.log(result);
    res.send(result.recordset)
})
app.post('/getUpdateCoin', async (req, res) => {
    console.log('Called');
    const result =  await dbOperations.getUpdateCoin(req.body.val);
    // console.log('api call')
        // console.log(result);
    res.send(result.recordset)
})
app.post('/getCardinals', async (req, res) => {
    console.log('Called');
    const result =  await dbOperations.getCardinals(req.body.wid,req.body.cnic,req.body.num,req.body.ct);
    // console.log('api call')
        // console.log(result);
    res.send(result.recordset)
})
app.post('/getUpdateAdd', async (req, res) => {
    console.log('Called');
    const result =  await dbOperations.getUpdateAdd(req.body.cnic,req.body.ct);
    // console.log('api call')
        // console.log(result);
    res.send(result.recordset)
})
app.post('/getCardinals1', async (req, res) => {
    console.log('Called');
    const result =  await dbOperations.getCardinals1(req.body.wid,req.body.cnic,req.body.num,req.body.ct);
    // console.log('api call')
        // console.log(result);
    res.send(result.recordset)
})
app.post('/getUpdateDetail', async (req, res) => {
    console.log('Called');
    const result =  await dbOperations.getUpdateDetail(req.body.ctype,req.body.val);
    console.log('api call')
        console.log(result);
    res.send(result.recordset)
})
app.post('/getLogout', async (req, res) => {
    console.log('Called');
    const result =  await dbOperations.getLogout(req.body.bal);
    // console.log('api call')
        // console.log(result);
    res.send(result.recordset)
})
app.post('/quit', function (req, res) {
    console.log('Called Quit');
    res.send({ result: 'Closing' })
})
app.post('/getPending', async (req, res) => {
    console.log('Called');
    const result =  await dbOperations.getPending(req.body.cnic,req.body.value);
    // console.log('api call')
        // console.log(result);
    res.send(result.recordset)
})
app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));


// dbOperations.getCustomers().then(res => {
//     console.log(res);
// })