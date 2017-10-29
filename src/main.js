'use strict';


//Libs
import angular from 'angular';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import 'tachyons/css/tachyons.min.css';
import uirouter from 'angular-ui-router';
import routes from './main.routes';
require('./main.scss');

//components
import contactsList from './app/contacts/contacts.component'
import navHeader from './app/navHeader/navHeader.component'
import messageBox from './app/messages/messageBox/messagebox.component'
import messageSender from './app/messages/messageSender/messagesender.component'


angular.module('ChatApp',['ui.router'])
.component('contactsList',contactsList)
.component('navHeader',navHeader)
.component('messageBox',messageBox)
.component('messageSender',messageSender)
.config(routes);


