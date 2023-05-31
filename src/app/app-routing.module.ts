import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  // {path:'',redirectTo:'login',pathMatch:'full'},
  // {path:'login',component:LoginComponent},
  // {path:'home',component:HomeComponent},
  // {path:'header',component:HeaderComponent},
  // {path:'movie',component:MovieComponent},
  // {path:'**',component:LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
