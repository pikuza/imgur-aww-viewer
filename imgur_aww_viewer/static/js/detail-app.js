
angular.module('project', ['ngResource'])
    .controller('DetailAppCtrl', ['$scope', '$http', '$resource', function($scope, $http, $resource) {

        // TODO: move headers set to base module/config/controller
        $http.defaults.useXDomain = true;
        $http.defaults.headers.common['Authorization'] = 'Client-ID ' + IMGUR_CLIENT_ID;

        $scope.attributes = [];
        var images = $resource(
            'https://api.imgur.com/3/gallery/r/:subreddit/:imageId',
            {subreddit: 'aww', imageId: imageId}
        );
        images.get({}, function(result) {
            angular.forEach(result.data, function(value, key) {
                if (value) {
                    $scope.attributes.push({
                        name: key,
                        value: value
                    });
                }
            });
        });

    }]);
