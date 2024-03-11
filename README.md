
# Metadapter - Event Logging
![NPM Version](https://img.shields.io/npm/v/metadatper-event)

[Metadapter](https://github.com/sellersindustry/metadapter) Universal Adapter
for event logging systems like PostHog. Implement interface for event logging
and let your user choice which event logging service they utilize.

> **Note**
> If you have a service you would like to support, please add it and make a pull request. It's super easy! *Please refrain from using additional libraries or it will make the code too bloated.*

## Features
- ✅ [Metadapter](https://github.com/sellersindustry/metadapter) Universal Adapter
- ✅ Supports PostHogs
- ✅ Specify adapter or use dynamic config adapter


## Installation
```
npm install metadapter-event
```


## Example Initiation
```typescript
// sherpa.server.ts
import { Type, EventInterface, PostHog } from "metadapter-event";

// Specify Type w/ Enum
EventInterface(Type.PostHog, { "api_key": "***" });

// Specify Type w/ String
EventInterface("PostHog", { "api_key": "***" });

// Specify Type w/ Class
PostHog({ "api_key": "***" });
```


## Methods
| Method | Description |
| ------ | ----------- |
| `add(event: EventID, payload?: Payload, userID?: string): Promise<void>` | Adds an event to the logging system. |
