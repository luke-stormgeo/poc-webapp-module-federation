import {
  LoadRemoteEntryOptions,
  loadRemoteModule,
  LoadRemoteModuleOptions,
} from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {
  WebComponentWrapper,
  WebComponentWrapperOptions,
} from '@angular-architects/module-federation-tools';

const routes: Routes = [
  {
    path: 'table',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4201/remoteEntry.js',
        exposedModule: './TableModule',
      }).then((m) => m.TableModule),
  },
  /* {
    path: 'graph',
    loadChildren: () =>
      loadRemoteModule({
        type: 'module',
        remoteEntry: 'http://localhost:4203/remoteEntry.js',
        exposedModule: './GraphModule',
      }).then((m) => m.GraphModule),
  }, */
  {
    path: 'graph',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4203/remoteEntry.js',
      type: 'module',
      exposedModule: './GraphModule',
      elementName: 'graph-element',
    } as WebComponentWrapperOptions,
  },
  {
    path: 'map',
    component: WebComponentWrapper,
    data: {
      remoteEntry: 'http://localhost:4202/remoteEntry.js',
      remoteName: 'react',
      exposedModule: './ReactMap',
      elementName: 'react-element',
    } as WebComponentWrapperOptions,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'table'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
