import angular from 'angular';
import artistsDirectoryModule
  from '../artist-directory/artists-directory.module';
import homeComponent from './home.component';

const moduleName = 'home';

angular
  .module(moduleName, [artistsDirectoryModule])
  .component(homeComponent.name, homeComponent.options);

export default moduleName;
