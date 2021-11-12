import { TaskCardComponent } from './task-card/task-card.component';
import { TextInputComponent } from './text-input/text-input.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', component: TaskCardComponent },
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
