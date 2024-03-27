
# Metadapter - Event Logging
![NPM Version](https://img.shields.io/npm/v/metadapter-event)

[Metadapter](https://github.com/sellersindustry/metadapter) universal adapter
for event logging systems like PostHog. Implement interface for event logging
and let your user choice which event logging service they utilize.

> [!IMPORTANT]
> If you have a service you would like to support, please add it and make a pull request. It's super easy! *Please refrain from using additional 3rd party libraries as it will make the code too bloated.*


<br>


## Features
- ✅ [Metadapter](https://github.com/sellersindustry/metadapter) Universal Adapter
- ✅ Supports [PostHog](https://posthog.com)
- ✅ Supports Skeleton (console logging for prototyping)
- ✅ Specify adapter or use dynamic config adapter


<br>


## Installation
```
npm install metadapter-event
```


<br>


## Platforms

| Platform | Type | Config |
|---|---|---|
| [PostHog](https://posthog.com) | `PostHog` | `{ api_key:string }` |
| Skeleton (Console for Prototyping) | `Skeleton` | `{}` or `undefined` |


<br>


## Example Initiation
```typescript
// sherpa.server.ts
import { Type, EventInterface, PostHog } from "metadapter-event";

// Specify Type w/ Enum
EventInterface(Type.PostHog, { "api_key": "***" });

// Specify Type w/ String
EventInterface(Type["PostHog"], { "api_key": "***" });

// Specify Type w/ Class
PostHog({ "api_key": "***" });
```


<br>


## Methods

## Add Event
`add(event: EventID, payload?:Payload, userID?:string): Promise<void> | void` \
Adds an event to the system.

**Parameters:**
- `event` (EventID/string): The ID of the event to be added.
- `payload` (Payload/JSON, optional): Additional data associated with the event. Default is `undefined`.
- `userID` (UserID/string, optional): The ID of the user associated with the event. Default is `undefined`.

**Returns:**
- If the function is asynchronous and returns a Promise, it resolves to `void`.
- If the function is synchronous, it returns `void`.

