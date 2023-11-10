import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { RecordsComponent } from './records/records.component';

const routes: Routes = [
  { path: 'records', component: RecordsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
