import angular from 'angular'

import contactsList from './contactsList/contactsList.component'
import navHeader from './navHeader/navHeader.component'

export default angular.module('contacts',[])
    .component('contactsList',contactsList)
    .component('navHeader',navHeader)
    .name
    
