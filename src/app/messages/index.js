import angular from 'angular'

import messageBox from './messageBox/messagebox.component'
import messageSender from './messageSender/messagesender.component'

export default angular.module('messages',[])
    .component('messageBox',messageBox)
    .component('messageSender',messageSender)
    .name
    
