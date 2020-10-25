import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin/admin.service';
import { ActivatedRoute, Router } from '@angular/router';
import { any } from 'joi';


@Component({
  selector: 'app-edit-epname',
  templateUrl: './edit-epname.component.html',
  styleUrls: ['./edit-epname.component.scss']
})
export class EditEpnameComponent implements OnInit {

  step = 0;
  epname: any;
  epnumber: any;
  epdiscription: any
  epid: any;
  bookid: any;

  constructor(public adminService: AdminService, private router: ActivatedRoute, private _router: Router) {
    this.epid = this.router.snapshot.params['epid'];
  }

  ngOnInit(): void {

    this.getEp(this.epid)
  }


  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }

  getEp(model: any){
    console.log("model getEp", model)
    this.adminService.getEp(model).subscribe(data => {
      this.epname = this.adminService._getEp[0].epname;
      this.epnumber = this.adminService._getEp[0].epnumber;
      this.epdiscription = this.adminService._getEp[0].epdiscription;
      this.bookid = this.adminService._getEp[0].bookid;
    })
  }

  updateEpnaem(){
    let newData = {
      _id: this.epid,
      epname: this.epname,
      epnumber: this.epnumber,
      epdiscription: this.epdiscription,
      bookid: this.bookid
    }
    this.adminService.updateEpnaem(newData).subscribe(data => {
      this._router.navigate([`admin/ep-manga/${this.bookid}`])
    })

    console.log('Update' ,newData)
  }


}
