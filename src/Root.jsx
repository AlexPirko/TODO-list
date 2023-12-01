import { Provider } from "react-redux";
import App from './components/App';


export const Root = ({store}) => (
  <Provider store={store}>
    <App />
  </Provider>
);