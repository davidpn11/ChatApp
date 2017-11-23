import angular from 'angular'
import contactsList from './contactsList/contactsList.component'
import navHeader from './navHeader/navHeader.component'
import { loginService } from '../login';
import firebase from 'firebase/app';

export default angular.module('contacts',[])
    .component('contactsList',contactsList)
    .component('navHeader',navHeader)
    .name

    
