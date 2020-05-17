import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import 'bootstrap/dist/css/bootstrap.css';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route, Switch } from "react-router-dom";


import Result from "./components/Result";
import Top10 from "./components/Top10";


const rootElement = document.getElementById("root");
    ReactDOM.render(
      <BrowserRouter>
       <Switch>
        <Route exact path="/" component={App} />
        <Route path="/Result" component={Result} />
        <Route path="/Top10" component={Top10}/>
        <Route path="/Broker" component={() => {
    global.window && (global.window.location.href = 'https://rabbitfinance.com/other/sbito');
    return null;
    }}
/>
<Route path="/News" component={() => {
    global.window && (global.window.location.href = 'https://www.kaohoon.com');
    return null;
    }}
/>

      </Switch>
      </BrowserRouter>,
      rootElement
    );



// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
