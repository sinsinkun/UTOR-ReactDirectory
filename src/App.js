import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Homepage from './components/Homepage';
import Page404 from './components/Page404';

function App() {
  return (
    
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        {/* Navbar */}
        <Navbar />
        {/* Main body */}
        <div className="container-md">
          <Switch>
            <Route exact path="/"><Homepage /></Route>
            <Route><Page404 /></Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
