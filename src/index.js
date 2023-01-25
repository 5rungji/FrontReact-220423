import React from 'react'; //리액트 기본 명령여
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import ScrollToTop from './pages/scroll_to_top';

export { default as Home } from './pages/home';
export { default as Brand } from './pages/brand';
export { default as Portfolio } from './pages/portfolio';
export { default as Project } from './pages/project';
export { default as Shop } from './pages/shop';

ReactDOM.render(
  <BrowserRouter>
    <ScrollToTop />
    <App />
  </BrowserRouter>,
  document.getElementById('root')
);
