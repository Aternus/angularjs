const EArtistsOrderBy = {
  NAME: 'name',
  REKNOWN: 'reknown'
};

const EArtistsOrder = {
  ASC: 'asc',
  DESC: 'desc'
};

export default class ArtistDirectoryController {
  static bindings = {};
  static $inject = ['$http'];

  constructor($http) {
    this.$http = $http;

    this.artists = [];
    this.artistsOrderByEnum = EArtistsOrderBy;
    this.artistsOrderBy = EArtistsOrderBy.NAME; // set default order by
    this.artistsOrderEnum = EArtistsOrder;
    this.artistsOrder = EArtistsOrder.ASC; // set default order
  }

  $onInit() {
    this.$http.get('/data/artists.json').then((response) => {
      this.artists = response.data;
    });
  }
}
