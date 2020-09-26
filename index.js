// const express= require('express');
// const app = express();


// const data = {
//     name : 'tamim sarkar',
//     age : 19,
//     des : 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem praesentium eius iure!',

// }
// const users = ['tamim','rahim','kabbo', 'ramim','saimon']
// app.get('/fakeperson/data' , (req, res) => {
//     res.send(data)          // getting the API 
// })
// app.get('/users/:id' ,(req,res) => {
//     const userId = req.params.id;
//     const name = users[userId]
//     res.send({userId,name})
// })
// app.listen(1200,console.log('YaY,we are doing with the node exress'))


const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express();
app.use(cors())
app.use(bodyParser.json());
const users = ['tamim','sarkar','ittadi','newbie','and many more']

app.get('/users/:id',(req,res) => {
    const id = req.params.id;
    const name = users[id]
    res.send({id,name})
})
app.get('/',(req,res) => {
    res.send('yahooo!! We are in Node JS')
})
app.post('/addUser' , (req,res) => {
    const user = req.body;
    user.id = 22;
    res.send(user)
})
app.listen(3000,console.log('listening port 3000'))