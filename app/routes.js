app.config(function($routeProvider) {
    $routeProvider
        .when('/home', {
            templateUrl: 'app/views/home.html',
            controller: 'HomeController'
        })
        
        .when('/sobre', {
            templateUrl: 'app/views/sobre.html',
            controller: 'SobreController'
        })

        .otherwise({
            redirectTo: '/home' // Redireciona para a página inicial por padrão
        });
});
