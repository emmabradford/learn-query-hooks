import logo from './logo.svg';
import './App.css';
import {Switch, Route, Redirect } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path={"/"} exact component={}/>
        <Route path={"/post/:id"} component={}/>
        <Redirect to={"/"} />
      </Switch>
    </div>
  );
}

export default App;
