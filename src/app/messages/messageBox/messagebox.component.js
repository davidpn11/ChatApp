let firebase = require("firebase");

module.exports = {
    template: require('./messagebox.html'),   
    controller: messagesBoxController,    
}

function messagesBoxController($rootScope, $stateParams) {
    console.log('messagesBoxController', $stateParams);
    const userRef = firebase.database().ref().child('Contacts/' + $stateParams.userID +'/Conversations');
    userRef.once('value').then( (snap) => {
        console.log(snap.val());
    });
}