module.exports = {
    template: require('./messagebox.html'),   
    controller: messagesBoxController,    
}

function messagesBoxController() {
    console.log('carregou contactsCtrl');
}