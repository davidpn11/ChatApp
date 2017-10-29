module.exports = {
    template: require('./messagesender.html'),   
    controller: senderController,    
}

function senderController() {
    console.log('carregou contactsCtrl');
}