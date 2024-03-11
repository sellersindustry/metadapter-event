import { Interface } from "../abstract.js";
import { EventID, Payload } from "../model.js";


export class PostHog implements Interface {

    private config: PostHogConfig;


    constructor(config:PostHogConfig) {
        this.config = config;
    }


    async add(event:EventID, payload?:Payload, userID?:string):Promise<void> {
        await fetch("https://app.posthog.com/capture", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                api_key: this.config.api_key,
                distinct_id: userID,
                event: event,
                properties: payload
            })
        });
    }
    
}


export type PostHogConfig = {
    "api_key":string
};

