import React from 'react';
import './App.css';
import { Switch, BrowserRouter as Router, Route } from 'react-router-dom';
import {
  MainPage,
  UseRefComponent,
  UseStateComponent,
  UseEffectComponent,
  UseLayoutEffectComponent,
  UseMemoComponent,
  UseCallbackComponent,
  CustomHookComponent,
  UserReducerComponent,
  UseContextComponent,
} from './pages';
import NavBar from './pages/components/NavBar';
function App() {
  return (
    <Router>
      <NavBar />
      <div>
        <Switch>
          <Route exact path="/exercise1" component={UseStateComponent} />
          <Route exact path="/exercise2" component={UseRefComponent} />
          <Route exact path="/exercise3" component={UseEffectComponent} />
          <Route exact path="/exercise4" component={UseLayoutEffectComponent} />
          <Route exact path="/exercise5" component={UseMemoComponent} />
          <Route exact path="/exercise6" component={UseCallbackComponent} />
          <Route exact path="/exercise7" component={CustomHookComponent} />
          <Route exact path="/exercise8" component={UserReducerComponent} />
          <Route exact path="/exercise9" component={UseContextComponent} />
          <Route exact path="/" component={MainPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
