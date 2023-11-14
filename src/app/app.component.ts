import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'clout-chasers';
  constructor(private router: Router){
  }

  redirect(address : string){
    this.router.navigateByUrl(address);
  }
}
