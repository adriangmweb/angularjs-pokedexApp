(function () {
    
    var app = angular.module('pokedex', [
        'ngRoute',
        'pokedex.controllers',
        'pokedex.directives',
        'pokedex.filters',
        'pokedex.services'
    ]);
    
    app.config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
        $locationProvider.html5Mode(true);
        
        $routeProvider
            .when('/', {
                templateUrl: 'views/pokedex.html',
                controller: 'PokedexController'
            })
            .when('/pokemon/:name', {
                templateUrl: 'views/pokemon.html',
                controller: 'PokemonController'
            })
            .when('/:type', {
                templateUrl: 'views/pokedex.html',
                controller: 'PokedexController'
            })
            .otherwise({
                redirectTo: '/'
            });
        
    }]);

})();