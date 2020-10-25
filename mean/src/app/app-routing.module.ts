import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AuthGuard } from './shared/guards';
import { HomeComponent } from './home/home.component';
import { HeroComponent } from './hero/hero.component';
import { ReadTitleComponent } from './read/read-title/read-title.component';
import { ReadEpComponent } from './read/read-ep/read-ep.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    //canActivate: [AuthGuard],
  },
  {
    path: 'hero',
    component: HeroComponent,
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule),
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
  },
  {
    path: 'read/:bookid', component: ReadTitleComponent
  },
  {
    path: 'read-ep/:epid', component: ReadEpComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
