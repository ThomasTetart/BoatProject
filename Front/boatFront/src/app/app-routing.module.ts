import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { AuthGuard } from 'src/guard/guard_auth';
import { CreateBoatComponent } from './create-boat/create-boat.component';
import { DetailBoatComponent } from './detail-boat/detail-boat.component';


const routes: Routes = [

  { path: '', component: LoginComponent, canActivate: [AuthGuard]  },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'newBoat', component: CreateBoatComponent, canActivate: [AuthGuard] },
  { path: 'detail/:id', component: DetailBoatComponent, canActivate: [AuthGuard] },

]; 

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
