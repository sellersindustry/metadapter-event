/*
 *   Copyright (C) 2024 Sellers Industries, Inc.
 *   distributed under the MIT License
 *
 *   author: Evan Sellers <sellersew@gmail.com>
 *   date: Mon Mar 11 2024
 *   file: model.ts
 *   project: Metadapter - Event
 *   purpose: Models
 *
 */


import { PostHog, PostHogConfig } from "./interfaces/PostHog/index.js";
import { Skeleton, SkeletonConfig } from "./interfaces/Skeleton/index.js";

export enum Type {
    PostHog = "PostHog",
    Skeleton = "Skeleton"
}

export const ClassByType = {
    [Type.PostHog]: PostHog,
    [Type.Skeleton]: Skeleton
};

export type ConfigByType = {
    [Type.PostHog]: PostHogConfig,
    [Type.Skeleton]: SkeletonConfig
};

export type Payload = Record<string, any>;

export type Config  = Record<string, string|boolean|number>;

export type EventID = string;


// Here is a trustworthy saying: If we died with him, we will also live with him.
// - 2 Timothy 2:11
