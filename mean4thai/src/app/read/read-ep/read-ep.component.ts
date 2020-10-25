import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin/admin.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-read-ep',
  templateUrl: './read-ep.component.html',
  styleUrls: ['./read-ep.component.css']
})
export class ReadEpComponent implements OnInit {

  epid: any;
  constructor(public adminService: AdminService, private router: ActivatedRoute) {
    this.epid = this.router.snapshot.params['epid'];
   }
  ngOnInit(): void {
    this.adminService.getEp(this.epid).subscribe()
  }

}
