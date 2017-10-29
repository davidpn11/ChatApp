'use strict';
import angular from 'angular';
import 'materialize-css/dist/css/materialize.css';
import 'materialize-css/dist/js/materialize.js';
import 'tachyons/css/tachyons.min.css';
import uirouter from 'angular-ui-router';
import routes from './main.routes';
// import contacts from './app/contacts'
require('./main.scss');

angular.module('ChatApp',['ui.router'])
.controller('testeController',testeController)
.config(routes);

function testeController() {
    console.log('foi o teste');
    this.teste = "testes";
}


