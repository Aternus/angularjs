import angular from 'angular';
import artistModule from '../artist/artist.module';
import artistDirectoryComponent from './artist-directory.component';

const moduleName = 'artistsDirectory';

angular
  .module(moduleName, [artistModule])
  .component(artistDirectoryComponent.name, artistDirectoryComponent.options);

export default moduleName;
