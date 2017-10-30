'use strict';


//Libs
import angular from 'angular';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import 'tachyons/css/tachyons.min.css';
import uirouter from 'angular-ui-router';
import routes from './main.routes';
import styles from './app/styles.scss';

require('./main.scss');

//modules
import contacts from './app/contacts'
import messages from './app/messages'

angular.module('ChatApp',['ui.router', contacts, messages])
    .config(routes);


