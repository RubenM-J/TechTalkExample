import express from 'express';
import bodyParser, { BodyParser } from 'body-parser';

const port = 3000;

class App {
    public express;

    constructor () {
        this.express = express();
        this.mountRoutes();
    }

    private mountRoutes (): void {
        this.express.use(express.json())
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({extended: true}));
        
        //Your routes here, run "npm i" in terminal first. To execute run "npm run app"
        
        //this.express.use("/example", exampleRoute);

        this.express.listen(port, () => {
            console.log(`Example app listening at http://localhost:${port}`);
        });
    }
}

export default new App().express