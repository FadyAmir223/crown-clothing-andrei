import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import App from './App';
import { Container } from './main.style.js';
import { store, persistor } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <PersistGate persistor={persistor} loading={null}>
      <Container>
        <BrowserRouter>
          <App />
        </BrowserRouter>
      </Container>
    </PersistGate>
  </Provider>
);
