export default class ArtistController {
  static bindings = {};
  static $inject = ['$routeParams', '$http'];

  constructor($routeParams, $http) {
    this.$routeParams = $routeParams;
    this.$http = $http;

    const {shortname} = this.$routeParams;
    this.shortname = shortname;
    this.artist = undefined;
    this.nextArtistUrl = undefined;
    this.prevArtistUrl = undefined;
    this.homeUrl = '/#!/';
    this.artistsUrl = '/#!/artists/';
  }

  $onInit() {
    this.$http.get('/data/artists.json').then((response) => {
      const {data} = response;
      if (Array.isArray(data)) {
        const artists = data;
        const artistIndex = data.findIndex(
          (artist) => artist.shortname === this.shortname
        );
        const nextArtistIndex =
          artistIndex + 1 === artists.length ? 0 : artistIndex + 1;
        const prevArtistIndex =
          artistIndex - 1 < 0 ? artists.length - 1 : artistIndex - 1;

        this.artist = artists[artistIndex];
        this.nextArtistUrl = `/#!/artist/${artists[nextArtistIndex]['shortname']}`;
        this.prevArtistUrl = `/#!/artist/${artists[prevArtistIndex]['shortname']}`;
      }
    });
  }
}
