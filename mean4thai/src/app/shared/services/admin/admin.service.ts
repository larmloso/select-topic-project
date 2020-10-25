import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators'

import { Observable, BehaviorSubject, EMPTY } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AdminService {

  _getOneEp: any;
  _getAll: any;
  _getAllepname: any;
  _getEp: any;

  _mangacount: any;
  _epmangacount: any;
  _alluser: any;
  _countalluser: any;

  constructor(private http: HttpClient) { }

  //เพิ่มเรื่อง
  addTitle(model: any): Observable<any> {

    console.log('model', model)
    return this.http.post('/api/addtitlename/', model).pipe(
      map((response: any) => {
        console.log('response', response);
      })
    )
  }

  // เรื่องที่จะเขียนตอน
  getOneEp(model: any): Observable<any> {
    console.log('getOneEp', model)
    return this.http.get(`/api/addtitlename/get/${model}`).pipe(
      map((response: any) => {
        this._getOneEp = response;
      })
    );
  }

  // ข้อมูล ep 1 ep
  getEp(model: any): Observable<any> {
    return this.http.get(`/api/epname/getepid/${model}`).pipe(
      map((response: any) => {
        this._getEp = response;
        console.log("this is respon",response)
      })
    );
  }




  //เลือกเรื่องทั้งหมด
  getAll() {
    return this.http.get('/api/addtitlename/all').pipe(
      map((response: any) => {
        this._getAll = response;
        this._mangacount = response.length;
        console.log('mangacount', this._mangacount);
      })
    )
  }

  //เพิ่ม ep

  addEpisode(model: any): Observable<any> {
    console.log('adminservice', model)
    return this.http.post('/api/epname/', model).pipe(
      map((response: any) => {
        this._getAllepname = response;
      })
    )
  }

  ////เลือก ep ทั้งหมด
  getAllEp(model: any): Observable<any> {
    console.log('getOneEp', model)
    return this.http.get(`/api/epname/get/${model}`).pipe(
      map((response: any) => {
        this._getAllepname = response;
        this._epmangacount = response.length;
      })
    )
  }

  //ลบเรื่อง
  titlenameDel(model: any): Observable<any> {
    console.log('title Del', model)
    return this.http.get(`/api/addtitlename/del/${model}`).pipe(
      map((response: any) => {
        console.log('getAllep', response);
      })
    )
  }

//ลบ ep
  epnameDel(model: any): Observable<any> {
    return this.http.get(`/api/epname/del/${model}`).pipe(
      map((response: any) => {
        console.log('getAllep', response);
      })
    )
  }


  //ลบ ep ทั้งหมด
  epnameDelall(model: any): Observable<any> {
    return this.http.get(`/api/epname/delall/${model}`).pipe(
      map((response: any) => {
        console.log('getAllep', response);
      })
    )
  }
  // แก้ไขชื่อเรื่อง
  Updatetitle(model: any): Observable<any>{
    return this.http.post('/api/addtitlename/update', model).pipe(
      map((response: any) => {
        console.log('getAllep', response);
      })
    )
  }

  //แก้ไข ep
  updateEpnaem(model: any): Observable<any>{
    return this.http.post('/api/epname/update', model).pipe(
      map((response: any) => {
        console.log('getAllep', response);
      })
    )
  }

  // member ทั้งหมด

  getAlluser(){
    return this.http.get('/api/addtitlename/getalluser').pipe(
      map((response: any) => {
        this._alluser = response;
        this._countalluser = response.length;
        console.log("alluser", this._alluser)
      })
    )
  }

 // ลบ member
  userDel(model: any){
    return this.http.post('/api/addtitlename/deluser', model).pipe(
      map((response: any) => {
        console.log("deleted")
      })
    )
  }

}
