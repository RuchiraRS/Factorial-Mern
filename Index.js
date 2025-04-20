let express=require("express");
let cors=require("cors");

let app=express() //creates an object of server
app.use(cors());
app.get("/ping",(request,response)=>{response.send("Please enter a number")});
app.get("/num",(req,res)=>{

        let str=req.query.number;
        let n=parseInt(str);
        let fact=1;
        for(let i=1;i<=n;i++)
        {
            fact=fact*i;
        }
        res.send(`Factorial=${fact}`);
    }
)

app.listen(9000,()=>{console.log("Express is active");})