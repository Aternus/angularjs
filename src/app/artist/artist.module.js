import angular from 'angular';
import artistComponent from './artist.component';

const moduleName = 'artist';

angular
  .module(moduleName, [])
  .component(artistComponent.name, artistComponent.options);

export default moduleName;
