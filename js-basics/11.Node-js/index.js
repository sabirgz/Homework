const express = require('express')
const bodyParser = require('body-parser')
require('colors')

const app = express()
app.use(bodyParser.json())

const users= [
    {
        id: 1,
        username: 'Nihad'
    },
    {
        id: 2,
        username: 'Sabir'
    },
    {
        id: 3,
        username: 'Fatime'
    },
]

app.get('/', (req, res) => {
    res.send(users)
})
app.get('/', (req, res) => {
    res.send(users)

})
app.get('/:id', (req, res) => {
    const { id } = req.params
    const user = users.find((item) => item.id == id)
    if (user) {
        res.status(200).json(user)
    } else {
        res.status(404).json('User not found with the a give id!!!')
    }
})
app.post('/',(req,res) => {
    const userBody = req.body
    users.push(userBody)
    res.status(201).json('User has been created successfully')
}
)

const PORT = 5000
app.listen((PORT), () => console.log(`Server is running: http://localhost:${PORT}`.bold.green))


