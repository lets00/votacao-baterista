import express from 'express'
import cors from 'cors'

const app = express()
app.use(cors())
app.use(express.json())


app.get("/votes", (req, res) => {
    console.log('Votes...')
    const candidates = [
        {
            id: 1,
            name: 'Marco Minneman',
            votes: 1270,
            percentage: 75.3,
            popularity: Math.floor(Math.random() * 11)
        },
        {
            id: 2,
            name: 'Mike Portnoy',
            votes: 1284,
            percentage: 83.2,
            popularity: Math.floor(Math.random() * 11)
        },
        {
            id: 3,
            name: 'Neil Peart',
            votes: 2356,
            percentage: 70.8,
            popularity: Math.floor(Math.random() * 11)
        },
    ]
    res.json(candidates)
})

app.listen(8080, (err, msg) => {
    console.log("Processo em execução na porta 8080")
})