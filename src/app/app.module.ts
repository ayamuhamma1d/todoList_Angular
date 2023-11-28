import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { FormsModule } from '@angular/forms';
import { TaskInputComponent } from './task-input/task-input.component';
import { TableComponent } from './table/table.component';


@NgModule({
  declarations: [
    AppComponent,
    ToDoListComponent,
    TaskInputComponent,
    TableComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
