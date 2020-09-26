const express= require('express');
const app = express();

app.get('/',(req,res)=>{
    res.send('Hello World,Today we are gonna moving on the node')
})

app.listen(1200,console.log('YaY,we are doing with the node exress'))