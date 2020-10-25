import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin/admin.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(public adminService: AdminService) { }

  ngOnInit() {
    this.adminService.getAll().subscribe()
  }

}
