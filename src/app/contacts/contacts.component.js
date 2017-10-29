module.exports = {
    template: require('./contactsList.html'),   
    controller: contactsController,    
}

function contactsController() {
    console.log('carregou contactsCtrl');
}