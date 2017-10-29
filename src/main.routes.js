import angular from 'angular';
routes.$inject = ['$urlRouterProvider','$stateProvider'];

export default function routes($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/');
    $stateProvider
        .state('/', {
            url:'/',
            templateUrl: 'src/main.html',            
        });
};


