import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import { CartProvider } from './contexts/cart.context';
import { CategoriesProvider } from './contexts/categories.context';
// import { UserProvider } from './contexts/user.context';
import { Container } from './main.style.js';
import { Provider } from 'react-redux';

import { store } from './store/store';

ReactDOM.createRoot(document.getElementById('root')).render(
  <Provider store={store}>
    <Container>
      <BrowserRouter>
        <CategoriesProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </CategoriesProvider>
      </BrowserRouter>
    </Container>
  </Provider>
);
