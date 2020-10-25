import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin/admin.service';
import { Router } from '@angular/router';

interface Types {
  value: string;
  viewValue: string;
}

@Component({
  selector: 'app-add-manga',
  templateUrl: './add-manga.component.html',
  styleUrls: ['./add-manga.component.scss']
})
export class AddMangaComponent implements OnInit {
  step = 0;
  selectedValue: any;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }


  constructor(public adminService: AdminService, private router: Router) { }

  ngOnInit(): void {
    this.getAll()
    this.getAlluser()
  }

  foods: Types[] = [
    {value: 'ตลก', viewValue: 'ตลก'},
    {value: 'ผจญภัย', viewValue: 'ผจญภัย'},
    {value: 'โรแมนติค', viewValue: 'โรแมนติค'},
    {value: 'สยองขวัญ', viewValue: 'สยองขวัญ'}
  ];

  onSubmit(f: any){
    this.adminService.addTitle(f.value).subscribe(data => {
      this.router.navigate([`admin/ep-manga/${f.value.bookid}`])
    })
  }

  getAll(){
    this.adminService.getAll().subscribe(data =>
      console.log("getall")
    )
  }

  titlenameDel(item: any){
    if(confirm("do you want to Delete  "+"'" + item.titlename + "'")){
      this.adminService.titlenameDel(item.bookid).subscribe(data => {
        this.adminService.epnameDelall(item.bookid).subscribe(data => {
          window.location.reload();
        })

      })

    }

  }

  getAlluser(){
    this.adminService.getAlluser().subscribe()
  }

}
