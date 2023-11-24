import { Component, OnInit } from '@angular/core';
import { Route, Router } from '@angular/router';
import { Record } from './records.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'clout-chasers';
  constructor(private router: Router){
  }

  redirect(address : string){
    this.router.navigateByUrl(address);
  }

  ngOnInit(): void {
    this.redirect('home');
  }
}
