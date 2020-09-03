import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { useChannel } from '../.';

const App = () => {
  const post = useChannel<string>('test')

  return (
    <div>
      <input />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
