let firebase = require("firebase");

module.exports = {
    template: require('./messagesender.html'),   
    controller: senderController,    
    controllerAs: 'ctrl',  
}

function senderController($stateParams, loginService) {
    const targetUserId = $stateParams.userID;
    const sourceUser = loginService.getLocalUserData();
    const conversationRef = firebase.database().ref().child('Contacts/' + sourceUser.uid +'/Conversations/'+ targetUserId);
    const targetRef = firebase.database().ref().child('Contacts/' + targetUserId +'/Conversations/'+ sourceUser.uid);
    console.log('iniciou');
    
    this.sendMsg = () => {
        let msgText = document.getElementById('message-input').value;
        if (msgText.length > 0) {         
            let msgRef = conversationRef.push();
            msgRef.set({
                msgSource: sourceUser.uid,
                msgType: 'text',
                msgContent: msgText
            });
            
            let msgTargetRef = targetRef.push();
            msgTargetRef.set({
                msgSource: sourceUser.uid,
                msgType: 'text',
                msgContent: msgText
            });
        }else {
            console.log('empty msg');
        }
    };
}