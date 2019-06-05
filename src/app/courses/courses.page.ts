import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component ({
  selector: 'app-courses',
  templateUrl: './courses.page.html',
  styleUrls: ['./courses.page.scss'],
})
export class CoursesPage implements OnInit {

  constructor(public router: Router) { }

  goBack() {
    this.router.navigateByUrl('home');
  }


l
  ngOnInit() {
  }

}
