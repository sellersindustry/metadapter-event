
export enum Type {
    PostHog = "PostHog"
}

export type Payload = Record<string, any>;

export type Config  = Record<string, string|boolean|number>;

export type EventID = string;
