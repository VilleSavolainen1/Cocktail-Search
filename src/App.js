import React, { useState, useEffect } from 'react';
import './App.css';
import {
  BrowserRouter as Router, Switch, Route, Link,
} from 'react-router-dom';
import axios from 'axios';
import Header from './components/header/header';
import About from './components/about/about';
import Content from './components/content/content';

function App() {
  const [items, setItems] = useState([]);

  useEffect(async () => {
    const res = await axios.get('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a');
    setItems(res.data.drinks);
  }, []);

  return (
    <Router>
      <div className="container">
        <header className="header">
          <Header Link={Link} setItems={setItems} />
        </header>
        <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Content items={items} setItems={setItems} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
