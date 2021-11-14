import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TaskCardComponent } from './task-card/task-card.component';
import { ButtonComponent } from './button/button.component';
import { TextInputComponent } from './text-input/text-input.component';
import { HomePageComponent } from './home-page/home-page.component';
import { TaskCardListComponent } from './task-card-list/task-card-list.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { TodoRoutingModule } from './todo-routing.module';

@NgModule({
  declarations: [
    TaskCardComponent,
    ButtonComponent,
    TextInputComponent,
    HomePageComponent,
    TaskCardListComponent,
  ],
  imports: [
    CommonModule,
    TodoRoutingModule,
    MatCardModule,
    MatButtonModule,
    MatInputModule,
  ],
})
export class TodoModule {}
