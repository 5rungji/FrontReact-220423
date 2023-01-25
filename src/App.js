import React from 'react';
import './App.css';
import { Route } from 'react-router-dom';

import Header from './components/header';
import { Home, Brand, Portfolio, Project, Shop } from './index';
import QMn from './components/q_mn';
import Footer from './components/footer';

function App() {
  return (
    <div>
      <Header />
      <Route exact path="/" component={Home} />
      <Route path="/brand" component={Brand} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/project" component={Project} />
      <Route path="/shop" component={Shop} />
      <Footer />
      <QMn />
    </div>
  );
}

export default App;
