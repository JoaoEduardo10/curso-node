const { read } = require('fs')
const http = require('http')

const port = 8080

const serve = http.createServer((req, res) => {
    if(req.url ==='/home') {
        res.writeHead(200, {'Content-Type': 'text/html'})
        res.end('<h1>Hello world</h1>')
    }

    if(req.url === '/users') {
        const users = [
            {
                name: 'João',
                email: 'joao@gmail.com'
            },
            {
                name: 'Edurdo',
                email: 'Eduardo@gmail.com'
            },
        ]

        res.writeHead(200, {'Content-Type': 'application/json'})
        res.end(JSON.stringify(users))
    }
})


serve.listen(port, () => console.log(`Rodando na port ${port}`))