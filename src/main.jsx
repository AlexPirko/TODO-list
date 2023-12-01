import './styles/index.css';

import ReactDOM from 'react-dom/client';

import { cofigureStore } from './store';
import { Root } from './Root';

const store = cofigureStore();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Root store={store} />);
