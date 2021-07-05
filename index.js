const express = require("express")
const app = express()
const axios = require("axios")


app.use(express.json())
app.get("/desafiotake", async (req, res) => {
    try {
        const { data } = await axios.get("https://api.github.com/users/takenet/repos")
        const formatado = data.filter(repos => repos.language == "C#")
        return res.json(formatado)

        

    } catch (error) {
        console.log(error)
    }
})
app.listen(3000, ()=>{
    console.log("Servidor rodando")
})