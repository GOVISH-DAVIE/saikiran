
import './App.css';
import { Home } from './Home/home';
import { About } from './Abaut/about';
import { Route, BrowserRouter as Router, Switch, Link } from 'react-router-dom';
import { Contact } from './contact/contact';

function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li >
            <Link to='/home' > Home</Link> 
          </li>
          <li >
            <Link to='/about' > About</Link>
          </li>
          <li >
            <Link to='/contact' > Contact</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>

      </Router>

    </div>
  );
}

export default App;
