const express = require("express")
const app = express()
const axios = require("axios")
const port = process.env.PORT || 3000

app.use(express.json())
app.get("/desafiotake", async (req, res) => {
    try {
        const { data } = await axios.get("https://api.github.com/users/takenet/repos")
        const formatado = data.filter(repos => repos.language == "C#")
        
        const results =  data 
        ? desafiotake.filter(takerepos => takerepos.title.includes(formatado))
        : desafiotake;


        return res.json(formatado)



        

    } catch (error) {
        console.log(error)
    }
})
app.listen(port, ()=>{
    console.log("Servidor rodando")
})