import { loadRemoteModule } from '@angular-architects/module-federation';
import { Routes } from '@angular/router';
const MFE_URL = 'http://localhost:4300/remoteEntry.js';
export const routes: Routes = [
  // {
  //   path: '',
  //   loadChildren: () => import('remoteApp1/HeroComponent').then(m => m.HeroComponent)
  // },
  { path: '', loadComponent: () => {
    return loadRemoteModule({
      remoteEntry: MFE_URL,
      remoteName: "remoteApp1",
      exposedModule: "./HeroComponent"
    }).then(m => m.HeroComponent).catch(err => console.log(err))
  } },
];
