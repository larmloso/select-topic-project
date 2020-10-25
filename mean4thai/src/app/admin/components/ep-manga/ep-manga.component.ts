import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AdminService } from 'src/app/shared/services/admin/admin.service'



@Component({
  selector: 'app-ep-manga',
  templateUrl: './ep-manga.component.html',
  styleUrls: ['./ep-manga.component.css']
})
export class EpMangaComponent implements OnInit {

  bookid: any;
  step = 0;
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

  ngOnInit(): void {
    console.log("this is a ", this.bookid);
    this.getOneEp(this.bookid)
    this.getAllEp(this.bookid)
  }

  getOneEp(bookid: any) {
    this.adminService.getOneEp(bookid).subscribe(data => {
      console.log('data', data)
    })
  }

  getAllEp(bookid: any) {
    this.adminService.getAllEp(bookid).subscribe(data => {
      console.log('data', data)
    })
  }

  onSubmit(f: any) {
    let newData = {
      bookid: this.bookid,
      epdiscription: f.value.epdiscription,
      epnumber: f.value.epnumber,
      epname: f.value.epname
    }

    this.adminService.addEpisode(newData).subscribe(data => {
      console.log("add new episoded");
      window.location.reload();
    })

  }

  epnameDel(item: any) {
    if (confirm("Do you want delete '" + item.epname + "'")) {
      this.adminService.epnameDel(item._id).subscribe(data => {
        window.location.reload();
      })
    }


  }

  deleteall(item: any){

    console.log("item", item);
    if (confirm("Do you want delete '" + item.titlename + "'")) {
      this.adminService.titlenameDel(item.bookid).subscribe(data => {
        this.adminService.epnameDelall(item.bookid).subscribe(data => {

          this._router.navigate(['/admin/add-manga/'])
        })

      })
    }
  }


}
