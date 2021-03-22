import './index.scss';
import {BrowserRouter, Route, Switch, Redirect} from "react-router-dom";
import {Header} from "./componets/header";
import {Main} from "./componets/content";

function App() {
  return (
      <>
        <Header />
        <Main />
      </>
  );
}

export default App;
