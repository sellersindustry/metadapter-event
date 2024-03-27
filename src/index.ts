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


import { Interface } from "./interfaces/abstract.js";
import { PostHog, PostHogConfig } from "./interfaces/PostHog/index.js";
import { Skeleton, SkeletonConfig } from "./interfaces/Skeleton/index.js";
import { InitProperties, ClassByType, Config, ConfigByType, EventID, Payload, Type } from "./model.js";


export function EventInterface<T extends Type>(type:T, config:ConfigByType[T]):Interface {
    if (!Type[type]) {
        throw new Error(`Type ${type.toString()} not supported.`);
    }
    return new (ClassByType[type] as { new(config:ConfigByType[T]):Interface })(config);
}


export function EventInterfaceByProperties<T extends Type>(properties:InitProperties<T>):Interface {
    return EventInterface(properties.type, properties.config);
}


export { Type, PostHog, Skeleton };
export type { Payload, Config, EventID, PostHogConfig, SkeletonConfig, InitProperties };


// I write these things to you who believe in the name of the Son of God so
// that you may know that you have eternal life.
// - 1 John 5:13
