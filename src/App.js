import './index.scss';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import Home from './componets/pages/home';
import About from './componets/pages/about';
import NavBar from "./componets/NavBar";
import {Alert} from "./componets/Alarm";
import {AlertState} from "./componets/context/AlertState";
function App() {
  return (
      <AlertState>
          <BrowserRouter>
              <NavBar />
              <div className="container">
                  <Alert />
                  <Switch>
                      <Route path={'/'} exact component={Home} />
                      <Route path={'/about'}  component={About} />

                  </Switch>


              </div>
          </BrowserRouter>
      </AlertState>
  );
}

export default App;
