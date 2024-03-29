/*
 *   Copyright (C) 2024 Sellers Industries, Inc.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Mon Mar 11 2024
 *   file: index.ts
 *   project: Metadapter - Events
 *   purpose: PostHog Interface
 *
 */


import { Interface } from "../abstract.js";
import { Remapping } from "../utilities.js";
import { EventID, Payload } from "../../model.js";


export class PostHog implements Interface {

    private config: PostHogConfig;


    constructor(config:PostHogConfig) {
        this.config = config;
    }


    async add(event:EventID, payload?:Payload):Promise<void> {
        await fetch("https://app.posthog.com/capture", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                api_key: this.config.api_key,
                distinct_id: Remapping("distinct_id", this.config.remapping, payload),
                event: event,
                properties: payload
            })
        });
    }
    
}


export type PostHogConfig = {
    api_key:string;
    remapping?: {
        distinct_id?:string;
    };
};


// However, do not rejoice that the spirits submit to you, but rejoice that
// your names are written in heaven.
// - Luke 10:20
