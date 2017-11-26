import angular from 'angular'

import messageBox from './messageBox/messagebox.component'
import messageSender from './messageSender/messagesender.component'
import msgBallonLeft from './msgBallon/msgBallonLeft.component'
import msgBallonRight from './msgBallon/msgBallonRight.component'

export default angular.module('messages',[])
    .component('messageBox',messageBox)
    .component('messageSender',messageSender)
    .component('msgBallonLeft',msgBallonLeft)
    .component('msgBallonRight',msgBallonRight)
    .name
    
