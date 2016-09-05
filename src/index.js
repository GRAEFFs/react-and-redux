/**
 * Created by graeff on 31/08/16.
 */
import 'babel-polyfill';
import React from  'react';
import { render } from 'react-dom';
import { Router, browserHistory} from 'react-router';
import routes from './routes';
import './styles/style.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

render(
    <Router history={browserHistory} router={routes} />,
    document.getElementById('app')
);
