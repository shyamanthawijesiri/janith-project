import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.page.html',
  styleUrls: ['./articles.page.scss'],
})
export class ArticlesPage implements OnInit {

  constructor(public router: Router) {}

  goBack() {
    this.router.navigateByUrl('home');

  }

  ngOnInit() {}

}
