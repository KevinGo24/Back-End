import app from "./server.js"

(()=>{
console.log('puerto activo')
    app.listen(3000, ()=>{
        console.log('me escuchas ?')
        app.get('',(req,res)=>{
        res.send('si te escucho ')
    })
    })()
    
})()



export default app;