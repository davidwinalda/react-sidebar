import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";

import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';

const App = () => {
  
  // ARRAY OF OBJECT
  const routes = [
    {
      path: "/",
      exact: true,
      main: () => <Home />
    },
    {
      path: "/about",
      main: () => <About />
    },
    {
      path: "/contact",
      main: () => <Contact />,
    }
  ]

  return (
    <Router>
    <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "20%",
            background: "#f0f0f0",
            height: "100vh"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
  </Router>
  );
}

export default App;
