import React from 'react';
import ReactDOM from 'react-dom';
import { Route, BrowserRouter as Router, Switch} from 'react-router-dom'
import './index.scss';
import App from './App';
import Home from './Home'
import NotFound from './Components/NotFound'
import Loading from './Components/Loading'
import * as serviceWorker from './serviceWorker';

const Routing = (
    <Router>
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/home" component={Home} />
            <Route path="/loading" component={Loading} />
            <Route component={NotFound} />
        </Switch>
    </Router>
)

ReactDOM.render(Routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
