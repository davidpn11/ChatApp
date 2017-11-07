'use strict';


//Libs
import angular from 'angular';
import firebase from 'firebase/app';
import angularfire from 'angularfire/dist/angularfire';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import 'tachyons/css/tachyons.min.css';
import uirouter from 'angular-ui-router';
import routes from './main.routes';
import styles from './app/styles.scss';

require('./main.scss');

var config = {
    apiKey: "AIzaSyA8Yr7WOjcWw8qqNEOcv5F0K0FGRimOlLU",
    authDomain: "chatapp-6f215.firebaseapp.com",
    databaseURL: "https://chatapp-6f215.firebaseio.com",
    projectId: "chatapp-6f215",
    storageBucket: "chatapp-6f215.appspot.com",
    messagingSenderId: "687631445091"
  };
  firebase.initializeApp(config);

//modules
import contacts from './app/contacts'
import messages from './app/messages'
import login from './app/login'


angular.module('ChatApp',['ui.router', contacts, messages, login, 'firebase'])
    .config(routes);



