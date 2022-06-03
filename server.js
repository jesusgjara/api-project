const express = require('express')
const app = express()
const PORT = 8000

const rappers = {
    '21 Savage': {
        'age': 29,
        'birthName': 'Shéya Bin Abraham-Joseph',
        'birthLocation': 'London, England'
    },
    'Chance the Rapper': {
        'age': 29,
        'birthName': 'Chancelor Bennet',
        'birthLocation': 'Chicago, Illinois'
    },
    'unknown': {
        'age': 0,
        'birthName': 'unknown',
        'birthLocation': 'unknown'
    }

    
}


app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html')
})

app.get('/api:savage', (req, res) => {
    res.json(savage)
})

app.listen(PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})