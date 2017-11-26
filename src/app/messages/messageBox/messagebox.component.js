let firebase = require("firebase");

module.exports = {
    template: require('./messagebox.html'),   
    controller: messagesBoxController,    
    controllerAs: 'ctrl',
}

function messagesBoxController(loginService, $stateParams, $timeout) {
    this.messagesArray = [];
    this.sourceUser = loginService.getLocalUserData();
    const msgsRef = firebase.database().ref().child('Contacts/' + this.sourceUser.uid +'/Conversations/'+ $stateParams.userID);
    msgsRef.on('child_added', (data) => {
        $timeout(() => {
            this.messagesArray.push(data.val());
        }, 100);
    });
}