/*
 *   Copyright (C) 2024 Sellers Industries, Inc.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Mon Mar 11 2024
 *   file: abstract.ts
 *   project: Metadapter - Events
 *   purpose: Abstract Interface
 *
 */


import { EventID, Payload } from "../model.js";


export interface Interface {
    add(event:EventID, payload?:Payload):Promise<void>|void
}


// So we fix our eyes not on what is seen, but on what is unseen, since what
// is seen is temporary, but what is unseen is eternal.
// - 2 Corinthians 4:18
