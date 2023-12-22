import { Route } from '@angular/router';
import { OutletNamingComponent } from './outlet-naming.component';
import { CompAComponent } from './comp-a/comp-a.component';
import { CompBComponent } from './comp-b/comp-b.component';
import { loadRemoteModule } from '@angular-architects/module-federation';

export const outletNamingRoutes: Route[] = [
  {
    path: 'outlet-naming',
    component: OutletNamingComponent,
    children: [
      {
        path: 'comp-a',
        outlet: 'outlet-a',
        component: CompAComponent,
      },
      {
        path: 'comp-b',
        outlet: 'outlet-b',
        component: CompBComponent,
      },
      {
        path: 'mf-c',
        outlet: 'outlet-c',
        loadChildren: () =>
          loadRemoteModule({
            remoteEntry: 'http://localhost:4201/remoteAppEntry.js',
            remoteName: 'remoteApp',
            exposedModule: './Module',
          }).then((m) => m.RemoteEntryModule),
      },
    ],
  },
];
