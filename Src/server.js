import express  from 'express';
const app = express();
export default app;
app.get('',(req,res)=>{
    res.send('si te escucho ')
    res.status(200).json({
        id:1,
        name:kevin,
        age:23
    })
})


export default app;