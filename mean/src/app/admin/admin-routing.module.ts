import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AdminComponent } from './admin.component';
import { OnlyAdminUsersGuard } from './admin-user-guard';
import { MemberComponent } from './components/member/member.component';
import { AddMangaComponent } from './components/add-manga/add-manga.component';
import { EpMangaComponent } from './components/ep-manga/ep-manga.component';
import { EditTitlenameComponent } from './components/edit-titlename/edit-titlename.component';
import { EditEpnameComponent } from './components/edit-epname/edit-epname.component';

const routes: Routes = [
  {
    path: '',
    canActivate: [OnlyAdminUsersGuard], component: AddMangaComponent
  },
  {path: 'member', canActivate: [OnlyAdminUsersGuard], component: MemberComponent},
  {path: 'add-manga', canActivate: [OnlyAdminUsersGuard], component: AddMangaComponent},
  {path: 'ep-manga/:bookid', canActivate: [OnlyAdminUsersGuard], component: EpMangaComponent},
  {path: 'edit-titlename/:bookid', canActivate: [OnlyAdminUsersGuard], component: EditTitlenameComponent},
  {path: 'edit-epname/:epid', canActivate: [OnlyAdminUsersGuard], component: EditEpnameComponent}


];

@NgModule({
  imports: [RouterModule.forChild(routes),
    CommonModule],

  exports: [RouterModule]
})

export class AdminRoutingModule { }
