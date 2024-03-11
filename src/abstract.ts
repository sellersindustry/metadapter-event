import { EventID, Payload } from "./model.js";


export interface Interface {
    add(event:EventID, payload?:Payload, userID?:string):Promise<void>
}

