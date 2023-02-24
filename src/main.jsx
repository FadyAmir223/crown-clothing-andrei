import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { Container } from './main.style.js';
import { Provider } from 'react-redux';

import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Container>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Container>
  </Provider>
);
