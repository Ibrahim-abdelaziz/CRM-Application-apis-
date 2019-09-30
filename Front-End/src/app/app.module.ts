import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { TasksService } from './services/tasks.service';
import { ApiService } from './services/APIService';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddTaskComponent,
    NotFoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [ApiService,TasksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
