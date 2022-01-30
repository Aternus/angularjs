const EArtistOrder = {
  NAME: 'name',
  REKNOWN: 'reknown',
};

function ArtistDirectoryController($scope, $http) {
  $scope.artists = [];

  $http.get('/data/artists.json').then(function (response) {
    $scope.artists = response.data;
  });

  $scope.artistOrderEnum = EArtistOrder;
  $scope.artistOrder = EArtistOrder.NAME; // set default order
}

ArtistDirectoryController.bindings = {};

export default ArtistDirectoryController;
