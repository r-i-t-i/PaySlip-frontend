import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { EditorComponent } from './Components/editor/editor.component';


const routes: Routes = [
  {path: 'dashboard', component:DashboardComponent},
  {path : 'editor', component:EditorComponent},
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
