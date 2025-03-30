import {createServer} from 'http';
const PORT = process.env.PORT;

const users = [
    {id : 1, name : 'Vijeth'},
    {id : 2, name : 'Varshini'},
    {id : 3, name : 'Sujan'},
];

const server = createServer((req,res) => {
    if(req.url === '/api/users' && req.method === 'GET'){
        res.setHeader('Content-Type', 'application/json');
        res.write(JSON.stringify(users));
        res.end();
    }
})

server.listen(PORT , () =>{
    console.log(`Server listening on port : ${PORT}`)
})