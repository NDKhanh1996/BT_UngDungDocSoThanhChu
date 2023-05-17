import {handle} from "./src/handle";

const http = require('http')
const fs = require('fs');
const PORT: number = 8080;
export let dataInput = ''

const server = http.createServer((req, res) => {
    if (req.method === 'GET') {
        fs.readFile('./views/input.html', "utf-8", (err, data) => {
            if (err) {
                res.writeHead(404, {'Content-Type': 'text/html'});
                return res.end('404 NOT FOUND');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.write(data);
                return res.end();
            }
        })
    } else {
        req.on('data', chunk => {
            dataInput = ''
            dataInput += chunk;
            console.log(dataInput)
        });
        req.on('end', () => {
            fs.readFile('./views/input.html', "utf-8", (err, data) => {
                res.writeHead(200, {'Content-Type': 'text/html'});
                data = data.replace("none", handle.allMethod());
                res.write(data);
                return res.end();
            });
        });
        req.on('error', () => {
            return res.end('error')
        });
    }
});
server.listen(PORT, 'localhost', () => {
    console.log('server is running')
})