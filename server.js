import express from 'express';

const app = express ()
app.listen(3000, () =>{
    console.log ("Servidor escutando...");
});

app.get ("/naty", (req, res) =>{
res.status(200). send("Boas vindas à imersão!");
});