# react-broadcastchannel
![GitHub Workflow Status](https://img.shields.io/github/workflow/status/BasixKOR/react-broadcastchannel/CI?style=flat-square)
![npm bundle size](https://img.shields.io/bundlephobia/min/react-broadcastchannel?style=flat-square)
![npm](https://img.shields.io/npm/dy/react-broadcastchannel?style=flat-square)

This library gives you a simple hook `useBroadcastChannel` to post or receive message from/to channels.

```tsx
import * as React from 'react';
import { useBroadcastChannel } from 'react-broadcastchannel';

const App = () => {
  const [count, setCount] = React.useState(0);
  const [post] = useBroadcastChannel<number>('counter', ev => setCount(ev.data))

  const handler = () => {
    post(count + 1);
    setCount(count => count + 1);
  }

  return (
    <div>
      <button onClick={handler}>
        {count}
      </button>
    </div>
  );
};
```

## What is BroadcastChannel API?
[BroadcastChannel API](https://developer.mozilla.org/en-US/docs/Web/API/BroadcastChannel) allows to communicate between browsing contexts such as iframes, browser tabs, or even workers on the same origin.

## API
### useBroadcastChannel
```ts
const [post] = useBroadcastChannel<Message>('channel-id', event => event.data)
```