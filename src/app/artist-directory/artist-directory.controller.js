const EArtistsOrderBy = {
  NAME: 'name',
  REKNOWN: 'reknown'
};

const EArtistsOrder = {
  ASC: 'asc',
  DESC: 'desc'
};

function ArtistDirectoryController($scope, $http) {
  $scope.artists = [];

  $http.get('/data/artists.json').then(function (response) {
    $scope.artists = response.data;
  });

  $scope.artistsOrderByEnum = EArtistsOrderBy;
  $scope.artistsOrderBy = EArtistsOrderBy.NAME; // set default order by
  $scope.artistsOrderEnum = EArtistsOrder;
  $scope.artistsOrder = EArtistsOrder.ASC; // set default order
}

ArtistDirectoryController.bindings = {};

export default ArtistDirectoryController;
