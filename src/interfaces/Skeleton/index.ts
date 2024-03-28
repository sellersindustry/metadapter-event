/*
 *   Copyright (C) 2024 Sellers Industries, Inc.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Wed Mar 27 2024
 *   file: index.ts
 *   project: Metadapter - Events
 *   purpose: Skeleton Interface
 *
 */


import { Interface } from "../abstract.js";
import { EventID, Payload } from "../../model.js";


export class Skeleton implements Interface {

    constructor() {}

    add(event:EventID, payload?:Payload):void {
        console.log(`[Metadapter Event] - ${event}`);
        if (payload) {
            console.log(`  ${JSON.stringify(payload)}`);
        }
    }
    
}


export type SkeletonConfig = undefined|null|Record<string, never>;


// You are the light of the world. A town built on a hill cannot be hidden.
// - Matthew 5:14
