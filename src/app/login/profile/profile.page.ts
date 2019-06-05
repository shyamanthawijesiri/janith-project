import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {NavController} from '@ionic/angular';



@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
  menu: any;

  constructor(public router: Router) {

  }
  lgoutClicked() {
    console.log( 'Buttton clicked');
    this.router.navigateByUrl('home');
    alert('Are you sure you wannt to login...?');
  }


  ngOnInit() {
  }

}
