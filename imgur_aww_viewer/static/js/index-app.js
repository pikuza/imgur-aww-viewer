
angular.module('project', ['ngResource', 'ng.django.urls'])
    .controller('IndexAppCtrl', ['$scope', '$http', '$resource', 'djangoUrl',
                function($scope, $http, $resource, djangoUrl) {

        // TODO: move headers set to base module/config/controller
        $http.defaults.useXDomain = true;
        $http.defaults.headers.common['Authorization'] = 'Client-ID ' + IMGUR_CLIENT_ID;

        $scope.images = [];
        var images = $resource(
            'https://api.imgur.com/3/gallery/r/:subreddit',
            {subreddit: 'aww'}
        );
        images.get({}, function(result) {
            angular.forEach(result.data, function (item) {
                $scope.images.push({
                    title: item.title,
                    link: item.link,
                    // TODO: try to find another way to determine URL for details page using JS
                    url: djangoUrl.reverse('images:detail', [item.id])
                });
            });

        });

    }]);
