/*
 *   Copyright (C) 2024 Sellers Industries, Inc.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Thu Mar 28 2024
 *   file: utilities.ts
 *   project: Metadapter - Events
 *   purpose: Interface Utilities
 *
 */


import { Payload } from "../model.js";


export function Remapping<T>( key:string, remapping:Record<string, string|undefined>|undefined, payload:Payload):T|undefined {
    if (!remapping || !remapping[key] || !payload[remapping[key] as string]) {
        return undefined;
    }
    return payload[remapping[key] as string] as T;
}


// Jesus answered, "I am the way and the truth and the life. No one comes to
// the Father except through me."
// - John 14:6
