# react-broadcastchannel

This library gives you a simple hook `useChannel` to post or receive message from/to channels.

```tsx
import * as React from 'react';
import { useChannel } from 'react-broadcastchannel';

const App = () => {
  const [count, setCount] = React.useState(0);
  const [post] = useChannel<number>('counter', ev => setCount(ev.data))

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

## API
### useChannel
```ts
const [post] = useChannel<Message>('channel-id', event => event.data)
```