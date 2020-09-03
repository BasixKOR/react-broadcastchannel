import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useChannel } from '../.';

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

ReactDOM.render(<App />, document.getElementById('root'));
