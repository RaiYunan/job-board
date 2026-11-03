import express from "express";
import type { Request,Response } from "express";

const app=express();
const port=Number(process.env.PORT) || 3000;

app.use(express.json());

app.get("/health",(_req:Request,res:Response)=>{
    res.json({status:"ok"});
});

app.listen(port,()=>{
    console.log(`Server running on http://localhost:${port}`);
});