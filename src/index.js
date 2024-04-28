import React from 'react';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter, Routes, Route
} from 'react-router-dom';
import { AppProvider } from './context.';
import './index.css';
import Home from './pages/Home/Home';
import { Auth0Provider } from '@auth0/auth0-react';
import About from "./pages/About/About";
import BookList from "./components/BookList/BookList";
import BookDetails from "./components/BookDetails/BookDetails";
import Shelf from "./pages/Shelf/Shelf";
import App from './App';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Auth0Provider
    domain="dev-cdqdfsgvze47rz4n.us.auth0.com"
    clientId="jp3Gfx43qDZAa8RjhUXFNWKUpsKCmsol"
    authorizationParams={{
      redirect_uri: window.location.origin
    }}
  >
  <AppProvider>
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<Home />}>
          <Route path = "about" element = {<About />} />
          <Route path = "shelf" element = {<Shelf />} />
          <Route path = "book" element = {<BookList />} />
          <Route path = "/book/:id" element = {<BookDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
    <App/>
  </AppProvider>
  </Auth0Provider>
);

