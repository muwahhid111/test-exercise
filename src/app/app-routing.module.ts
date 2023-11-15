import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './components/list/list.component';
import { AppComponent } from './app.component';
import { Link1Component } from './components/link1/link1.component';
import { Link2Component } from './components/link2/link2.component';
import { Link3Component } from './components/link3/link3.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  { path: '', component: HomeComponent, },
  { path: 'list', component: ListComponent },
  { path: 'list/link1', component: Link1Component },
  { path: 'list/link2', component: Link2Component },
  { path: 'list/link3', component: Link3Component },
  {path: '**', redirectTo: '', component: HomeComponent,}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
