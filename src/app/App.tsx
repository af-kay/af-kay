import { Link } from '@reach/router';
import AppRouting from './AppRouting';

export default function App() {
  return (
    <div>
      <nav>
        <Link to="/">Home</Link> <Link to="/fun">Fun</Link>
      </nav>
      <main>
        <AppRouting />
      </main>
    </div>
  );
}
