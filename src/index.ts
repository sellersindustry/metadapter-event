
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
