import express, { Request, Response } from "express";

import {
    baseUrl,
    asyncHandler
} from "./net.js";


export function routes() {
    var router = express.Router();

    const runningSince = new Date();
    router.get( "/status", function( req: Request, res: Response ) {
        res.json({
            name:"Agentic Profile Test Service",
            version:[1,0,0], 
            started: runningSince,
            url:baseUrl(req) 
        }); 
    });

    return router;
}
