import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin/admin.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-read-title',
  templateUrl: './read-title.component.html',
  styleUrls: ['./read-title.component.css']
})
export class ReadTitleComponent implements OnInit {

  bookid: any;
  titlename: any;

  constructor(public adminService: AdminService, private router: ActivatedRoute) {
    this.bookid = this.router.snapshot.params['bookid'];
   }

  ngOnInit(): void {
    this.adminService.getAllEp(this.bookid).subscribe()
    this.adminService.getOneEp(this.bookid).subscribe(data => {
      this.title();
    })

  }

  title(){
    this.titlename = this.adminService._getOneEp[0].titlename;
    console.log("hello", this.titlename)
  }

}
