const express = require("express")
const app = express()
const axios = require("axios")
const port = process.env.PORT || 3000

app.use(express.json())
app.get("/desafiotake", async (req, res) => {
    try {
        const { data } = await axios.get("https://api.github.com/users/takenet/repos?sort=created&direction=asc")
        const formatado = data.filter(repos => repos.language == "C#")
        const busca = []

        let count = 1
        let teste = formatado.map(items => {
            if (count <= 5) {
                count++
                busca.push({
                    name: items.name,
                    description: items.description,
                    avatar_url: items.owner.avatar_url,
                })
            }
        })

        console.log(formatado)
       
        console.log(busca)
        return res.json(busca)

        



        

    } catch (error) {
        console.log(error)
    }
})
app.listen(port, ()=>{
    console.log("Servidor rodando")
})