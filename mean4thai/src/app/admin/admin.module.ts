import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { OnlyAdminUsersGuard } from './admin-user-guard';

import { SharedModule } from '../shared/shared.module';
import { MemberComponent } from './components/member/member.component';
import { AddMangaComponent } from './components/add-manga/add-manga.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { LayoutModule } from '@angular/cdk/layout';
import { NavigationsComponent } from './components/navigations/navigations.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { EpMangaComponent } from './components/ep-manga/ep-manga.component';
import { EditTitlenameComponent } from './components/edit-titlename/edit-titlename.component';
import { EditEpnameComponent } from './components/edit-epname/edit-epname.component';



@NgModule({
  declarations: [
    AdminComponent,
    MemberComponent,
    AddMangaComponent,
    DashboardComponent,
    NavigationsComponent,
    EpMangaComponent,
    EditTitlenameComponent,
    EditEpnameComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,

  ],
  providers: [
    OnlyAdminUsersGuard
  ]
})
export class AdminModule { }
