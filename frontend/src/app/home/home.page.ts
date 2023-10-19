import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router : Router) {}

  gotoSectors(){
    this.router.navigateByUrl("/sectors-page");
  }
  // gotoSales(){
  //   this.router.navigateByUrl("/form-sales");
  // }
}