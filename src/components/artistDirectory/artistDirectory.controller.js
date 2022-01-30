const EArtistOrder = {
  NAME: 'name',
  REKNOWN: 'reknown',
};

function ArtistDirectoryController($scope, $http) {
  $http.get('/data/artists.json').then(function (response) {
    $scope.artists = response.data;
  });

  $scope.artistOrderEnum = EArtistOrder;
  $scope.artistOrder = EArtistOrder.NAME; // set default order
}

ArtistDirectoryController.bindings = {
  artists: '<',
  artistOrderEnum: '<',
  artistOrder: '<',
};

export default ArtistDirectoryController;
