import { Route } from '@angular/router';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const appRoutes: Route[] = [
  {
    path: 'remote-1',
    loadChildren: () =>
      loadRemoteModule({
        remoteEntry: 'http://localhost:4201/remoteAppEntry.js',
        remoteName: 'remoteApp',
        exposedModule: './Module',
      }).then((m) => m.RemoteEntryModule),
  },
];
