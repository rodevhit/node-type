import express, { Application } from "express";
import { Utils } from "./Utils";

export class Server {

    app: Application = express();
    port: number = 8000;
    public createServer() {

        this.app.get('/', (req, res, next) => {
            console.log(req.url);
            res.send('Looking for default route');
        })
        
        this.app.listen(8000);
        console.log(`Server started on port: ${this.port}`);

    }
}