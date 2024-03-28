/*
 *   Copyright (C) 2024 Sellers Industries, Inc.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Mon Mar 11 2024
 *   file: index.ts
 *   project: Metadapter - Events
 *   purpose: Entry
 *
 */


import { Interface } from "./interfaces/abstract.js";
import { PostHog, PostHogConfig } from "./interfaces/PostHog/index.js";
import { Skeleton, SkeletonConfig } from "./interfaces/Skeleton/index.js";
import { ClassByType, Config, ConfigByType, EventID, Payload, Type } from "./model.js";


export function EventInterface<T extends Type>(type:T, config:ConfigByType[T]):Interface {
    if (!Type[type]) {
        throw new Error(`Type ${type.toString()} not supported.`);
    }
    return new (ClassByType[type] as { new(config:ConfigByType[T]):Interface })(config);
}


export { Interface, Type, PostHog, Skeleton };
export type { Payload, Config, EventID, PostHogConfig, SkeletonConfig };


// I write these things to you who believe in the name of the Son of God so
// that you may know that you have eternal life.
// - 1 John 5:13
