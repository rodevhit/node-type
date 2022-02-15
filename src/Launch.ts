import { Server } from "./Server/Server";

class Launch {
    private server: Server;

    constructor() {
        this.server = new Server();    
    }

    public launchApp(){
        this.server.createServer();
    }
}

new Launch().launchApp();