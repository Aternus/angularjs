function ArtistController($scope, $routeParams, $http) {
  const {shortname} = $routeParams;
  $scope.shortname = shortname;
  $scope.artist = undefined;
  $scope.nextArtistUrl = undefined;
  $scope.prevArtistUrl = undefined;
  $scope.homeUrl = '/#!/';
  $scope.artistsUrl = '/#!/artists/';

  $http.get('/data/artists.json').then(function (response) {
    const {data} = response;
    if (Array.isArray(data)) {
      const artists = data;
      const artistIndex = data.findIndex(
        (artist) => artist.shortname === shortname
      );
      const nextArtistIndex =
        artistIndex + 1 === artists.length ? 0 : artistIndex + 1;
      const prevArtistIndex =
        artistIndex - 1 < 0 ? artists.length - 1 : artistIndex - 1;

      $scope.artist = artists[artistIndex];
      $scope.nextArtistUrl = `/#!/artist/${artists[nextArtistIndex]['shortname']}`;
      $scope.prevArtistUrl = `/#!/artist/${artists[prevArtistIndex]['shortname']}`;
    }
  });
}

ArtistController.bindings = {};

export default ArtistController;
