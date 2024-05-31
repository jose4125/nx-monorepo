// eslint-disable-next-line @typescript-eslint/no-unused-vars
import styles from './app.module.scss';

import { NxWelcome } from './nx-welcome';

export function App() {
  return (
    <div>
      <NxWelcome title="app-root" />
      <p>hola mundo</p>
    </div>
  );
}

export default App;
