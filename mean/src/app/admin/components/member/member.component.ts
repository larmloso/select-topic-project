import { Component, OnInit } from '@angular/core';
import { AdminService } from 'src/app/shared/services/admin/admin.service';

@Component({
  selector: 'app-member',
  templateUrl: './member.component.html',
  styleUrls: ['./member.component.scss']
})
export class MemberComponent implements OnInit {

  step = 0
  constructor(public adminService: AdminService) { }

  ngOnInit(): void {
    this.adminService.getAlluser().subscribe()
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

  userDel(item: any){
    if(confirm("do you want to delete ? '"+ item.fullname + "'")){
      this.adminService.userDel(item).subscribe()
    }

  }


}
