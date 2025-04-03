//server som lyssnar på inkommande requests från klienten
import { createServer } from 'http';
import { handleRequest } from './routes/users.js';

const port = 8000;

const server = createServer((req, res) => {
    //CORS-headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET'); 
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    handleRequest(req, res);
});

server.listen(port, () => console.log(`Server running on http://localhost:${port}`));