import { createRoot } from 'react-dom/client'
import './reset.css'
import './index.css'
import Todo from './Todo';

const root = createRoot(document.getElementById('root'))

root.render(<Todo />);