module.exports = {
    template: require('./navHeader.html'),   
    controller: navHeaderController,    
}

function navHeaderController() {
    console.log('carregou navHeaderController');
}