import { HomePageComponent } from './home-page/home-page.component';
import { TextInputComponent } from './text-input/text-input.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  {
    path: 'add',
    component: TextInputComponent,
  },
  { path: '', redirectTo: '/home', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
