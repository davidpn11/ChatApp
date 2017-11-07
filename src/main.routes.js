import angular from 'angular';
routes.$inject = ['$urlRouterProvider','$stateProvider'];

export default function routes($urlRouterProvider, $stateProvider) {
    $urlRouterProvider.otherwise('/login');
    $stateProvider
        .state('/', {
            url:'/',
            views: {
                "": {
                    templateUrl: 'src/main.html',
                }
            }   
        })
        .state('/login', {
            url:'/login',
            views: {
                "": {
                    templateUrl: 'src/app/login/login.html',
                }
            }  
        });
};


