import {PLATFORM} from 'aurelia-pal';

export function configure(config) {
  config.globalResources(
    PLATFORM.moduleName('./todo-list'),
    PLATFORM.moduleName('./todo-item')
  );
}
