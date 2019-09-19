import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainpageComponent} from './container/mainpage/mainpage.component';
import { LoginComponent } from './container/login/login.component';


const routes: Routes = [
  {path: 'main', component: MainpageComponent},
  {path: 'login', component: LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
