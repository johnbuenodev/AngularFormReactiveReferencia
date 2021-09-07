import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormreactiveComponent } from './formreactive/formreactive.component';

const routes: Routes = [
  
  {
   path:"",
   component:FormreactiveComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
