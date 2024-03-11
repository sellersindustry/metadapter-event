/*
 *   Copyright (C) 2024 Sellers Industries, Inc.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Mon Mar 11 2024
 *   file: index.ts
 *   project: Metadapter - Event
 *   purpose: Entry
 *
 */


import { Interface } from "./abstract.js";
import { PostHog, PostHogConfig } from "./interfaces/post-hog.js";
import { Config, EventID, Payload, Type } from "./model.js";


export function EventInterface(type:Type, config:any):Interface {
    if (type === Type.PostHog) {
        return new PostHog(config);
    }
    throw new Error(`Type ${type} not supported.`);
}


export { Type, PostHog };
export type { Payload, Config, EventID, PostHogConfig };


// I write these things to you who believe in the name of the Son of God so
// that you may know that you have eternal life.
// - 1 John 5:13
