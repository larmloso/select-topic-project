import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin/admin.service'
interface Types {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-edit-titlename',
  templateUrl: './edit-titlename.component.html',
  styleUrls: ['./edit-titlename.component.scss']
})
export class EditTitlenameComponent implements OnInit {

  titlename: any;
  discription: any;

  step = 0;
  selectedValue: any;
  bookid: any;

  constructor(private router: ActivatedRoute, public adminService: AdminService, private _router: Router) {
    this.bookid = this.router.snapshot.params['bookid'];
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

  foods: Types[] = [
    {value: 'ตลก', viewValue: 'ตลก'},
    {value: 'ผจญภัย', viewValue: 'ผจญภัย'},
    {value: 'โรแมนติค', viewValue: 'โรแมนติค'},
    {value: 'สยองขวัญ', viewValue: 'สยองขวัญ'}
  ];

  ngOnInit(): void {
    this.getOneEp(this.bookid)
  }

  Updatetitle(){
    let newData = {
      titlename: this.titlename,
      discription: this.discription,
      bookid: this.bookid,
      types: this.selectedValue
    }
    this.adminService.Updatetitle(newData).subscribe(data => {
      this._router.navigate([`admin/ep-manga/${this.bookid}`])
    })

  }

  getOneEp(model: any){
    this.adminService.getOneEp(model).subscribe(data => {
      this.titlename = this.adminService._getOneEp[0].titlename;
      this.discription = this.adminService._getOneEp[0].discription;
      this.selectedValue = this.adminService._getOneEp[0].types;
    })

  }

}
