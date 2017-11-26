import angular from 'angular'

import messageBox from './messageBox/messagebox.component'
import messageSender from './messageSender/messagesender.component'
import msgBallonLeft from './msgBallon/msgBallonLeft.component'
import msgBallonRight from './msgBallon/msgBallonRight.component'
import glue from 'angularjs-scroll-glue'

export default angular.module('messages',[glue])
    .component('messageBox',messageBox)
    .component('messageSender',messageSender)
    .component('msgBallonLeft',msgBallonLeft)
    .component('msgBallonRight',msgBallonRight)
    .name
    
